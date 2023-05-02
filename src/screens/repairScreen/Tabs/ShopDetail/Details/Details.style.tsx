import { StyleSheet } from "react-native";
import colors from "../../../../../helpers/colors";
import fonts from "../../../../../helpers/fonts";

export const detailsStyle = StyleSheet.create({
  mainHolder: {
    marginVertical: 12,
    paddingHorizontal: 12,
  },
  reviewLikes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  reviewHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginLeft: 10,
    marginRight: 2,
  },
  reviewCountHolder: {
    borderRadius: 30,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: colors.darkGrey,
    minWidth: 18,
  },
  reviewCount: {
    color: "#fff",
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
    textAlign: "center",
  },
  likeHolder: {
    width: 60,
    height: 26,
    borderRadius: 30,
    backgroundColor: colors.inactiveButton,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 8,
    paddingHorizontal: 12,
  },
  likeCount: {
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.darkerGrey,
    marginTop: 1,
  },
  openOrClose: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.montserratBold,
    color: colors.pickup.number,
    marginLeft: 9,
  },
  whenOpenOrClose: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.montserrat,
    color: colors.darkerGrey,
  },
  holderArrow: {
    position: "absolute",
    width: 30,
    height: 30,
    right: 6,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
