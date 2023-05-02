import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const timerStyles = StyleSheet.create({
  holder: {
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.greyOpacity,
    fontFamily: fonts.montserratBold,
    fontSize: 14,
  },
});
