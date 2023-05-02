import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const tabButtonStyles = StyleSheet.create({
  holderTabs: {
    paddingHorizontal: 12,
  },
  holderRipple: {
    height: 78,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  holderLeftPart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    marginLeft: 12,
    color: colors.grey,
    lineHeight: 18,
  },
  holderStatus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.inactiveGrey,
    height: 22,
    paddingHorizontal: 8,
  },
  statusText: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    color: "#fff",
    textTransform: "uppercase",
  },
  activeText: {
    color: colors.darkGrey,
  },
  activeHolderStatus: {
    backgroundColor: colors.darkGrey,
  },
  blueText: {
    color: colors.primary,
  },
  innactiveText: {
    color: colors.mediumGrey,
  },
  addNew: {
    marginRight: 4,
  },
  iconOpasity: {
    opacity: 0.2,
  },
  holderIcon: {
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    marginLeft: 12,
    color: colors.mediumGrey,
  },
  blueButton: {
    backgroundColor: "#6F9EE066",
  },
  innactiveButton: {
    backgroundColor: "#F7F7F7",
  },
  activeGreenHolder: {
    backgroundColor: "#26A69033",
  },
  activeGreenText: {
    color: "#26A690",
  },
});
