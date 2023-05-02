import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";

export const forgotPasswordSyle = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.authBackground,
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
  },
  titleHolder: {
    maxWidth: 258,
    marginLeft: 3,
  },
});
