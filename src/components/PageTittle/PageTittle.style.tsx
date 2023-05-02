import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const pageTitleStyles = StyleSheet.create({
  holderTittleAndText: {
    paddingVertical: 22,
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    lineHeight: 32,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.mediumGrey,
    fontFamily: fonts.montserrat,
  },
  secondTitle: {
    fontSize: 17,
    fontFamily: fonts.montserratBold,
    lineHeight: 22,
    color: colors.darkerGrey,
    marginLeft: 4.45,
  },
  repairPage: {
    color: "#6C6C6C",
    fontSize: 11,
    lineHeight: 14,
    marginRight: 28
  },
});
