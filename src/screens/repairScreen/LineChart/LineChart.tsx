import * as React from "react";
import { View } from "react-native";
import { lineChartStyle } from "./LineChart.style";
import * as Animatable from "react-native-animatable";
import { useEffect } from "react";

const LineChart = () => {
  let animatedLine: {
    transitionTo: (arg0: { width: number }) => void;
  };
  const handleAnimatedRef = (ref: any) => (animatedLine = ref);

  useEffect(() => {
    animatedLine.transitionTo({ width: 27 });
  }, []);

  return (
    <View style={lineChartStyle.chargeLine}>
      <Animatable.View
        ref={handleAnimatedRef}
        style={lineChartStyle.fullPart}
        animation="fadeInLeft"
        duration={2000}
      />
    </View>
  );
};

export default LineChart;
