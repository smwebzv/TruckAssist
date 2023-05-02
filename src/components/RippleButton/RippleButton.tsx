import React from "react";
import { Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

interface IProps {
  rippleColor: string;
  name?: string;
  onPress?: () => void;
  onPressWithReturn?: (e: any) => void;
  functionParametar?: any;
  icon?: JSX.Element;
  buttonHolder: any;
  rippleStyle: any;
  nameStyle?: any;
}

const RippleButton = ({
  rippleColor,
  name,
  onPress,
  onPressWithReturn,
  functionParametar,
  icon,
  buttonHolder,
  rippleStyle,
  nameStyle,
}: IProps) => {
  return (
    <View style={buttonHolder}>
      <TouchableRipple
        onPress={() =>
          onPress
            ? onPress()
            : onPressWithReturn && functionParametar
            ? onPressWithReturn(functionParametar)
            : console.log("ripple button pressed")
        }
        rippleColor={rippleColor}
        style={rippleStyle}
      >
        <>
          {icon && icon}
          {name && <Text style={nameStyle}>{name}</Text>}
        </>
      </TouchableRipple>
    </View>
  );
};

export default RippleButton;
