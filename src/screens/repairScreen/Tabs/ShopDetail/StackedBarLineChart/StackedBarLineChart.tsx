import React from "react";
import { Text, View } from "react-native";
import { stackedBarLineChartStyle } from "./StackedBarLineChart.style";
import { BarChart } from "react-native-gifted-charts";
import fonts from "../../../../../helpers/fonts";

interface Iprops {
  active: boolean;
}

const StackedBarLineChart = ({ active }: Iprops) => {
  const data = [
    { value: 250, label: "Jan" },
    { value: 240 },

    { value: 350, label: "Feb" },
    { value: 300 },

    { value: 450, label: "Mar" },
    { value: 400 },

    { value: 520, label: "Apr" },
    { value: 490 },

    { value: 300, label: "May" },
    { value: 280 },

    { value: 300, label: "May" },
    { value: 280 },
  ];

  return (
    <View style={{ position: "relative" }}>
      <View
        style={[
          stackedBarLineChartStyle.holderTitles,
          { marginBottom: 20, marginTop: 15 },
        ]}
      >
        <View
          style={[stackedBarLineChartStyle.holderTitles, { marginRight: 12 }]}
        >
          <View style={stackedBarLineChartStyle.circle}></View>
          <Text style={stackedBarLineChartStyle.title}>Total cost</Text>
          <Text style={stackedBarLineChartStyle.count}>• $26,345.08</Text>
        </View>

        <View style={stackedBarLineChartStyle.holderTitles}>
          <View
            style={[
              stackedBarLineChartStyle.circle,
              { backgroundColor: "#FFA726" },
            ]}
          ></View>
          <Text style={stackedBarLineChartStyle.title}>Total visits</Text>
          <Text style={stackedBarLineChartStyle.count}>• 345</Text>
        </View>
      </View>
      <View style={{ marginLeft: -25 }}>
        <BarChart
          data={data}
          barWidth={20}
          height={90}
          initialSpacing={0}
          spacing={6}
          barBorderRadius={4}
          yAxisThickness={0}
          xAxisThickness={0}
          stepValue={100}
          frontColor={"#FFCC80"}
          hideAxesAndRules={true}
          xAxisLabelTextStyle={{
            color: "#DADADA",
            textAlign: "center",
            fontSize: 8,
            fontFamily: fonts.montserratBold,
          }}
          showLine
          lineConfig={{
            color: "#3074D3",
            thickness: 2,
            curved: true,
            hideDataPoints: false,
            shiftY: -30,
            initialSpacing: -40,
            dataPointsColor: "#3074D3",
          }}
          isAnimated
        />
      </View>

      {active && <View style={stackedBarLineChartStyle.whiteLine}></View>}
    </View>
  );
};

export default StackedBarLineChart;
