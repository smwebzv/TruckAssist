import * as React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { repairExpensesStyle } from "./RepairExpenses.style";
import Dolar from "../../../../../assets/icons/dolar.svg";
import Calendar from "../../../../../assets/icons/calendar.svg";
import Arrow from "../../../../../assets/icons/fullArrowDown.svg";
import StackedBarLineChart from "../StackedBarLineChart/StackedBarLineChart";
import { useState } from "react";
import colors from "../../../../../helpers/colors";

interface Iprops {}

const RepairExpenses = ({}: Iprops) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(new Animated.Value(45));
  const [backgroundColor, setBackgroundColor] = React.useState(
    new Animated.Value(0)
  );

  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.background, "#fff"],
  });

  const animatedStyles = {
    backgroundColor: backgroundColorInterpolation,
  };

  const openDropdown = () => {
    setActive(!active);
    if (active) {
      Animated.timing(height, {
        toValue: 45,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(backgroundColor, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(height, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View
      style={[
        repairExpensesStyle.mainHolder,
        animatedStyles,
        { height: height },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => openDropdown()}
        style={repairExpensesStyle.headerHolder}
      >
        <View style={repairExpensesStyle.header}>
          <Dolar />
          <Text style={repairExpensesStyle.title}>
            {active ? "Repair Expenses" : "Repair Expenses •"}
          </Text>
          {!active && (
            <Text style={repairExpensesStyle.expensesNumber}>$26,345.08</Text>
          )}
        </View>

        {active ? (
          <TouchableOpacity style={repairExpensesStyle.allTimeButton}>
            <Text style={repairExpensesStyle.allTimeText}>All time</Text>
            <Calendar />
          </TouchableOpacity>
        ) : (
          <View style={{ marginRight: 6 }}>
            <Arrow color={colors.mediumGrey} />
          </View>
        )}
      </TouchableOpacity>
      <StackedBarLineChart active={active} />
    </Animated.View>
  );
};

export default RepairExpenses;
