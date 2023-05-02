import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { signInScreenStyles } from "./SignInScreen.style";
import PageTitle from "../../../components/PageTittle/PageTittle";
import AuthInput from "../../../components/authComponents/AuthInput/AuthInput";
import Button from "../../../components/authComponents/Button/Button";
import Footer from "../../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import validator from "validator";
import Logo from "../../../components/authComponents/Logo/Logo";
import { setEmail, setPassword } from "../../../redux/auth/authSlice";
import { RootState } from "../../../redux/store/store";

interface IProps {}

const SignInScreen = ({}: IProps) => {
  const insets = useSafeAreaInsets();
  const info = useSelector((state: RootState) => state.auth);
  const isActive = validator.isEmail(info.email) && info.password.length >= 8;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={[signInScreenStyles.mainHolder, { paddingTop: insets.top }]}
      >
        <Logo />
        <KeyboardAvoidingView
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
          enabled={true}
        >
          <View>
            <PageTitle
              title="Sign In"
              text="Welcome back."
              textAlignCenter={true}
            />

            <View style={{ marginTop: 40 }}>
              <AuthInput
                placeholder="Email"
                numberOfLines={1}
                value={info.email}
                onChangeText={setEmail}
                secureTextEntry={false}
                type={"email"}
              />
              <AuthInput
                placeholder="Password"
                numberOfLines={1}
                value={info.password}
                onChangeText={setPassword}
                secureTextEntry={true}
                type={"password"}
              />
            </View>

            <Button
              inputsType={"email-password"}
              name={info.loading ? "Please Wait" : "Confirm"}
              active={isActive}
              page="switch-company-screen"
            />
          </View>
        </KeyboardAvoidingView>
        <Button name="Forgot password" page="forgot-password-screen" />
        <Footer text="Don’t have account?" linkText="Create Account" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
