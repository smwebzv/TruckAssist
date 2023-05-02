import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.primary,
    height: 26,
    borderRadius: 30,
    marginTop: 8,
    paddingLeft: 6,
    paddingRight:10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: fonts.montserrat,
    fontSize: 11,
    lineHeight: 14,
    color: "#fff",
  },
});
