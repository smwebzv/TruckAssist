import { Dimensions, StyleSheet } from "react-native";
const dimensions = Dimensions.get("screen");

export const logoStyles = StyleSheet.create({
  blur: {
    width: dimensions.width,
    height: 92,
    justifyContent: "flex-end",
    zIndex: 999999,
    paddingBottom: 25,
  },
});
