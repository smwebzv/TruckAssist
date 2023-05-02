import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import colors from "../../../../helpers/colors";
import fonts from "../../../../helpers/fonts";
import AverageChart from "../AverageChart/AverageChart";
import PreviosChart from "../PreviousChart/PreviousChart";

interface IProps {
  data: DataProps;
}

interface DataProps {
  type: string;
  previous: number;
  average: number;
  fill: number;
}

const EarningCharts = ({ data }: IProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 28,
      }}
    >
      <View style={{ flex: 1, marginRight: 20 }}>
        <AnimatedCircularProgress
          style={{ position: "absolute", left: 0, top: 0 }}
          size={200}
          width={12}
          fill={data.fill}
          tintColor={colors.primary}
          arcSweepAngle={182}
          rotation={-91.4}
          backgroundColor="#DADADA"
          lineCap={"round"}
        >
          {(fill) => (
            <View style={styles.infoHold}>
              <Text style={styles.title}>EARNINGS</Text>
              <Text style={styles.text}>$2.34K</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          style={{ position: "absolute", left: -12, top: -12 }}
          size={224}
          width={12}
          fill={
            data.previous > 0
              ? data.fill - Math.abs(data.previous)
              : data.fill + Math.abs(data.previous)
          }
          tintColor={"transparent"}
          arcSweepAngle={182}
          rotation={-91.4}
          lineCap={"round"}
          renderCap={({ center }) => (
            <Circle cx={center.x} cy={center.y} r="3" fill="#AB47BC" />
          )}
        />
        <AnimatedCircularProgress
          style={{ position: "absolute", left: -12, top: -12 }}
          size={224}
          width={12}
          fill={
            data.average > 0
              ? data.fill - Math.abs(data.average)
              : data.fill + Math.abs(data.average)
          }
          tintColor={"transparent"}
          arcSweepAngle={182}
          rotation={-91.4}
          lineCap={"round"}
          renderCap={({ center }) => (
            <Circle cx={center.x} cy={center.y} r="3" fill="#FF9800" />
          )}
        />
      </View>

      <View>
        <PreviosChart count={3.57} percentage={data.previous} />
        <AverageChart count={3.57} percentage={data.average} />
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
});

export default EarningCharts;
