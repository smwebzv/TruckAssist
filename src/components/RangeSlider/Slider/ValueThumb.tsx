import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import fonts from "../../../helpers/fonts";

interface IProps {
  value: number
}

const ValueThumb = ({ value }:IProps) => {
  return (
    <View style={styles.rootLow}>
      <Text style={styles.text}>{value} mi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootLow: {
    width: 80,
    height: 34,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  text: {
    fontFamily: fonts.montserratBold,
    fontSize: 14,
    color: "#2F2F2F",
  },
});

export default ValueThumb;
