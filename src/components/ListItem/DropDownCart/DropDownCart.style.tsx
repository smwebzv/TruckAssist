import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const style = StyleSheet.create({
  holderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  bold: {
    fontFamily: fonts.montserratBold,
    color: colors.mediumGrey,
    paddingLeft: 4
  },
  holderRightSide: {
    alignItems: "flex-end",
  },
  numberLoadAndIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberLoad: {
    marginRight: 6,
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: colors.mediumGrey,
  },
  time: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    color: colors.darkerGrey,
  },
  dot: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    color: colors.darkerGrey,
    paddingLeft: 4
  },

});
