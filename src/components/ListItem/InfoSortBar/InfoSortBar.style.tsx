import { StyleSheet } from "react-native";
import fonts from "../../../helpers/fonts";

export const style = StyleSheet.create({
  likeDislikeHold: {
    flexDirection: "row",
    alignItems:'center',
    height: 14,
    marginTop: 4,
  },
  likeDislike: {
    flexDirection: "row",
    alignContent:'center',
    height: 14,
  },
  likeDislikeText: {
    color: "#919191",
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 14,
    paddingLeft: 6,
    paddingRight: 21,
  },
  usedText: {
    color: "#919191",
    fontFamily: fonts.montserratBold,
    fontSize: 11,
    lineHeight: 14
  },
});
