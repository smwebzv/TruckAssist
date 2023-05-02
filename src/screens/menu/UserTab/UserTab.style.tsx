import { StyleSheet } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";

export const styles = StyleSheet.create({
  headerHold: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backArrowHold: { width: 42, height: 42, borderRadius: 30, overflow: 'hidden' },
  backRipple: {
    flex:1,
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
  companyHold: {
    height: 36,
    borderRadius: 30,
    backgroundColor: colors.darkGrey,
    overflow: 'hidden'
  },
  companyRipple: {
    flex: 1,
    paddingHorizontal: 12,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  companyName: {
    fontFamily: fonts.montserratMedium,
    fontSize: 14,
    color: "#fff",
    paddingLeft: 8,
  },
  userInfoHold: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 27,
  },
  buttonHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 42,
    borderRadius: 8,
    overflow:'hidden'
  },
  rippleHolder: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    height: 42,
    paddingHorizontal: 12,
  },
  rippleText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: fonts.montserrat,
    paddingLeft: 8,
    lineHeight: 18,
  },
  editHold: {
    position: "absolute",
    backgroundColor: colors.darkGrey,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    overflow:'hidden',
    top: 50,
    right: -7
  },
  editRipple: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  }
});
