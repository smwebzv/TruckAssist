import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainHolder: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    height:56
  },
  iconTitleHolder: {
    flexDirection:'row',
    alignItems:'center',
    paddingBottom: 3
  },
  title: {
    fontFamily: fonts.montserrat,
    fontSize: 14,
    lineHeight: 18,
    color: "#fff",
    paddingLeft: 6,
  },
  status: {
    fontFamily: fonts.montserrat,
    fontSize: 11,
    lineHeight: 14,
    color: colors.mediumGrey,
  },
  statusBold: {
    fontFamily: fonts.montserratBold,
  },
  visitedHold: {
    alignItems:'center', 
    width:35
  }
});
