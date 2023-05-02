import { Dimensions, StyleSheet } from "react-native";
const dimensions = Dimensions.get('screen');

const bottomSheetStyles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
})

export default bottomSheetStyles;