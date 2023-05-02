import { Dimensions, StyleSheet } from "react-native";
import colors from "../../helpers/colors";

export const loadScreenStyles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.background,
    flex: 1,
    position: "relative",
  },
  background: {
    position: "absolute",
    zIndex: -111111,
    width: "100%",
    height: 375,
  },
});
