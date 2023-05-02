import React, { forwardRef, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import colors from "../../../../helpers/colors";
import { RootState } from "../../../../redux/store/store";
import { styles } from "../ConfirmationCodeScreen.style";

interface IProps {
  id: number;
  nextInput: any;
  prevInput: any;
  setNumber: any;
  placeholder?: string;
  backgroundColor?: string;
  errorInput?: boolean;
  first?: boolean;
  last?: boolean;
}

const EnterCodeInput = (props: IProps, ref: any) => {
  const authState = useSelector((state: RootState) => state.auth);
  const [backgroundColor, setBackgroundColor] = useState<string>(
    props.backgroundColor || "#fff"
  );
  const [textColor, setTextColor] = useState<string>(colors.darkerGrey);
  const [placeholder, setPlaceholder] = useState<string | undefined>(
    props.placeholder
  );
  const [value, setValue] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    !!placeholder ? setEnabled(true) : setEnabled(false);
    props.errorInput && setEnabled(true);
  }, [placeholder, props.errorInput]);

  const enableEditing = () => {
    if (enabled) return "auto";
    if (props.first && !value) return "auto";
    return "none";
  };

  useEffect(() => {
    if (authState.loading) {
      setBackgroundColor("#F7F7F7");
      setTextColor(colors.inactiveButton);
    } else if (authState.authError.verifyCode) {
      setBackgroundColor(colors.inputLightRed);
      setTextColor(colors.darkerGrey);
    }
  }, [authState.loading]);

  return (
    <View style={[styles.box, { backgroundColor: backgroundColor }]}>
      <TextInput
        style={[styles.boxText, { color: textColor }]}
        placeholder={props.placeholder || placeholder}
        selectionColor={"#fff"}
        maxLength={1}
        keyboardType="number-pad"
        returnKeyType="next"
        onBlur={() => {
          if (props.backgroundColor && !value) {
            setBackgroundColor(props.backgroundColor);
            setTextColor(colors.darkerGrey);
          } else {
            if (!value) {
              setBackgroundColor("#fff");
              setTextColor(colors.darkerGrey);
            } else {
              setBackgroundColor(colors.inputLightBlue);
              setTextColor(colors.darkerGrey);
            }
            if (value && placeholder && !props.first) {
              setBackgroundColor(colors.inputLightBlue);
              setTextColor(colors.darkerGrey);
            }
          }
        }}
        onFocus={() => {
          if (value) {
            setBackgroundColor(colors.inputBlue);
            setTextColor("#6F9EE0");
          } else {
            setBackgroundColor(colors.darkerGrey);
          }
        }}
        onChangeText={(value) => {
          if (value.length >= 1 && !isNaN(Number(value))) {
            setValue(value);
            setPlaceholder("");
            props.nextInput?.current?.focus();
            props.last && setBackgroundColor(colors.inputLightBlue);
          }
        }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === "Backspace" && value) {
            setValue("");
          }
          if (keyValue === "Backspace" && !value) {
            props.prevInput?.current?.focus();
            setPlaceholder("");
            setBackgroundColor("#fff");
          }
          if (!!Number(keyValue)) {
            props.nextInput?.current?.focus();
            setValue(keyValue);
            props.setNumber(keyValue);
            setPlaceholder("");
          }
        }}
        value={value}
        ref={ref}
        blurOnSubmit={true}
        onChange={(e: NativeSyntheticEvent<TextInputEndEditingEventData>) =>
          props.setNumber(e.nativeEvent.text)
        }
      />
    </View>
  );
};
export default forwardRef(EnterCodeInput);
