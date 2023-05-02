import React from "react";
import { Animated, Dimensions, TouchableOpacity, View } from "react-native";
import MainIcon from "../../../assets/images/mainMenuButtonIcon.svg";
import Logo from "../../../assets/logo/mainButtonLogo.svg";
import Cancel from "../../../assets/icons/mainButtonIcons/cancel.svg";
import { styles } from "./MainButton.style";
import { useSelector } from "react-redux";
import Lottie from "lottie-react-native";
import { RootState } from "../../../redux/store/store";
import { Shadow } from "react-native-shadow-2";
const dimensions = Dimensions.get("screen");

interface IProps {
  deviceInfo?: DInfo;
  closeExpandMenu: () => void;
  expandMenu: () => void;
  showMenu: boolean;
  tab: number;
  animation: any;
}

interface DInfo {
  name: string;
  model: string[];
  corner: number;
  padding: number;
  iconCorner: number;
}

const MainButton = ({
  deviceInfo,
  closeExpandMenu,
  expandMenu,
  showMenu,
  tab,
  animation,
}: IProps) => {
  const { loader } = useSelector((state: RootState) => state.repairData);
  const firstIconStyles = {
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-135deg"],
        }),
      },
    ],
  };

  const secondIconStyles = {
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["135deg", "0deg"],
        }),
      },
    ],
  };

  return (
    <>
      {tab == 2 ? null : (
        <View
          style={[
            {
              position: "absolute",
              zIndex: 9,
              bottom: deviceInfo
                ? showMenu
                  ? 28 + deviceInfo.padding
                  : 28
                : 36,
              left: dimensions.width / 2 - 32,
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => (showMenu ? closeExpandMenu() : expandMenu())}
          >
            <Animated.View style={[styles.cancelHolder, secondIconStyles]}>
              <Cancel />
            </Animated.View>
            <Animated.View style={firstIconStyles}>
              <Shadow
                startColor="#0000001A"
                distance={5}
                style={{ width: 64, height: 64, borderRadius: 40, zIndex: 10 }}
              >
                <MainIcon />
              </Shadow>

              <View style={styles.logo}>
                {loader ? (
                  <Lottie
                    source={require("../../../assets/gifs/loader.json")}
                    autoPlay
                    loop
                  />
                ) : (
                  <Logo />
                )}
              </View>
            </Animated.View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default MainButton;
