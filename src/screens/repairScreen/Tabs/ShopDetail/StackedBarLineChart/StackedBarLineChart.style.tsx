import { StyleSheet } from "react-native";
import colors from "../../../../../helpers/colors";
import fonts from "../../../../../helpers/fonts";

export const stackedBarLineChartStyle = StyleSheet.create({
  mainHolder: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
  },
  holderTitles: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: colors.primary,
    marginLeft: 8,
  },
  title: {
    fontFamily: fonts.montserrat,
    fontSize: 11,
    lineHeight: 14,
    color: colors.darkerGrey,
    marginHorizontal: 4,
  },
  count: {
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.darkerGrey,
  },
  whiteLine: {
    position: "absolute",
    backgroundColor: "#fff",
    height: 10,
    bottom: 30,
    left: 0,
    width: "100%",
  },
});
