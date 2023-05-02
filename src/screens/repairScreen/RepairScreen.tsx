import * as React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./RepairScreen.style";
import ShopList from "./Tabs/ShopList/ShopList";
import MenuScreen from "./Tabs/MenuScreen/MenuScreen";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../helpers/filter-sort-by-data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import ShopDetail from "./Tabs/ShopDetail/ShopDetail";
import PageTitle from "../../components/PageTittle/PageTittle";
import LinearGradient from "react-native-linear-gradient";
import { setCurrentScreen } from "../../redux/menu/menuSlice";
import { toggleBlur } from "../../redux/blurView/blurViewSlice";
import { setFilterData } from "../../redux/filterModal/filterModalSlice";
import { RootState } from "../../redux/store/store";

const RepairScreen = () => {
  const insets = useSafeAreaInsets();
  const routeName = useSelector((state: RootState) => state.menu.screenName);
  const dispatch = useDispatch();
  const [tab, setTab] = React.useState(0);
  const [mapPage, setMapPage] = React.useState(false);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      dispatch(setCurrentScreen("repair-screen"));
    }
  }, [isFocused]);

  const changeTabScreen = (tab: number) => {
    setTab(tab);
    dispatch(toggleBlur(false));
  };

  React.useEffect(() => {
    dispatch(setFilterData(filterData));
  }, []);

  React.useEffect(() => {
    setTab(0);
  }, [routeName]);

  React.useEffect(() => {
    if (tab == 0 || tab == 2) setMapPage(false);
  }, [tab]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={[styles.mainHolder, tab !== 2 && { paddingTop: insets.top }]}
      >
        {tab == 0 && (
          <>
            <PageTitle
              title="Repair"
              text="Equipment do break sometimes. Find nearby shop, view previous repair bills and serviced items."
              titleMarginBottom={4}
              fontSizeTitle={26}
            />
            <MenuScreen setTab={changeTabScreen} />
          </>
        )}
        {[1, 3, 4].includes(tab) && (
          <ShopList
            setMapPage={setMapPage}
            mapPage={mapPage}
            changeTab={changeTabScreen}
            listTab={tab}
          />
        )}

        {tab == 2 && <ShopDetail tab={tab} setTab={changeTabScreen} />}

        {tab === 0 && (
          <LinearGradient
            colors={["#6F9EE0", "#EEEEEE"]}
            style={styles.background}
          ></LinearGradient>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RepairScreen;
