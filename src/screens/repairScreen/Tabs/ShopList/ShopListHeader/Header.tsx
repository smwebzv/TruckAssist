import * as React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { styles } from "./Header.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "@react-native-community/blur";
import ButtonsHold from "./ButtonsHold/ButtonsHold";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { setIsButtonForCloseActive } from "../../../../../redux/filterModal/filterModalSlice";
import { useDispatch } from "react-redux";
const dimensions = Dimensions.get("screen");
interface IProps {
  shadow: boolean;
  listTab: number;
  handleMapList: boolean;
  tab: number;
  changeTabScreen: (tab: number) => void;
  changeTab: (tab: number) => void;
  mapPage: boolean;
  translateY: any;
  heightValue: any;
  expanded: number;
  setExpanded: (expanded: number) => void;
}

const Header = ({
  shadow,
  listTab,
  handleMapList,
  tab,
  changeTabScreen,
  changeTab,
  mapPage,
  translateY,
  heightValue,
  expanded,
  setExpanded,
}: IProps) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const actionBarStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(heightValue.value, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  const closeButton = () => {
    dispatch(setIsButtonForCloseActive(true));
  };

  return (
    <Animated.View
      style={[styles.blurHolder, { top: -insets.top }, actionBarStyle]}
    >
      <LinearGradient
        colors={
          !handleMapList && tab === 3
            ? ["transparent", "transparent"]
            : ["#FFFFFF", "#FFFFFF99", "#FFFFFFE5"]
        }
        style={{ width: dimensions.width, flex: 1 }}
      >
        {!handleMapList && tab === 3 ? (
          <View>
            <ButtonsHold
              shadow={shadow}
              listTab={listTab}
              changeTab={changeTab}
              mapPage={mapPage}
              changeTabScreen={changeTabScreen}
              tab={tab}
              handleMapList={handleMapList}
              expanded={expanded}
              setExpanded={setExpanded}
              translateY={translateY}
            />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => closeButton()}
            style={{ flex: 1 }}
            activeOpacity={1}
          >
            <BlurView
              style={{
                width: dimensions.width,
                flex: 1,
                backgroundColor: "transparent",
              }}
              blurType="light"
              blurAmount={1}
              overlayColor="transparent"
              reducedTransparencyFallbackColor="transparent"
            >
              <ButtonsHold
                shadow={shadow}
                listTab={listTab}
                changeTab={changeTab}
                mapPage={mapPage}
                changeTabScreen={changeTabScreen}
                tab={tab}
                handleMapList={handleMapList}
                expanded={expanded}
                setExpanded={setExpanded}
                translateY={translateY}
              />
            </BlurView>
          </TouchableOpacity>
        )}
      </LinearGradient>
    </Animated.View>
  );
};

export default Header;
