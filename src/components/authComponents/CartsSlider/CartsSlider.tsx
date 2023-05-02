import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import Carousel, {
  getInputRangeFromIndexes,
} from "react-native-snap-carousel-v4";
import { useDispatch, useSelector } from "react-redux";
import { selectCompany } from "../../../api/auth/authActions";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
import { RootState } from "../../../redux/store/store";
import AnimatedCarousel from "../AuthSlider/AnimatedCarousel";

const Window = Dimensions.get("window");
const width = Window.width;

function toRadians(angle: number) {
  return angle * (Math.PI / 180);
}

const POSITION = Platform.OS === "ios" ? 2 : 1.5;
const ZOOM = Math.sin(toRadians(65));
const MARGIN25 = (width - 320) / 31.3 + 7;
const MARGIN50 = (width - 320) / 23.5 + 13;
const MARGIN100 = (width - 320) / 47 + 5;

const OFFSET = 68;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 160;

export const CartsSlider = () => {
  const { companies } = useSelector((state: RootState) => state.auth.userData);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const _scrollInterpolator = (index: number, carouselProps: any) => {
    const range = [3, 2, 1, 0, -1, -2, -3];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  };

  const _animatedStyles = (
    i: any,
    scrollX: {
      interpolate: (arg0: {
        inputRange: number[];
        outputRange: number[] | string[];
      }) => any;
    },
    carouselProps: any
  ) => {
    return {
      transform: [
        {
          perspective: 2 * width,
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [width / 2, 0, -width / 2],
          }),
        },
        {
          rotateY: scrollX.interpolate({
            inputRange: [-3, -2, -1, 0, 1, 2, 3],
            outputRange: [
              "150deg",
              "90deg",
              "-60deg",
              "0deg",
              "60deg",
              "90deg",
              "150deg",
            ],
          }),
        },
        {
          scale: scrollX.interpolate({
            inputRange: [-1, -0.5, 0, 0.5, 1],
            outputRange: [1, ZOOM, 1, ZOOM, 1],
          }),
        },
        {
          translateX: scrollX.interpolate({
            inputRange: [-1, -0.75, -0.5, 0, 0.5, 0.75, 1],
            outputRange: [
              -width / POSITION + MARGIN100,
              (-width * ZOOM * 0.75) / POSITION + MARGIN25,
              (-width * ZOOM * 0.5) / POSITION + MARGIN50,
              0,
              (width * ZOOM * 0.5) / POSITION - MARGIN50,
              (width * ZOOM * 0.75) / POSITION - MARGIN25,
              width / POSITION - MARGIN100,
            ],
          }),
        },
      ],
      opacity: scrollX.interpolate({
        inputRange: [-1, -0.9, 0.9, 1],
        outputRange: [0.8, 1, 1, 0.8],
      }),
    };
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          alignItems: "center",
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: 8,
          paddingVertical: 20,
        }}
        onPress={() => selectCompany(item.id)(dispatch)}
      >
        {item.logo == null ? (
          <Text
            numberOfLines={1}
            style={{
              color: colors.greyOpacity,
              fontFamily: fonts.montserratBold,
              fontSize: item.companyName?.length > 18 ? 14 : 21,
              paddingTop: 13,
              paddingHorizontal: 16,
            }}
          >
            {item.companyName}
          </Text>
        ) : (
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: ITEM_WIDTH, height: "100%" }}
              source={{ uri: "data:image/png;base64," + item.logo }}
            />
          </View>
        )}
        <Text
          style={{
            color: colors.mediumGrey,
            fontFamily: fonts.montserrat,
            fontSize: 11,
            paddingTop: 13,
          }}
        >
          Last login
        </Text>
        <Text
          style={{
            color: "#2F2F2F",
            fontFamily: fonts.montserratBold,
            fontSize: 11,
          }}
        >
          3 days ago
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Carousel
        firstItem={1}
        containerCustomStyle={{ width }}
        data={companies}
        useScrollView={true}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={ITEM_WIDTH}
        scrollInterpolator={_scrollInterpolator}
        slideInterpolatedStyle={_animatedStyles}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <AnimatedCarousel width={ITEM_WIDTH} scrollX={scrollX} list={companies} />
    </View>
  );
};
