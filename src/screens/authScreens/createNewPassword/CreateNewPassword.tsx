import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { createNewPasswordSyle } from "./CreateNewPassword.style.tsx";
import PageTitle from "../../../components/PageTittle/PageTittle";
import AuthInput from "../../../components/authComponents/AuthInput/AuthInput";
import Button from "../../../components/authComponents/Button/Button";
import Footer from "../../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Logo from "../../../components/authComponents/Logo/Logo";
import { setConfirmPassword, setPassword } from "../../../redux/auth/authSlice";
import { RootState } from "../../../redux/store/store";

interface IProps {}

const CreateNewPassword = ({ route }: IProps) => {
  const insets = useSafeAreaInsets();
  const info = useSelector((state: RootState) => state.auth);
  const isActive =
    info.password !== "" &&
    info.confirmPassword !== "" &&
    info.password.length > 7 &&
    info.confirmPassword.length > 7;
  const resetPassword = route.params.resetPassword;
  const confirmationEmail = route.params.confirmationEmail;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={[createNewPasswordSyle.mainHolder, { paddingTop: insets.top }]}
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
          <View style={{ paddingBottom: !resetPassword ? 80 : 0 }}>
            <PageTitle
              title={resetPassword ? "Create New Password" : "Create Password"}
              text={resetPassword ? confirmationEmail : "Finish setting up."}
              textAlignCenter={true}
            />
            <View style={{ marginTop: 40 }}>
              <AuthInput
                placeholder={resetPassword ? "New Password" : "Password"}
                numberOfLines={1}
                value={info.password}
                onChangeText={setPassword}
                secureTextEntry={true}
                type={"password"}
              />
              <AuthInput
                placeholder="Confirm Password"
                numberOfLines={1}
                value={info.confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                type={"confirm-password"}
              />
            </View>
            <Button
              inputsType={"password-confirmPassword"}
              name={info.loading ? "Please Wait" : "Confirm"}
              active={isActive}
              page={resetPassword ? "signIn-screen" : "switch-company-screen"}
              confirmationEmail={confirmationEmail}
            />
          </View>
        </KeyboardAvoidingView>
        {resetPassword && (
          <Footer text="You found old password?" linkText="Sign In" />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CreateNewPassword;
