import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    marginTop: 20
  },
  text: {
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 13,
    color: "#fff",
  },
  rippleHolder: {
    height: 46,
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    alignItems: "center",
    overflow:"hidden"
  },
  ripple: {
    height: 46,
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    overflow:"hidden"
  },
  inputHolder: {
    height: 46,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    overflow:"hidden"
  },
  input: {
    marginLeft: 8,
    fontFamily: fonts.montserrat,
    fontSize: 14,
    flex: 1,
    color: "#fff",
  },
  focusedInputHolder: {
    backgroundColor: "#1D1D1D",
    borderWidth: 2,
    borderColor: colors.primary,
  },
  slider: {
    marginTop: 22,
    paddingBottom: 24,
  },
  currentLocHolder: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginTop: 26,
  },
  currentLocText: {
    fontFamily: fonts.montserrat,
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
    marginLeft: 8,
  },
  modalHolder: {
    backgroundColor: colors.darkerGrey,
    marginHorizontal: 8,
    marginTop: 20,
    padding: 8,
    borderRadius: 16
  },
  headerText: {
    fontFamily: fonts.montserrat,
    fontSize: 11,
    lineHeight: 14,
    color: "#919191",
  }
});
