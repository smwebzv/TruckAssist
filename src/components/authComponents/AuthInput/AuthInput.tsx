import * as React from "react";
import {
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./AuthInput.style";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../helpers/colors";
import { useEffect, useState } from "react";
import EyeHideSvg from "../../../assets/icons/eyeHideIcon.svg";
import EyeSvg from "../../../assets/icons/eyeIcon.svg";
import MailIcon from "../../../assets/icons/inputMailIcon.svg";
import PasswordIcon from "../../../assets/icons/passwordIcon.svg";
import { setEmptyAuthError } from "../../../redux/auth/authSlice";
import {
  changingInputColorsOnBlur,
  changingInputColorsOnFocus,
} from "../../../helpers/inputColorsChanging";
import { RootState } from "../../../redux/store/store";

interface Iprops {
  value: string;
  onChangeText: any;
  placeholder: string;
  secureTextEntry: boolean;
  numberOfLines: number;
  type: string;
  setConfirmationEmail?: (e: string) => void;
}

const AuthInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  numberOfLines,
  type,
  setConfirmationEmail,
}: Iprops) => {
  const [hidePassword, setHidePassword] = useState(
    secureTextEntry ? true : false
  );
  const [focused, setFocused] = useState(false);
  let animatedBackground: {
    transitionTo: (arg0: { backgroundColor: string }) => void;
  };
  const handleAnimatedRefBackground = (ref: any) => (animatedBackground = ref);

  const info = useSelector((state: RootState) => state.auth);
  const [iconColor, setIconColor] = useState(colors.mediumGrey);
  const [textColor, setTextColor] = useState(colors.darkerGrey);
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState(new Animated.Value(1));

  const getIcon = () => {
    if (type === "email") {
      return <MailIcon color={iconColor} />;
    } else if (["password", "confirm-password"].includes(type)) {
      if (secureTextEntry && value !== "") {
        if (hidePassword) {
          return <EyeHideSvg color={iconColor} />;
        } else {
          return <EyeSvg color={iconColor} />;
        }
      } else {
        return <PasswordIcon color={iconColor} />;
      }
    }
  };

  const changingColorsOnFocus = (value: string) => {
    changingInputColorsOnFocus(
      info,
      focused,
      value,
      type,
      animatedBackground
    )(dispatch, setIconColor, setTextColor);
  };

  const changingColorsOnBlur = () => {
    setFocused(false);

    changingInputColorsOnBlur(
      info,
      value,
      type,
      animatedBackground
    )(setIconColor, setTextColor);
  };

  const onPressIn = () => {
    setFocused(true),
      animatedBackground.transitionTo({
        backgroundColor: colors.darkerGrey,
      }),
      setIconColor("#6C6C6C"),
      setTextColor("#fff");
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (info.loading) {
      animatedBackground.transitionTo({ backgroundColor: "#F7F7F7" });
      setIconColor(colors.inactiveButton);
      setTextColor(colors.greyOpacity);
    } else {
      changingColorsOnBlur();
    }
  }, [info.loading]);

  useEffect(() => {
    if (value === "" && !focused) {
      dispatch(setEmptyAuthError());
      animatedBackground.transitionTo({ backgroundColor: "#fff" });
      setIconColor(colors.mediumGrey);
      setTextColor(colors.darkerGrey);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [value, focused]);


  return (
    <Animatable.View
      ref={handleAnimatedRefBackground}
      animation="fadeInUp"
      duration={300}
      style={[styles.mainContainer]}
    >
      <TextInput
        style={[styles.textInput, { color: textColor }]}
        value={value}
        autoCapitalize="none"
        onChangeText={(e) => [
          dispatch(onChangeText(e)),
          setConfirmationEmail && setConfirmationEmail(e),
          changingColorsOnFocus(e),
        ]}
        numberOfLines={numberOfLines}
        secureTextEntry={hidePassword}
        onPressIn={() => onPressIn()}
        onBlur={() => {
          changingColorsOnBlur();
        }}
      />

      <Animated.View style={[styles.placeholder, { opacity: opacity }]}>
        <Text style={[styles.placeholderText]}>{placeholder}</Text>
        <Text style={[styles.startSign]}>*</Text>
      </Animated.View>

      {
        <TouchableOpacity
          activeOpacity={1}
          disabled={type === "email" || value === ""}
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.iconContainer}
        >
          {getIcon()}
        </TouchableOpacity>
      }

      <View>
        <Text style={styles.error}>
          {type === "email"
            ? info.authError.email
            : type === "confirm-password"
            ? info.authError.confirmPassword
            : type === "password"
            ? info.authError.password
            : ""}
        </Text>
      </View>
    </Animatable.View>
  );
};

export default AuthInput;
