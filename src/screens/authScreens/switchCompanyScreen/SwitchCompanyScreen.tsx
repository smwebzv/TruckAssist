import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./SwitchCompanyScreen.style";
import PageTitle from "../../../components/PageTittle/PageTittle";
import { CartsSlider } from "../../../components/authComponents/CartsSlider/CartsSlider";
import Footer from "../../../components/authComponents/Footer/Footer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../../components/authComponents/Logo/Logo";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const SwitchCompanyScreen = () => {
  const insets = useSafeAreaInsets();
  const {userData} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView style={[styles.mainHolder, { paddingTop: insets.top }]}>
      <Logo />
      <View>
        <View style={styles.titleHolder}>
          <PageTitle
            title={"Hi " + userData?.firstName?.trim()}
            text="Please choose your company."
            textAlignCenter={true}
          />
        </View>
        <View style={{ height: 240 }}>
          <CartsSlider />
        </View>
        <Footer text="Have new company?" linkText="Create Account" />
      </View>
    </SafeAreaView>
  );
};

export default SwitchCompanyScreen;
