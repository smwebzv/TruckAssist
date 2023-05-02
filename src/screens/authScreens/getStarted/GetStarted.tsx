import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "./GetStarted.style";
import Profile from "../../../assets/icons/profile.svg";
import Company from "../../../assets/icons/companyLogo.svg";
import PageTitle from "../../../components/PageTittle/PageTittle";
import Button from "../../../components/authComponents/Button/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../../../components/authComponents/Logo/Logo";

const GetStarted = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainHolder, { paddingTop: insets.top }]}>
      <Logo />
      <View>
        <View style={styles.titleHolder}>
          <PageTitle
            title="Welcome"
            text="Everything is set up."
            textAlignCenter={true}
          />
        </View>
        <View style={styles.infoCard}>
          <Profile />
          <Text style={styles.name}>Aleksandar Djordjevic</Text>
          <Text style={styles.jobDesc}>Driver Contractor</Text>
          <View style={styles.icon}>
            <Company />
          </View>
        </View>
        <Button name="Get Started" page="token" />
      </View>
    </View>
  );
};

export default GetStarted;
