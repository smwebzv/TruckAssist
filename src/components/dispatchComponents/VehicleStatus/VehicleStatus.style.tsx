import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 8,
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
    color: colors.primary,
    maxWidth: 172,
    marginVertical: 4,
  },
  directionHolder: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});
