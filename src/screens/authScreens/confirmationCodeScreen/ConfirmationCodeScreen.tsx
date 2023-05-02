import * as React from "react";
import {
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./ConfirmationCodeScreen.style";
import PageTitle from "../../../components/PageTittle/PageTittle";
import EnterCodeInput from "./EnterCodeInput/EnterCodeInput";
import Button from "../../../components/authComponents/Button/Button";
import Footer from "../../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Timer from "../../../components/authComponents/Timer/Timer";
import { useSelector } from "react-redux";
import Logo from "../../../components/authComponents/Logo/Logo";
import { RootState } from "../../../redux/store/store";

interface IProps {}

const ConfirmationCodeScreen = ({ route }: IProps) => {
  const insets = useSafeAreaInsets();
  const [loginCode, setLoginCode] = React.useState<string>("");
  const [firstNumber, setFirstNumber] = React.useState<null | string>(null);
  const [secondNumber, setSecondNumber] = React.useState<null | string>(null);
  const [thirdNumber, setThirdNumber] = React.useState<null | string>(null);
  const [fourthNumber, setFourthNumber] = React.useState<null | string>(null);
  const [requestedButton, setRequestedButton] = React.useState<boolean>(false);
  const resetPassword = route.params.resetPassword;
  const confirmationEmail = route.params.confirmationEmail;

  const firstInput = React.useRef<TextInput>(null);
  const secondInput = React.useRef<TextInput>(null);
  const thirdInput = React.useRef<TextInput>(null);
  const fourthInput = React.useRef<TextInput>(null);

  const authState = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    if (firstNumber && secondNumber && thirdNumber && fourthNumber) {
      setLoginCode(firstNumber + secondNumber + thirdNumber + fourthNumber);
    }
  }, [firstNumber, secondNumber, thirdNumber, fourthNumber]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[styles.mainHolder, , { paddingTop: insets.top }]}>
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
                title={
                  resetPassword
                    ? "Password Reset Requested"
                    : "Thank you for choosing us"
                }
                text="Confirmation code has been sent to"
                textAlignCenter={true}
                email={confirmationEmail}
              />
            </View>
            <View style={styles.boxHolder}>
              <EnterCodeInput
                id={1}
                prevInput={firstInput}
                ref={firstInput}
                nextInput={secondInput}
                setNumber={setFirstNumber}
                backgroundColor={"#fff"}
                first={true}
              />
              <EnterCodeInput
                id={2}
                prevInput={firstInput}
                ref={secondInput}
                nextInput={thirdInput}
                setNumber={setSecondNumber}
              />
              <EnterCodeInput
                id={3}
                prevInput={secondInput}
                ref={thirdInput}
                nextInput={fourthInput}
                setNumber={setThirdNumber}
              />
              <EnterCodeInput
                id={4}
                prevInput={thirdInput}
                ref={fourthInput}
                nextInput={fourthInput}
                setNumber={setFourthNumber}
                last={true}
              />
              {authState.authError.verifyCode && (
                <View style={styles.errorCode}>
                  <Text style={styles.error}>
                    {authState.authError.verifyCode}
                  </Text>
                </View>
              )}
            </View>

            <Button
              name={
                authState.loading
                  ? "Please Wait"
                  : authState.codeExpired
                  ? "Code Expired"
                  : "Verify"
              }
              active={loginCode.length === 4}
              page={authState.codeExpired ? "" : "create-new-password-screen"}
              resetPassword={resetPassword}
              loginCode={loginCode}
              confirmationEmail={confirmationEmail}
            />
            {authState.codeExpired && (
              <Button
                name={requestedButton ? "REQUESTED" : "Request Again"}
                active={!requestedButton}
                setRequestedButton={setRequestedButton}
              />
            )}
            {!authState.codeExpired && <Timer />}
          </View>
        </KeyboardAvoidingView>
        <Footer text="Didn’t recive code?" linkText="Request Again" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmationCodeScreen;
