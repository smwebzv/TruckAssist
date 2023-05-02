import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const styles = StyleSheet.create({
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
  headerHolder: {
    marginHorizontal: 12,
    marginTop: 12,
    position: "relative",
    zIndex: 99999,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    marginLeft: 12,
    lineHeight: 32,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
  },
});
