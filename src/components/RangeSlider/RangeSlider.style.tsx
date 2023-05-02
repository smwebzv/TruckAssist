import { StyleSheet } from "react-native";
import fonts from "../../helpers/fonts";

export const styles = StyleSheet.create({
  slider: {
    zIndex: 9
  },
  milesHold: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 13,
    color: "#919191",
  },
});
