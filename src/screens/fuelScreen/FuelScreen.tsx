import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTittle/PageTittle";
import { setCurrentScreen } from "../../redux/menu/menuSlice";
import { RootState } from "../../redux/store/store";
import { loadScreenStyles } from "./FuelScreen.style";
import FirstTab from "./Tabs/FirstTab/FirstTab";
import SecondTab from "./Tabs/SecondTab/SecondTab";

const FuelScreen = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const routeName = useSelector((state: RootState) => state.menu.screenName);
  const [tabIndx, setTabIndx] = useState(0);
  const background = require("../../assets/background/blueCircles.png");

  React.useEffect(() => {
    setTabIndx(0);
  }, [routeName]);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      dispatch(setCurrentScreen("fuel-screen"));
    }
  }, [isFocused]);

  return (
    <SafeAreaView
      style={[loadScreenStyles.mainHolder, { paddingTop: insets.top }]}
    >
      <PageTitle
        title="Fuel"
        text="Efficient fuel management at your fingertips. Find nearby stops, view previous fuel transactions."
        titleMarginBottom={4}
        fontSizeTitle={26}
      />

      {tabIndx === 0 ? <FirstTab setTabIndx={setTabIndx} /> : <SecondTab />}

      {tabIndx === 0 && (
        <Image
          style={loadScreenStyles.background}
          resizeMode="cover"
          source={background}
        />
      )}
    </SafeAreaView>
  );
};

export default FuelScreen;
