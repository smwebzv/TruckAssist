import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.authBackground,
    flex: 1,
    justifyContent: "space-between",
  },
  titleHolder: {
    maxWidth: 360,
    alignSelf: "center",
  },
  boxHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 36,
    position: "relative",
  },
  box: {
    backgroundColor: "#fff",
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    fontSize: 26,
    textAlign: "center",
  },
  error: {
    fontSize: 11,
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
    color: colors.defaultRed,
    alignSelf: "center",
    textAlign: "center",
  },
  errorCode: {
    position: "absolute",
    bottom: -18,
    maxWidth: 292,
  },
});
