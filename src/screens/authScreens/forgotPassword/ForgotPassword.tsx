import React from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { forgotPasswordSyle } from "./ForgotPassword.style";
import PageTitle from "../../../components/PageTittle/PageTittle";
import AuthInput from "../../../components/authComponents/AuthInput/AuthInput";
import Button from "../../../components/authComponents/Button/Button";
import Footer from "../../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import validator from "validator";
import Logo from "../../../components/authComponents/Logo/Logo";
import { setEmail } from "../../../redux/auth/authSlice";
import { RootState } from "../../../redux/store/store";

interface IProps {}

const ForgotPassword = ({}: IProps) => {
  const insets = useSafeAreaInsets();
  const info = useSelector((state: RootState) => state.auth);
  const isActive = validator.isEmail(info.email);
  const [confirmationEmail, setConfirmationEmail] = React.useState<string>("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView
        style={[forgotPasswordSyle.mainHolder, { paddingTop: insets.top }]}
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
              title="Password Reset"
              text="You will receive email with instructions on how to create new password."
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
                setConfirmationEmail={setConfirmationEmail}
              />
            </View>
            <Button
              inputsType={"email"}
              name={isActive ? "Next" : "Request"}
              active={isActive}
              page="confirmation-code-screen"
              resetPassword={true}
              confirmationEmail={confirmationEmail}
            />
          </View>
        </KeyboardAvoidingView>
        <Footer text="Get back to" linkText="Sign In" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
