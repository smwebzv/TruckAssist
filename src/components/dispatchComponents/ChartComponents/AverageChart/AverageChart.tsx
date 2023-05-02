import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import colors from "../../../../helpers/colors";
import fonts from "../../../../helpers/fonts";
import Check from "../../../../assets/icons/dashCheck.svg";

interface IProps {
  count?: number;
  miles?: string;
  percentage: number;
}

const AverageChart = ({ count, miles, percentage }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 8 }}>
        <Text style={styles.title}>Average</Text>
        {count ? (
          <Text style={styles.text}>${count}K</Text>
        ) : (
          <Text style={styles.text}>{miles}</Text>
        )}
      </View>
      <CircularProgress
        value={percentage}
        radius={21}
        duration={100}
        inActiveStrokeColor={"#FFCC80"}
        activeStrokeColor={"#FF9800"}
        showProgressValue={false}
        title={`${percentage}%`}
        titleColor={colors.darkerGrey}
        titleFontSize={10}
        titleStyle={{ fontFamily: fonts.montserratBold }}
        maxValue={100}
        activeStrokeWidth={5}
        inActiveStrokeWidth={5}
        inActiveStrokeOpacity={0.6}
      />

      {percentage > 0 && (
        <View style={styles.checked}>
          <Check />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  holderSlide: {},
  title: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
    lineHeight: 14,
    marginBottom: 2,
  },
  text: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
  },
  checked: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default AverageChart;
