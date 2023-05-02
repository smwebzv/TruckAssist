import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainHolder: {
    flex: 1,
    alignSelf: "flex-start",
    height: "100%",
    paddingTop: 44,
    paddingHorizontal: 27,
    overflow: "hidden",
  },
  headerHold: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 17,
  },
  initialsHolder: {
    width: 56,
    height: 56,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  initialsSecondHolder: {
    width: 28,
    height: 28,
    backgroundColor: "#AFDFD6",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    color: "#fff",
    fontFamily: fonts.montserratBold,
    lineHeight: 18,
  },
  name: {
    fontSize: 11,
    color: "#fff",
    fontFamily: fonts.montserrat,
    lineHeight: 14,
  },
  initials: {
    fontSize: 11,
    color: "#127E5A",
    fontFamily: fonts.montserratBold,
    lineHeight: 14,
  },
  firstCirkle: {
    width: 12,
    height: 12,
    backgroundColor: colors.darkGrey,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -3,
    right: -3,
  },
  secondCirkle: {
    width: 8,
    height: 8,
    backgroundColor: "#26A690",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  thirdCirkle: {
    width: 4,
    height: 4,
    backgroundColor: colors.darkGrey,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 40,
  },
  button: {
    width: 90 ,
    marginBottom: 32,
    alignItems: "center",
  },
  rippleHolder: {
    width: 56,
    height: 56,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonName: {
    fontSize: 11,
    color: "#fff",
    fontFamily: fonts.montserrat,
    lineHeight: 14,
    marginTop: 4,
  },
  iconHolder: {
    width: 56,
    height: 56,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow:'hidden',
    backgroundColor: colors.darkGrey,
  }
});
