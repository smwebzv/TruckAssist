import React from "react";
import { SafeAreaView, View } from "react-native";
import { authScreenStyles } from "./AuthScreen.style";
import AuthSlider from "../../components/authComponents/AuthSlider/AuthSlider";
import Button from "../../components/authComponents/Button/Button";
import Footer from "../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../components/authComponents/Logo/Logo";

interface IProps {}

const AuthScreen = ({}: IProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[authScreenStyles.mainHolder, { paddingTop: insets.top }]}
    >
      <Logo />

      <View>
        <AuthSlider />

        <Button name="Create Account" page="register-screen" />
        <Button name="Sign In" page="signIn-screen" />

        <Footer text="" />
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
