import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

interface IProps {
  value: number;
  drag: boolean;
}

const Thumb = ({ value, drag }: IProps) => {
  return (
    <View style={styles.container}>
        <View style={[styles.root, { opacity: drag ? 1 : 0, left: value >= 230 ? -56 : value >= 35 ? -28 : 0 }]}>
          <Text style={styles.text}>{value} mi</Text>
        </View>
      <View style={styles.rootLow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  rootLow: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  root: {
    width: 80,
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    position: 'absolute',
    top: -42
  },
  text: {
    fontFamily: fonts.montserratBold,
    fontSize: 14,
    color: "#fff",
  },
});

export default Thumb;
