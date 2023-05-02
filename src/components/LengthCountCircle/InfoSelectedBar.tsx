import React from "react";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { styles } from "./InfoSelectedBar.style";

interface IProps {
  list?: ItemProps[];
  location?: string;
}

interface ItemProps {
  icon?: JSX.Element;
  iconActive?: JSX.Element;
  name?: string;
  checked?: boolean;
}

const InfoSelectedBar = ({ list, location }: IProps) => {
  const rest = list?.length > 3 ? list?.length - 3 : 0;
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <Animated.View style={animatedStyles}>
      <View style={styles.mainHolder}>
        {list ? (
          <>
            <Text numberOfLines={1} style={styles.text}>
              {list.map(
                (item, index) =>
                  item?.name +
                  (index < 2 && !(list.length == 2 && index == 1) ? ", " : "")
              )}
            </Text>
            {rest > 0 && (
              <Text style={[styles.text, { fontWeight: "700" }]}>+{rest}</Text>
            )}
          </>
        ) : (
          <Text numberOfLines={1} style={styles.text}>
            {location}
          </Text>
        )}
      </View>
    </Animated.View>
  );
};

export default InfoSelectedBar;
