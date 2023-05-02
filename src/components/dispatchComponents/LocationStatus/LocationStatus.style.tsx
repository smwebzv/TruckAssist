import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: "#fff",
    width: "55%",
    borderRadius: 8,
    marginRight: 8,
    padding: 12,
  },
  title: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
  },
  location: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    marginVertical: 4,
  },
});
