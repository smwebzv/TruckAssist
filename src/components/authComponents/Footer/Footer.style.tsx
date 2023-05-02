import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const authFooterStyles = StyleSheet.create({
  mainHolder: {
    alignSelf: "center",
    marginBottom: 42,
    marginTop: 16,
    maxWidth: 212,
  },
  text: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    textAlign: "center",
    color: colors.mediumGrey,
  },
  blueText: {
    fontFamily: fonts.montserratBold,
    color: colors.primary,
    textAlign: "center",
  },
  dontHaveAccount: {
    marginTop: 26,
    textTransform: "none",
  },
  createAccount: {
    fontSize: 17,
  },
});
