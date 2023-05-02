import React from "react";
import { Animated, View } from "react-native";
import colors from "../../../helpers/colors";
import { styles } from "./DashboardSlider.style";

interface IProps {
  width: number;
  scrollX: any;
  list: any;
}

const AnimatedCarousel = ({ width, scrollX, list }: IProps) => {
  return (
    <View style={styles.frame}>
      {list?.map((e, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const elementRange = scrollX.interpolate({
          inputRange,
          outputRange: [16, 32, 16],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            colors.inactiveButton,
            colors.mediumGrey,
            colors.inactiveButton,
          ],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.frameElement,
              { width: elementRange, backgroundColor },
            ]}
          />
        );
      })}
    </View>
  );
};

export default AnimatedCarousel;
