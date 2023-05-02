import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.background,
    flex: 1,
  },
  cardInfoHolder: {
    marginHorizontal: 12,
    flex: 1,
  },
  statusHolder: {
    flexDirection: "row",
  },
});
