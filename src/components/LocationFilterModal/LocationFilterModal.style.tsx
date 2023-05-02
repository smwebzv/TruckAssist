import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    paddingHorizontal: 6
  },
  buttonsHolder: {
    backgroundColor: colors.darkGrey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 100,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderRadius: 30,
    height: 34,
    overflow: "hidden"
  },
  buttonActive: {
    backgroundColor: "#fff",
  },
  buttonText: {
    fontFamily: fonts.montserratBold,
    fontSize: 14,
    lineHeight: 17,
    color: "#EEEEEE",
  },
  buttonTextActive: {
    color: colors.primary,
  },
});
