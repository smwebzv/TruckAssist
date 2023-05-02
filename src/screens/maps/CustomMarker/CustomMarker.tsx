import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import fonts from "../../../helpers/fonts";
import { styles } from "./CustomMarker.style";

interface IProps {
  icon: number;
  name: string;
  isFocused: boolean;
}

const CustomMarker = ({ icon, name, isFocused }: IProps) => {
  return (
    <ImageBackground
      style={[styles.mainHolder, isFocused && { width: 134, height: 40 }]}
    >
      <Image
        style={[styles.icon, isFocused && styles.focusedIcon]}
        source={icon}
      />
      <View style={styles.textHolder}>
        <Text
          numberOfLines={2}
          style={[
            styles.text,
            isFocused && { fontFamily: fonts.montserratBold },
          ]}
        >
          {name}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default CustomMarker;
