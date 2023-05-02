import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 6,
  },
  holderSlide: {},
  frame: {
    marginVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameElement: {
    height: 8,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  footerHolder: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: dimensions.width - 56,
    height: 34,
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    padding: 4,
  },
  button: {
    flex: 1,
    height: 26,
    borderRadius: 20,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    textAlign: "center",
    color: colors.darkerGrey,
  },
});
