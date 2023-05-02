import { StyleSheet } from "react-native";

import colors from "./colors";
import fonts from "./fonts";

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 42,
    color: colors.primary,
    fontFamily: fonts.montserrat,
    textAlign: "center",
  },
});

export default styles;
