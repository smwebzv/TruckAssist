import React from "react";
import { Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { style } from "./DropDownItem.style";

interface IProps {
  name?: string;
  holderStyle: any;
  textStyle: any;
  secondTextStyle?: any;
  secondName?: string;
  icon?: JSX.Element;
  duration: number;
  dot?: boolean;
}

const DropDownItem = ({
  name,
  holderStyle,
  textStyle,
  secondTextStyle,
  secondName,
  icon,
  duration,
  dot
}: IProps) => {
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={duration}
      style={holderStyle}
    >
      {icon && icon}
      <View style={[dot && {flexDirection:'row'}]}>
        <Text style={textStyle}>{name}</Text>
        { dot && <Text style={style.dot}>•</Text> }
        {secondName && <Text style={secondTextStyle}>{secondName}</Text>}
      </View>
    </Animatable.View>
  );
};

export default DropDownItem;
