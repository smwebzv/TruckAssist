import { StyleSheet } from "react-native";
import colors from "../../../../../helpers/colors";
import fonts from "../../../../../helpers/fonts";

export const servicesDropdownStyle = StyleSheet.create({
  mainHolder: {
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    marginVertical: 8,
  },
  headerHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
    paddingLeft: 5,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  countCircle: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 30,
    backgroundColor: colors.darkGrey,
    minWidth: 18,
  },
  count: {
    color: "#fff",
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
    textAlign: "center",
  },
  title: {
    lineHeight: 18,
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginLeft: 9,
    marginRight: 4,
  },
  holderDropdown: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    overflow: "hidden",
    paddingLeft: 5
  },
  serviceItem: {
    width: "25%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
    paddingLeft: 7,
  },
  serviceName: {
    marginLeft: 7,
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserratBold,
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
  inactiveService: {
    color: colors.mediumGrey,
    textDecorationLine: "line-through",
    fontFamily: fonts.montserrat,
  },
  blueCircle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  openDays: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    lineHeight: 14,
    color: colors.darkerGrey,
    marginHorizontal: 4,
  },
});
