import { Dimensions, StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";
const screenWidth = Dimensions.get("screen").width;

export const buttonBackStyles = StyleSheet.create({
  mainHolder: {
    marginHorizontal: 12,
    marginTop: 12,
    position: "relative",
    zIndex: 99999,
    flexDirection: "row",
    alignItems: "center",
  },
  holderBackArrow: {
    borderRadius: 100,
    width: 42,
    height: 42,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  holderWithSearch: {
    width: screenWidth - 24,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
    zIndex: 2,
  },
  holderValueAndCount: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    left: 42,
  },
  searchText: {
    fontSize: 17,
    fontFamily: fonts.montserratBold,
    color: colors.darkGrey,
    marginRight: 6,
  },
  countBox: {
    borderRadius: 20,
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 35,
    alignItems: "center",
  },
  countValue: {
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    color: "#fff",
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
    fontFamily: fonts.montserratBold,
  },
  title: {
    marginLeft: 12,
    lineHeight: 32,
    fontFamily: fonts.montserratBold,
    color: colors.darkerGrey,
    maxWidth: screenWidth - 162,
  },
  options: {
    backgroundColor: colors.background,
    position: "absolute",
    right: 0,
  },
  holderStar: {
    marginLeft: 5,
  },
  infoSearchResult: {
    backgroundColor: colors.primary,
    position: "absolute",
    width: 80,
    height: 22,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    right: 42,
    top: 10,
  },
  infoSearchText: { fontSize: 11, fontFamily: fonts.montserrat }
});
