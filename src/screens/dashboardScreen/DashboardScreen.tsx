import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRepairCounts, getRepairShopList } from "../../api/app/repairShop";
import DispatchStatus from "../../components/dispatchComponents/DispatchStatus/DispatchStatus";
import LocationStatus from "../../components/dispatchComponents/LocationStatus/LocationStatus";
import VehicleStatus from "../../components/dispatchComponents/VehicleStatus/VehicleStatus";
import { setCurrentScreen } from "../../redux/menu/menuSlice";
import { RootState } from "../../redux/store/store";
import { styles } from "./DashboardScreen.style";
import DashboardInfo from "./Tabs/DashboardInfo/DashboardInfo";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const { shopList, serviceFilter, searchValue, setSort, pageIndex } =
    useSelector((state: RootState) => state.repairData);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      dispatch(setCurrentScreen("dashboard-screen"));
    }
  }, [isFocused]);

  React.useEffect(() => {
    getRepairCounts()(dispatch)
    if(shopList.length) return;
    getRepairShopList(
      shopList,
      serviceFilter,
      searchValue,
      setSort,
      pageIndex
    )(dispatch);
  }, []);


  return (
    <View style={styles.mainHolder}>
      <DashboardInfo />
      <View style={styles.cardInfoHolder}>
        <DispatchStatus name="Angelo Trotter" status={false} time="00:53" />
        <View style={styles.statusHolder}>
          <LocationStatus
            location="North Little Rock AZ 72116"
            time="1 day ago"
          />
          <VehicleStatus
            status="DRIVING - NE"
            time="00:34 ago"
            speed="47 mph"
          />
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;
