import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const authStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.montserratBold,
    marginBottom: 22,
    color: colors.darkerGrey,
    textAlign: "center",
    lineHeight: 17,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.montserrat,
    textAlign: "center",
    color: colors.mediumGrey,
    paddingHorizontal: 30,
  },
  frame: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  frameElement: {
    height: 8,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
