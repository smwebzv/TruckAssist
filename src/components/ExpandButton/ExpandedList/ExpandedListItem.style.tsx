import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    maxHeight: 42,
    borderRadius: 8,
    overflow: 'hidden'
  },
  rippleHolder: {
    maxHeight: 42,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden'
  },
  mainHolderActive: {
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  title: {
    fontFamily: fonts.montserrat,
    fontSize: 14,
    lineHeight: 18,
    color: "#fff",
    paddingLeft: 10,
  },
  typeHold: {
    flexDirection: "row",
    alignItems: "center",
  },
  clearButton: {
    backgroundColor:"#EF535066", 
    paddingHorizontal:10, 
    height:26,
    flexDirection:'row', 
    alignItems:'center', 
    borderRadius:20
  },
  clearButtonText: {
    fontFamily:fonts.montserratBold, 
    fontSize: 11, 
    paddingLeft:0,
    paddingRight: 6
  }
});
