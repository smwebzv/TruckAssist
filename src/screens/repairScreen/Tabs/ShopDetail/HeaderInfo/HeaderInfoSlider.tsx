import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  Platform,
  useWindowDimensions,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AnimatedCarousel from "./AnimatedCarousel/AnimatedCarousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../../../../helpers/deviceModels";
import DeviceInfo from "react-native-device-info";
import HeaderInfoItem from "./HeaderInfoItem/HeaderInfoItem";
import { headerInfoStyle } from "./HeaderInfoSlider.style";
import { setSelectedRepairShop } from "../../../../../redux/repair/repairSlice";

interface IProps {
  swipe: boolean;
}

const HeaderInfoSlider = ({ swipe }: IProps) => {
  const dispatch = useDispatch();
  const slideRef = useRef(null);
  const { width } = useWindowDimensions();
  const { shopList, selectedRepairShop } = useSelector(
    (state: any) => state.repairData
  );
  const indexOfActive = shopList.indexOf(selectedRepairShop);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeSlide, setActiveSlide] = React.useState(0);

  const [manuallyScrolled, setManuallyScrolled] = React.useState(false);

  const viewableItemChangedRef = useRef(({ viewableItems }) => {
    const nextActiveSlide = viewableItems[0]?.index ?? 0;
    if (manuallyScrolled && nextActiveSlide >= indexOfActive) {
      setActiveSlide(nextActiveSlide);
    } else {
      setActiveSlide(
        nextActiveSlide >= shopList.length
          ? shopList.length - 1
          : nextActiveSlide
      );
    }
  }).current;

  React.useEffect(() => {
    setManuallyScrolled(false);
    slideRef.current?.scrollToIndex({
      index: indexOfActive,
      animated: true,
    });
  }, [indexOfActive]);

  React.useEffect(() => {
    dispatch(setSelectedRepairShop(shopList[activeSlide]));
  }, [activeSlide]);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const insets = useSafeAreaInsets();

  const model = DeviceInfo.getModel();
  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);

  return (
    <View
      style={[
        headerInfoStyle.mainHolder,
        {
          paddingTop: swipe ? 0 : 75 + insets.top,
          borderBottomLeftRadius: deviceInfo?.corner,
          borderBottomRightRadius: deviceInfo?.corner,
          width: width,
        },
      ]}
    >
      <FlatList
        data={shopList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <HeaderInfoItem swipe={swipe} item={item} key={index} />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        initialScrollIndex={indexOfActive}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemChangedRef}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <AnimatedCarousel width={width} scrollX={scrollX} list={shopList} />
    </View>
  );
};

export default HeaderInfoSlider;
