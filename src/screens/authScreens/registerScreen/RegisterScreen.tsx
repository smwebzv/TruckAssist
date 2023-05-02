import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./RegisterScreen.style";
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

const RegisterScreen = () => {
  const insets = useSafeAreaInsets();
  const info = useSelector((state: RootState) => state.auth);
  const isActive = validator.isEmail(info.email);
  const [confirmationEmail, setConfirmationEmail] = React.useState<string>("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[styles.mainHolder, { paddingTop: insets.top }]}>
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
            <View style={styles.titleHolder}>
              <PageTitle
                title="Create Account"
                secondTitle="Drivers & Owners Only"
                text="In order to create account, make sure that you are invited from some company."
                text2="Use email you get invitation to."
                textAlignCenter={true}
              />
            </View>
            <View style={{ marginTop: 30 }}>
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
              name={
                info.authError.email
                  ? "Try Different Email"
                  : isActive
                  ? info.loading
                    ? "Please Wait"
                    : "Next"
                  : "Confirm"
              }
              active={isActive}
              page="confirmation-code-screen"
              resetPassword={false}
              confirmationEmail={confirmationEmail}
            />
          </View>
        </KeyboardAvoidingView>
        <View />
        <Footer text="Already have account?" linkText="Sign In" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
