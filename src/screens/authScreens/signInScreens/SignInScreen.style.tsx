import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
const dimensions = Dimensions.get("screen");

export const signInScreenStyles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.authBackground,
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
  },
  titleHolder: {
    maxWidth: 258,
    marginHorizontal: 3,
  },
  blur: {
    width: dimensions.width,
    height: 92,
    justifyContent: "flex-end",
    zIndex: 999999,
    paddingBottom: 25,
  },
});
