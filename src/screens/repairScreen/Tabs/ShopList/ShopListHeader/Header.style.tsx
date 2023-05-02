import { Dimensions, StyleSheet } from "react-native";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  buttonsHold: {
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 4,
    backgroundColor: "transparent",
    zIndex: 4,
  },
  blurHolder: {
    width: dimensions.width,
    position: "absolute",
    zIndex: 1,
  },
});
