import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInfo,
  setEmptyAuthError,
  setLoading,
} from "../../../redux/auth/authSlice";
import { authButtonStyles } from "./Button.style";
import isDataValidate from "../../../helpers/authValidate";
import CheckIcon from "../../../assets/icons/check.svg";
import {
  createAccount,
  verifyDriver,
  verifyResetPassword,
} from "../../../api/auth/authActions";
import { TouchableRipple } from "react-native-paper";
import { RootState } from "../../../redux/store/store";

interface IProps {
  name: string;
  active?: boolean;
  page?: string;
  resetPassword?: boolean;
  inputsType?: string;
  setRequestedButton?: (e: boolean) => void;
  confirmationEmail?: string;
  loginCode?: string;
}

const Button = ({
  name,
  active,
  page,
  resetPassword,
  inputsType,
  setRequestedButton,
  confirmationEmail,
  loginCode,
}: IProps) => {
  const { navigate }: any = useNavigation();
  const dispatch = useDispatch();

  const info = useSelector((state: RootState) => state.auth);

  const handleRedirect = () => {
    if (page) {
      let route = page ? page : "";

      dispatch(setLoading(false));
      dispatch(clearInfo());
      dispatch(setEmptyAuthError());
      if (
        page === "confirmation-code-screen" ||
        page === "create-new-password-screen"
      ) {
        if (page === "confirmation-code-screen") {
          navigate(route, {
            resetPassword: resetPassword,
            confirmationEmail: confirmationEmail,
          });
        } else {
          if (resetPassword) {
            verifyResetPassword(
              confirmationEmail,
              loginCode,
              resetPassword,
              info,
              route
            )(dispatch, navigate);
          } else {
            verifyDriver(
              confirmationEmail,
              loginCode,
              resetPassword,
              info,
              route
            )(dispatch, navigate);
          }
        }
      } else {
        if (route !== "token") {
          navigate(route);
        }
      }
    }
  };

  const onPressLogin = () => {
    if (name === "Request Again") {
      setRequestedButton(true);
      setTimeout(() => {
        createAccount(confirmationEmail, info)(handleRedirect, dispatch);
      }, 3000);
    }

    if (name === "Try Different Email") {
      dispatch(clearInfo());
      dispatch(setEmptyAuthError());
    } else if (
      page !== "token" &&
      name !== "Request Again" &&
      (info.email || info.password || info.confirmPassword)
    ) {
      dispatch(setLoading(true));
      isDataValidate(
        info,
        inputsType,
        page,
        confirmationEmail,
        resetPassword
      )(handleRedirect, dispatch);
    } else if (name === "Verify") {
      dispatch(setLoading(true));
      setTimeout(() => {
        handleRedirect();
      }, 1500);
    } else {
      handleRedirect();
    }
  };

  return (
    <View
      style={[
        authButtonStyles.buttonHolder,
        ["Sign In", "Try Different Email"].includes(name) &&
          authButtonStyles.whiteButton,
        name === "REQUESTED" && { backgroundColor: "#26A690" },
        ["Confirm", "Request", "Verify", "Code Expired"].includes(name) &&
          !active &&
          authButtonStyles.inactiveButton,
        name === "Forgot password" && { backgroundColor: "transparent" },
      ]}
    >
      <TouchableRipple
        rippleColor={
          (name === "Confirm" || name === "REQUESTED" || name === 'Forgot password') && !active
            ? "transparent"
            : name === "Sign In"
            ? "#3074D31A"
            : "#255BB9"
        }
        onPress={(e) => {
          (name === "Confirm" || name === "REQUESTED") && !active
            ? null
            : onPressLogin();
        }}
        style={authButtonStyles.rippleHolder}
      >
        <>
          <Text
            style={[
              authButtonStyles.nameButton,
              {
                color:
                  info.loading && name !== "Forgot password"
                    ? "#98B9EA"
                    : "#fff",
              },
              ["Sign In", "Try Different Email"].includes(name) &&
                authButtonStyles.blueText,
              ["Confirm", "Request", "Verify", "Code Expired"].includes(name) &&
                !active &&
                authButtonStyles.inactiveText,
              name === "Forgot password" &&
                (info.loading
                  ? authButtonStyles.forgotPasswordLoading
                  : authButtonStyles.forgotPassword),
            ]}
          >
            {name}
          </Text>
          {info.loading && (
            <ActivityIndicator color="#fff" style={authButtonStyles.loader} />
          )}
          {name === "REQUESTED" && (
            <CheckIcon style={{ position: "absolute", right: 18.8 }} />
          )}
        </>
      </TouchableRipple>
    </View>
  );
};

export default Button;
