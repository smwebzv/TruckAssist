import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../../helpers/colors";
import fonts from "../../../../helpers/fonts";
import AverageChart from "../AverageChart/AverageChart";
import PreviosChart from "../PreviousChart/PreviousChart";
import Fuel from "../../../../assets/icons/fuel.svg";
import Repair from "../../../../assets/icons/dashRepair.svg";
import LineChart from "../LineChart/LineChart";

interface IProps {
  data: DataProps;
}

interface DataProps {
  type: string;
  previous: number;
  average: number;
  fuel: number;
  repair: number;
}

const ExpensesCharts = ({ data }: IProps) => {
  const fuelPercentage = (data.fuel / 2500) * 100;
  const repairPercentage = (data.repair / 2500) * 100;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 28,
      }}
    >
      <View style={{ flexDirection: "row", marginRight: 20, flex: 1 }}>
        <LineChart
          previous={data.previous}
          average={data.average}
          firstPercentage={fuelPercentage}
          secondPercentage={repairPercentage}
        />
        <View>
          <Text style={styles.title}>EXPENSES</Text>
          <Text style={styles.text}>$2.34K</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Fuel />
            <Text style={styles.percentage}>{fuelPercentage.toFixed(1)}%</Text>
            <Text style={styles.cost}>$567.30</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Repair />
            <Text style={styles.percentage}>
              {repairPercentage.toFixed(1)}%
            </Text>
            <Text style={styles.cost}>$1.38K</Text>
          </View>
        </View>
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
  cost: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
  },
  percentage: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginHorizontal: 4,
  },
});

export default ExpensesCharts;
