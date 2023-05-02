import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    height: 46,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 36,
    position: "relative",
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: colors.darkerGrey,
    fontFamily: fonts.montserrat,
    paddingLeft: 14,
    zIndex: 9999,
  },
  iconContainer: {
    marginRight: 14,
    justifyContent: "center",
  },
  placeholder: {
    position: "absolute",
    marginLeft: 14,
    top: 14,
    flexDirection: "row",
  },
  placeholderText: {
    fontSize: 14,
    color: colors.darkerGrey,
    lineHeight: 18,
    fontFamily: fonts.montserrat,
  },
  startSign: {
    color: colors.defaultRed,
    fontSize: 14,
    paddingLeft: 5,
    lineHeight: 18,
    fontFamily: fonts.montserrat,
  },
  error: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
    textAlign: "right",
    position: "absolute",
    bottom: -18,
    right: 14,
    color: colors.defaultRed,
  },
});
