import { StyleSheet } from "react-native";
import colors from "../../../../helpers/colors";
import fonts from "../../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    backgroundColor: "#fff",
    flex: 1,
    marginBottom: 22,
    justifyContent: "space-between",
  },
  header: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
  },
  initialsHolder: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#AFDFD6",
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.montserratBold,
    color: "#127E5A",
  },
});
