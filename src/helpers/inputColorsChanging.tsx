import { setEmptyAuthError } from "../redux/auth/authSlice";
import colors from "./colors";
import validator from "validator";

export const changingInputColorsOnFocus =
  (
    info: { authError: {} },
    focused: boolean,
    value: string,
    type: string,
    animatedBackground: {
      transitionTo: (arg0: { backgroundColor: any }) => void;
    }
  ) =>
  (dispatch: any, setIconColor: any, setTextColor: any) => {
    if (info.authError !== {}) {
      dispatch(setEmptyAuthError());
    }

    if (focused && value === "") {
      animatedBackground.transitionTo({ backgroundColor: colors.darkerGrey });
      setIconColor("#6C6C6C");
      setTextColor("#fff");
    } else if (
      type === "email" &&
      focused &&
      value !== "" &&
      !validator.isEmail(value)
    ) {
      animatedBackground.transitionTo({ backgroundColor: colors.inputRed });
      setIconColor("#EF9A9A");
      setTextColor("#fff");
    } else if (
      focused &&
      ["password", "confirm-password"].includes(type) &&
      value !== "" &&
      (value?.length <= 7 || info.authError.password)
    ) {
      animatedBackground.transitionTo({ backgroundColor: colors.inputRed });
      setIconColor("#EF9A9A");
      setTextColor("#fff");
      if (type === "confirm-password" && info.authError === {}) {
        dispatch(setEmptyAuthError());
      }
    } else if (focused && value !== "") {
      animatedBackground.transitionTo({ backgroundColor: colors.inputBlue });
      setIconColor("#98B9EA");
      setTextColor("#fff");
    }
  };

export const changingInputColorsOnBlur =
  (
    info: { authError: {} },
    value: string,
    type: string,
    animatedBackground: {
      transitionTo: (arg0: { backgroundColor: any }) => void;
    }
  ) =>
  (setIconColor: any, setTextColor: any) => {
    if (
      type === "email" &&
      value !== "" &&
      (!validator.isEmail(value) || info.authError.email)
    ) {
      animatedBackground.transitionTo({
        backgroundColor: colors.inputLightRed,
      });
      setIconColor("#E57373");
      setTextColor(colors.darkerGrey);
    } else if (
      ["password", "confirm-password"].includes(type) &&
      value !== "" &&
      (value?.length <= 7 || info.authError.password)
    ) {
      animatedBackground.transitionTo({
        backgroundColor: colors.inputLightRed,
      });
      setIconColor("#E57373");
      setTextColor(colors.darkerGrey);
    } else if (value !== "") {
      animatedBackground.transitionTo({
        backgroundColor: colors.inputLightBlue,
      });
      setIconColor("#6F9EE0");
      setTextColor(colors.darkerGrey);
    } else {
      animatedBackground.transitionTo({ backgroundColor: "#fff" });
      setIconColor(colors.mediumGrey);
      setTextColor(colors.darkerGrey);
    }
  };
