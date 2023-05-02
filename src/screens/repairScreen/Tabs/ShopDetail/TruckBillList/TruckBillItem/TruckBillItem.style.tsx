import { StyleSheet } from "react-native";
import colors from "../../../../../../helpers/colors";
import fonts from "../../../../../../helpers/fonts";

export const truckBillItemStyle = StyleSheet.create({
  itemHolder: {
    paddingTop: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    lineHeight: 18,
    color: colors.darkerGrey,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
    color: colors.mediumGrey,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.montserrat,
    lineHeight: 18,
    color: colors.darkerGrey,
    paddingLeft:8
  },
  itemsText: {
    color: colors.mediumGrey,
    fontSize: 11,
    fontFamily: fonts.montserrat,
    lineHeight: 14,
  },
  shopName: {
    color: colors.mediumGrey,
    fontSize: 11,
    fontFamily: fonts.montserrat,
    lineHeight: 14,
  }
});
