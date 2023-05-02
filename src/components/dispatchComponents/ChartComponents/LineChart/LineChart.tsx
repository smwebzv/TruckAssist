import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import {
  firstDot,
  firstDotWidth,
  firstHeight,
  firstWidth,
  secondDot,
  secondDotWidth,
  secondHeight,
  secondWidth,
} from "./animationsStyle";
import { styles } from "./LineChart.style";

interface IProps {
  previous: number;
  average: number;
  firstPercentage: number;
  secondPercentage: number;
  firstColor?: string;
  secondColor?: string;
  laidDown?: boolean;
}

const LineChart = ({
  previous,
  average,
  firstPercentage,
  secondPercentage,
  firstColor,
  secondColor,
  laidDown,
}: IProps) => {
  const sum = firstPercentage + secondPercentage;
  let averagePercentage = 100 - Math.abs(average);
  let previousPercentage = 100 - Math.abs(previous);

  return (
    <View
      style={[
        styles.container,
        laidDown ? styles.laidDownContainer : { justifyContent: "flex-end" },
      ]}
    >
      <Animated.View
        style={[
          styles.firstPercentageHold,
          laidDown
            ? firstWidth(firstPercentage, firstColor)
            : firstHeight(firstPercentage),
          sum !== 100 &&
            !laidDown && {
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
            },
        ]}
      />
      <Animated.View
        style={[
          styles.secondPercentageHold,
          laidDown
            ? secondWidth(secondPercentage, secondColor)
            : secondHeight(secondPercentage),
        ]}
      />
      <Animated.View
        style={[
          styles.lineDotsHolder,
          laidDown
            ? firstDotWidth(averagePercentage)
            : firstDot(averagePercentage),
        ]}
      >
        <View style={styles.dots} />
        <View
          style={[
            styles.line,
            laidDown && {
              width: 2,
              height: 6,
              marginRight: 2,
              marginTop: 0,
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.lineDotsHolder,
          laidDown
            ? secondDotWidth(previousPercentage)
            : secondDot(previousPercentage),
        ]}
      >
        <View style={[styles.dots, { backgroundColor: "#FF9800" }]} />
        <View
          style={[
            styles.line,
            laidDown && {
              width: 2,
              height: 6,
              marginRight: 2,
              marginTop: 0,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

export default LineChart;
