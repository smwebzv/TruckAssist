import * as React from "react";
import { Dimensions, Platform, Animated } from "react-native";
import * as RootNavigation from "../../navigation/RootNavigation";
import { styles } from "./Menu.style";
import * as Animatable from "react-native-animatable";
import DeviceInfo from "react-native-device-info";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../helpers/deviceModels";
import { BlurView } from "@react-native-community/blur";
import { useDispatch } from "react-redux";
import colors from "../../helpers/colors";
import { Shadow } from "react-native-shadow-2";
import Buttons from "./Buttons/Buttons";
import ExpandedButtons from "./ExpandedButtons/ExpandedButtons";
import SecureDBGateway from "../../gateways/SecureDBGateway";
import MainButton from "./MainButton/MainButton";
import { clearInfo, setCompanyUserData, setLoading, setloginSuccess, setUserData } from "../../redux/auth/authSlice";
import { setRepairShopList } from "../../redux/repair/repairSlice";
import { setCurrentScreen } from "../../redux/menu/menuSlice";
const dimensions = Dimensions.get("screen");

const Menu = () => {
  const model = DeviceInfo.getModel();
  const [showMenu, setShowMenu] = React.useState(false);
  const [height, setHeight] = React.useState(new Animated.Value(68));
  const animation = React.useRef(new Animated.Value(0)).current;
  const [tab, setTab] = React.useState(1);

  const logout = async () => {
    dispatch(setCompanyUserData({}));
    dispatch(setUserData({}));
    dispatch(clearInfo());
    dispatch(setLoading(false));
    dispatch(setRepairShopList([]));
    dispatch(setloginSuccess(false));
    await SecureDBGateway.delete("company-user-data");
    await SecureDBGateway.set("user-data", {});
    closeExpandMenu();
  };

  const changeTabScreen = (e: number) => {
    setTab(e);
    if (e == 1) {
      Animated.timing(height, {
        toValue: 636,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(height, {
        toValue: 432,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  };

  const expandMenu = () => {
    setShowMenu(true);
    Animated.timing(height, {
      toValue: 636,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const closeExpandMenu = () => {
    Animated.timing(height, {
      toValue: 68,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setShowMenu(false);
      setTab(1);
    }, 100);
  };

  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);
  const dispatch = useDispatch();

  const changeScreen = (route: string) => {
    RootNavigation.navigate(route);
    dispatch(setCurrentScreen(route));
    closeExpandMenu();
    setTab(1);
  };

  return (
    <Animatable.View
      animation="slideInUp"
      duration={350}
      style={[
        styles.mainHolder,
        deviceInfo && {
          padding: deviceInfo.padding,
          borderRadius: deviceInfo.corner,
          width: dimensions.width,
          height: 68 + 2 * deviceInfo.padding,
          alignItems: "center",
        },
        showMenu && {
          height: dimensions.height,
          justifyContent: "flex-end",
          bottom: deviceInfo ? -deviceInfo.padding : 0,
        },
      ]}
    >
      <MainButton
        deviceInfo={deviceInfo}
        closeExpandMenu={closeExpandMenu}
        expandMenu={expandMenu}
        showMenu={showMenu}
        tab={tab}
        animation={animation}
      />
      <Shadow
        startColor="#0000001A"
        distance={5}
        style={[
          styles.blurHolder,
          deviceInfo && {
            borderRadius: deviceInfo.corner,
            width: dimensions.width - 2 * deviceInfo.padding,
            height: 68,
          },
          showMenu && {
            height: dimensions.height,
            justifyContent: "flex-end",
            width: dimensions.width,
          },
        ]}
      >
        <BlurView
          style={[
            styles.blur,
            showMenu && {
              height: dimensions.height,
              justifyContent: "flex-end",
            },
          ]}
          blurAmount={3}
          blurType="light"
          overlayColor="transparent"
        >
          <Animated.View
            style={[
              styles.blockButtonsHolder,
              { height: height },
              { alignItems: deviceInfo ? "center" : "flex-start" },
              showMenu && {
                backgroundColor: colors.darkerGrey,
                width:
                  dimensions.width - 2 * (deviceInfo ? deviceInfo.padding : 0),
                alignSelf: "center",
                alignItems: "flex-end",
                borderRadius: deviceInfo ? deviceInfo.corner : 0,
                marginBottom: deviceInfo ? deviceInfo.padding : 0,
              },
            ]}
          >
            {showMenu ? (
              <ExpandedButtons
                tab={tab}
                changeTabScreen={changeTabScreen}
                changeScreen={changeScreen}
                logout={logout}
                deviceInfo={deviceInfo}
              />
            ) : (
              <Buttons deviceInfo={deviceInfo} changeScreen={changeScreen} />
            )}
          </Animated.View>
        </BlurView>
      </Shadow>
    </Animatable.View>
  );
};

export default Menu;
