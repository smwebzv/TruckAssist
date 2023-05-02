import { StyleSheet } from "react-native";
import fonts from "../../../../helpers/fonts";

export const styles = StyleSheet.create({
  mainHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  button: {
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    borderRadius: 8,
    paddingRight: 12,
    paddingLeft: 2,
  },
  title: {
    fontFamily: fonts.montserrat,
    fontSize: 14,
    lineHeight: 17,
    color: "#fff",
    paddingLeft: 10,
  }
});
