import React from "react";
import { Text, View } from "react-native";
import fonts from "../../helpers/fonts";

interface IProps {
  num: number;
  background: string;
  textColor: string;
  marginLeft?: number;
  marginRight?: number;
}

const LengthCountCircle = ({
  num,
  background,
  textColor,
  marginLeft,
  marginRight,
}: IProps) => {
  return (
    <View
      style={{
        backgroundColor: background,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : 0,
        height: 18,
        minWidth: 18,
        paddingHorizontal: 5.5
      }}
    >
      <Text
        style={{
          fontSize: 11,
          fontFamily: fonts.montserratBold,
          color: textColor,
          lineHeight:14
        }}
      >
        {num}
      </Text>
    </View>
  );
};

export default LengthCountCircle;
