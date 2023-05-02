import { StyleSheet } from "react-native";
import colors from "../../../../../../helpers/colors";
import fonts from "../../../../../../helpers/fonts";

export const headerInfoItemStyle = StyleSheet.create({
  holderInfo: {
    marginBottom: 12,
    paddingHorizontal: 20,
    height: 180,
  },
  holderNameStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    lineHeight: 24,
    maxWidth: "90%",
  },
  locationAway: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  locationAwayCount: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    color: colors.mediumGrey,
    lineHeight: 14,
    marginHorizontal: 6,
  },
  locationAwayText: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
    lineHeight: 14,
  },
  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    fontFamily: fonts.montserratMedium,
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 9,
    color: colors.darkerGrey,
    maxWidth: "70%",
  },
});
