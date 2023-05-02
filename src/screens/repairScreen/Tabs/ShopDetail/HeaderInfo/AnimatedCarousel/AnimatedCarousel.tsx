import React from "react";
import { View } from "react-native";
import RNAnimatedScrollIndicators from "react-native-animated-scroll-indicators";
import { styles } from "./AnimatedCarousel.style";

interface IProps {
  width: number;
  scrollX: any;
  list: any;
}

const AnimatedCarousel = ({ width, scrollX, list }: IProps) => {
  return (
    <View style={styles.frame}>
      <RNAnimatedScrollIndicators
        numberOfCards={list.length}
        scrollWidth={width}
        activeColor={"#CCCCCC"}
        inActiveColor={"#EEEEEE"}
        scrollAnimatedValue={scrollX}
      />
    </View>
  );
};

export default AnimatedCarousel;