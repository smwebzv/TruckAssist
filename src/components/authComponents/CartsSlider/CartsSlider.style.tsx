import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";

export const cartsStyles = StyleSheet.create({
  frame: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  frameElement: {
    width: 16,
    height: 8,
    borderRadius: 10,
    backgroundColor: colors.inactiveButton,
    marginHorizontal: 2,
  },
  activeFrameElement: {
    width: 32,
    backgroundColor: colors.mediumGrey,
  },
});
