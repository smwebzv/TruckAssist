import { Dimensions, StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";
const screenWidth = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonHolder: {
    position: "absolute",
    zIndex: 1,
    left: 12,
  },
  button: {
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 34,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fonts.montserratBold,
    color: colors.darkGrey,
    marginLeft: 8,
  },
});
