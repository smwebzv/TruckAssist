import React, { useRef } from "react";
import {
  Animated,
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { authList } from "../../../helpers/authListSlider";
import AnimatedCarousel from "./AnimatedCarousel";
import { authStyles } from "./AuthSlider.style";

interface IProps {}

const AuthSlider = ({}: IProps) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const viewableIetemChanged = useRef(({ viewableItems }) => {
    setActiveSlide(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={[authStyles.container, { width }]}>
      <FlatList
        data={authList}
        renderItem={({ item, index }) => (
          <View key={index} style={[authStyles.container, { width }]}>
            <Text style={authStyles.title}>{item.title}</Text>
            <Text style={authStyles.text}>{item.text}</Text>
          </View>
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
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableIetemChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />

      <AnimatedCarousel width={width} scrollX={scrollX} list={authList} />
    </View>
  );
};

export default AuthSlider;
