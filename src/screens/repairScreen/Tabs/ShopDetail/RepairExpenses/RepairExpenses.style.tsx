import { StyleSheet } from "react-native";
import colors from "../../../../../helpers/colors";
import fonts from "../../../../../helpers/fonts";

export const repairExpensesStyle = StyleSheet.create({
  mainHolder: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    marginHorizontal: 8,
    marginBottom: 100,
    overflow: "hidden",
  },
  headerHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
    paddingLeft: 7.5,
    position: "relative",
    height: 26,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    lineHeight: 18,
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginLeft: 12,
  },
  allTimeButton: {
    borderRadius: 30,
    height: 26,
    width: 87,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkGrey,
  },
  allTimeText: {
    color: "#fff",
    fontSize: 11,
    fontFamily: fonts.montserrat,
    lineHeight: 14,
    marginRight: 8,
  },
  expensesNumber: {
    lineHeight: 18,
    fontSize: 14,
    fontFamily: fonts.montserrat,
    color: colors.darkerGrey,
    marginLeft: 4,
  },
});
