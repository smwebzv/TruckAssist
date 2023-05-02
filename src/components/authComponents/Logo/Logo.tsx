import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import TitleLogo from "../../../assets/icons/titleLogoSmall.svg";
import {
  clearInfo,
  setEmptyAuthError,
  setLoading,
} from "../../../redux/auth/authSlice";
import { logoStyles } from "./Logo.style";

interface IProps {
  blur?: boolean;
}

const Logo = ({ blur }: IProps) => {
  const { navigate }: any = useNavigation();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const goToWelcomeScreen = () => {
    navigate("auth-screen");
    dispatch(clearInfo());
    dispatch(setEmptyAuthError());
    dispatch(setLoading(false));
  };

  return (
    <>
      {blur ? (
        <BlurView
          style={[logoStyles.blur, { top: -insets.top }]}
          blurAmount={20}
          blurType="light"
          overlayColor="transparent"
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => goToWelcomeScreen()}
            style={{ alignItems: "center", paddingTop: 52 }}
          >
            <TitleLogo />
          </TouchableOpacity>
        </BlurView>
      ) : (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => goToWelcomeScreen()}
          style={{ alignItems: "center", paddingTop: 52 }}
        >
          <TitleLogo />
        </TouchableOpacity>
      )}
    </>
  );
};
export default Logo;
