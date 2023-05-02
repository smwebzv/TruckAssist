import { StyleSheet, Dimensions } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    width: dimensions.width,
    height: dimensions.height,
    left: 0,
    flex: 1,
    backgroundColor: colors.background,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  cluster: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  clusterCount: {
    color: "#fff",
    fontFamily: fonts.montserratBold,
    fontSize: 16,
  },
});
