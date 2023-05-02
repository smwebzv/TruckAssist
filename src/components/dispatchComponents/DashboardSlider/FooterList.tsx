import React from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../helpers/colors";
import { styles } from "./DashboardSlider.style";

interface IProps {
  setActiveType: (e: number) => void;
}

const types = ["WTD", "MTD", "QTD", "YTD", "ALL"];

const FooterList = ({ setActiveType }: IProps) => {
  const [filterType, setFilterType] = React.useState("WTD");
  const dimensions = Dimensions.get("screen");
  const activeItemWidth = (dimensions.width - 64) / 5;
  const [xPosition] = React.useState(new Animated.Value(4));

  const handlePress = (index: number) => {
    Animated.timing(xPosition, {
      toValue: activeItemWidth * index + 4,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const changeFilterType = (type: string, index: number) => {
    setFilterType(type);
    handlePress(index);
    setActiveType(index);
  };

  return (
    <View style={styles.footerHolder}>
      {types.map((item: string, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={[styles.button, { zIndex: 1 }]}
          onPress={() => changeFilterType(item, index)}
        >
          <Text
            style={[styles.buttonText, filterType == item && { color: "#fff" }]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.button,
          {
            backgroundColor: colors.darkGrey,
            position: "absolute",
            width: activeItemWidth,
          },
          { transform: [{ translateX: xPosition }] },
        ]}
      />
    </View>
  );
};

export default FooterList;
