import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const shortcutButtonStyles = StyleSheet.create({
  buttonBox: {
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.inactiveButton,
    paddingRight: 16,
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  shortcutName: {
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: colors.darkGrey,
  },
  activeBlue: {
    backgroundColor: colors.primary,
  },
  whiteName: {
    color: "#fff",
  },
  activeDarkGrey: {
    backgroundColor: colors.darkerGrey,
  },
  whiteBackground: {
    backgroundColor: "#fff",
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
  activeCountCircle: {
    backgroundColor: "#fff",
  },
  activeCount: {
    color: colors.darkGrey,
  },
  total: {
    fontSize: 14,
    fontFamily: fonts.montserrat,
    color: "#fff",
  },
  arrowAbsolute: {
    position: "absolute",
    right: 12,
    alignSelf: "center",
  },
});
