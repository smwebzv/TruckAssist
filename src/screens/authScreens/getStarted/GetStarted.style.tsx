import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: colors.authBackground,
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 102,
  },
  titleHolder: {
    maxWidth: 320,
    alignSelf: "center",
  },
  infoCard: {
    width: 239,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 22,
    marginBottom: 32,
  },
  name: {
    fontSize: 14,
    color: colors.darkerGrey,
    fontFamily: fonts.montserratBold,
    marginBottom: 4,
    marginTop: 12,
  },
  jobDesc: {
    fontSize: 11,
    color: colors.mediumGrey,
    fontFamily: fonts.montserrat,
    marginBottom: 12,
  },
  icon: {
    height: 49,
    justifyContent: "center",
  },
});
