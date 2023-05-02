import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../../../../helpers/colors";
import fonts from "../../../../helpers/fonts";
import AverageChart from "../AverageChart/AverageChart";
import PreviosChart from "../PreviousChart/PreviousChart";
import Load from "../../../../assets/icons/dashLoad.svg";
import Miles from "../../../../assets/icons/miles.svg";
import LineChart from "../LineChart/LineChart";

interface IProps {
  data: DataProps;
}

interface DataProps {
  type: string;
  previous: number;
  average: number;
  road: number;
  fastRoad: number;
}

const MilesCharts = ({ data }: IProps) => {
  const roadSum = data.road + data.fastRoad;
  const roadPercentage = (data.road / 1500) * 100;
  const fastRoadPercentage = (data.fastRoad / 1500) * 100;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 28,
      }}
    >
      <View style={{ flex: 1, marginRight: 20 }}>
        <View>
          <Text style={styles.title}>MILES</Text>
          <Text style={styles.text}>{roadSum.toFixed(1)} mi</Text>
          <View style={{ flexDirection: "row", marginBottom: 6 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 19,
              }}
            >
              <Load />
              <Text style={[styles.cost, { fontFamily: fonts.montserratBold }]}>
                {data.road} mi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Miles />
              <Text style={styles.cost}>{data.fastRoad} mi</Text>
            </View>
          </View>
        </View>
        <LineChart
          previous={data.previous}
          average={data.average}
          firstPercentage={roadPercentage}
          secondPercentage={fastRoadPercentage}
          firstColor={"#3074D3"}
          secondColor={"#6F9EE0"}
          laidDown={true}
        />
      </View>
      <View>
        <PreviosChart miles={"497.4 mi"} percentage={data.previous} />
        <AverageChart miles={"1.24K mi"} percentage={data.average} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoHold: {
    alignItems: "center",
    justifyContent: "center",
    top: -35,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginBottom: 2,
  },
  text: {
    fontSize: 26,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
  },
  cost: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    color: colors.darkerGrey,
    marginLeft: 4,
  },
  percentage: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginHorizontal: 4,
  },
});

export default MilesCharts;
