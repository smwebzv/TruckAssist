import * as React from "react";
import { StyleSheet, View } from "react-native";

interface IPanelHandleProps {}

const PanelHandle: React.FunctionComponent<IPanelHandleProps> = (props) => {
  return (
    <View style={styles.handleContainer}>
      <View style={styles.handle} />
    </View>
  );
};

const styles = StyleSheet.create({
  handleContainer: {
    height: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#fff'
  },
  handle: {
    backgroundColor: "#919191",
    width: 17,
    height: 4,
    borderRadius: 4,
    marginBottom: 16
  },
});

export default PanelHandle;
