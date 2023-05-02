import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.authBackground,
    flex: 1,
    justifyContent: "space-between",
  },
  titleHolder: {
    marginHorizontal: 3,
    alignSelf: "center",
  },
});
