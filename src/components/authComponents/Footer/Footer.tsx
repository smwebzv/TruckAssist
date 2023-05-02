import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../helpers/colors";
import { clearInfo, setCodeExpired } from "../../../redux/auth/authSlice";
import { RootState } from "../../../redux/store/store";
import { authFooterStyles } from "./Footer.style";

interface IProps {
  text: string;
  linkText?: string;
}

const Footer = ({ text, linkText }: IProps) => {
  const { navigate }: any = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const handleRedirect = () => {
    if (linkText === "Create Account") {
      navigate("register-screen");
    } else if (linkText === "Sign In") {
      navigate("signIn-screen");
    } else if (linkText === "Request Again") {
      dispatch(setCodeExpired(false));
    }
    dispatch(clearInfo());
  };

  return (
    <View style={authFooterStyles.mainHolder}>
      {!text && !linkText ? (
        <Text style={authFooterStyles.text}>
          By continuing, you are agreeing to our
          <Text style={authFooterStyles.blueText}> Terms of Service</Text> and
          <Text style={authFooterStyles.blueText}> Privacy Policy</Text>
        </Text>
      ) : (
        <>
          <Text
            style={[
              authFooterStyles.text,
              loading && { color: colors.greyOpacity },
            ]}
          >
            {text}
          </Text>
          <TouchableOpacity activeOpacity={1} onPress={() => handleRedirect()}>
            <Text
              style={[
                authFooterStyles.blueText,
                loading && { color: colors.greyOpacity },
              ]}
            >
              {linkText}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
export default Footer;
