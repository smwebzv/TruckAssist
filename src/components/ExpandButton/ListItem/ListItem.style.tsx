import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainHolder: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 12,
  },
  mainHolderActive: {
    backgroundColor: colors.primary,
    borderRadius: 8
  },
  title: {
    fontFamily: fonts.montserrat,
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
  },
  typeHold: {
    flexDirection:'row',
    alignItems:'center'
  }
});
