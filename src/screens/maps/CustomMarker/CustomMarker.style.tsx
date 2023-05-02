import { StyleSheet } from "react-native";
import fonts from "../../../helpers/fonts";
import colors from "../../../helpers/colors";

export const styles = StyleSheet.create({
  mainHolder: {
    width: 126,
    height: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    minWidth: 22,
    minHeight: 28,
    maxWidth: 22,
    maxHeight: 28,
  },
  focusedIcon: {
    minWidth: 32,
    minHeight: 40,
    maxWidth: 32,
    maxHeight: 40,
  },
  textHolder: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 100,
    height: 28,
  },
  text: {
    color: colors.darkGrey,
    fontFamily: fonts.montserratMedium,
    fontSize: 11,
    lineHeight: 12,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: "#fff",
  },
});
