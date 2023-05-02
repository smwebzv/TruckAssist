import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const authButtonStyles = StyleSheet.create({
  buttonHolder: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 6,
    backgroundColor: colors.primary,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
  },
  rippleHolder: {
    flex:1,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
  },
  nameButton: {
    color: "#fff",
    fontSize: 17,
    fontFamily: fonts.montserratBold,
    position: "relative",
    zIndex: 999999,
  },
  whiteButton: {
    backgroundColor: "#fff",
  },
  blueText: {
    color: colors.primary,
  },
  inactiveButton: {
    backgroundColor: colors.inactiveButton,
  },
  inactiveText: {
    color: colors.mediumGrey,
  },
  forgotPassword: {
    color: colors.darkerGrey,
    textTransform: "uppercase",
  },
  forgotPasswordLoading: {
    color: colors.greyOpacity,
    textTransform: "uppercase",
  },
  circleBackground: {
    borderRadius: 100,
    position: "absolute",
    height: 1,
    width: 1,
  },
  loader: {
    position: "absolute",
    right: 23,
    width: 18,
    height: 18,
  },
});
