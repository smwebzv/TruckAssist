import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: "#fff",
    flex: 1,
    height: 64,
    maxHeight: 64,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  title: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
  },
  status: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: fonts.montserratBlack,
    color: colors.mediumGrey,
    marginTop: 4,
  },
});
