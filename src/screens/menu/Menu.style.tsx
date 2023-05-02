import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainHolder: {
    height: 88,
    position: "absolute",
    bottom: 0,
    width: dimensions.width,
  },
  blurHolder: {
    width: dimensions.width,
    alignItems: "center",
    overflow: "hidden",
  },
  blur: {
    minHeight: 88,
    width: dimensions.width,
    backgroundColor: "#FFFFFF99",
  },
  blockButtonsHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: dimensions.width,
    height: 68,
    backgroundColor: "transparent",
  },
  buttonsHold: {
    flexDirection: "row",
    width: 115,
    justifyContent: "space-between",
  },
  buttons: {
    width: 53.17,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  cancelHolder: {
    width: 48,
    height: 48,
    borderRadius: 30,
    backgroundColor: "#EF5350",
    alignItems: "center",
    alignSelf:'center',
    justifyContent: "center",
    position:'absolute',
    top: 12
  },
});
