import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.primary,
    maxWidth: 153,
    height: 22,
    paddingHorizontal: 8,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.montserratMedium,
    fontSize: 11,
    lineHeight: 13,
    color: "#fff",
  },
});
