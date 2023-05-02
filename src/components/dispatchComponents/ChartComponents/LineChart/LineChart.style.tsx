import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 102,
    backgroundColor: "#DADADA",
    borderRadius: 4,
    marginRight: 12,
    flexDirection: "column",
  },
  laidDownContainer: {
    width: 160,
    height: 18,
    marginRight: 0,
    flexDirection: "row",
  },
  firstPercentageHold: {
    width: 22,
    backgroundColor: "#26A690",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 0,
  },
  secondPercentageHold: {
    width: 22,
    backgroundColor: "#EF5350",
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  lineDotsHolder: {
    width: 24,
    position: "absolute",
    left: -10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dots: {
    backgroundColor: "#AB47BC",
    width: 6,
    height: 6,
    borderRadius: 10,
  },
  line: {
    backgroundColor: "#fff",
    width: 6,
    height: 2,
    borderRadius: 3,
    marginTop: 2,
  },
});
