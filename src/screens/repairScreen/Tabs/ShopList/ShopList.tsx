import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./ShopList.style";
import * as Animatable from "react-native-animatable";
import MapScreen from "../../../maps/MapScreen";
import AnimatedList from "./AnimatedList/AnimatedList";
import Header from "./ShopListHeader/Header";
import { Dimensions, View } from "react-native";
import ListItem from "../../../../components/ListItem/ListItem";
import { useSharedValue, set } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { truckBillList } from "../../../../helpers/repair-list-data";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import SwipeablePanel from "../../../../components/SwipeablePanel/SwipeablePanel";
import { toggleBlur } from "../../../../redux/blurView/blurViewSlice";
import { RootState } from "../../../../redux/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const dimensions = Dimensions.get("screen");
interface IProps {
  setMapPage?: (tab: boolean) => void;
  changeTab: (e: number) => void;
  mapPage: boolean;
  listTab: number;
}

const ShopList = ({ setMapPage, mapPage, changeTab, listTab }: IProps) => {
  const insets = useSafeAreaInsets();
  const { focusedRepairShop, shopList, shopMapList } = useSelector(
    (state: RootState) => state.repairData
  );
  const { selectedServices } = useSelector((state: RootState) => state.filterModal);

  const [tab, setTab] = React.useState(0);
  const [expanded, setExpanded] = React.useState(-1);
  const HEADER_HEIGHT = selectedServices?.length
    ? 148 + insets.top
    : 112 + insets.top;
  const [handleMapList, setHandleMapList] = React.useState(false);
  const [shopIndex, setShopIndex] = React.useState(-1);
  const dispatch = useDispatch();
  const translateY = useSharedValue(0);
  const heightValue = useSharedValue(HEADER_HEIGHT);
  const [shadow, setShadow] = React.useState(false);
  const [enableDrag, setEnableDrag] = React.useState(true)
  const bottomSheetModalRef = React.useRef<BottomSheet>(null);

  const changeTabScreen = (tab: number) => {
    setTab(tab);
    setHandleMapList(false);
    setEnableDrag(true)
    bottomSheetModalRef?.current?.snapToIndex(1)
    if (tab == 0 || tab == 3) dispatch(toggleBlur(false));
    else dispatch(toggleBlur(true));
  };

  React.useEffect(() => {
    setMapPage && setMapPage(tab === 3 ? true : false);
  }, [tab]);

  React.useEffect(() => {
    if (expanded !== -1) return;
    if (selectedServices?.length) {
      heightValue.value = 148 + insets.top;
    } else {
      heightValue.value = 112 + insets.top;
    }
  }, [selectedServices.length]);

  React.useEffect(() => {
    if (expanded !== -1) {
      heightValue.value = dimensions.height;
    } else {
      heightValue.value = HEADER_HEIGHT;
    }
  }, [expanded]);

  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animatable.View
        animation="slideInRight"
        duration={200}
        style={styles.mainHolder}
      >
        {tab === 3 && <MapScreen />}
        {tab === 3 ? (
          <SwipeablePanel
            component={
              Object.keys(focusedRepairShop).length === 0 ? (
                <AnimatedList
                  tab={tab}
                  handleMapList={handleMapList}
                  setShadow={setShadow}
                  listTab={listTab}
                  data={JSON.parse(shopMapList)}
                  setShopIndex={setShopIndex}
                  shopIndex={shopIndex}
                  changeTab={changeTab}
                  translateY={translateY}
                  heightValue={heightValue}
                  height={HEADER_HEIGHT}
                />
              ) : (
                <View style={{ padding: 8 }}>
                  <ListItem
                    item={focusedRepairShop}
                    page="map-screen"
                    light={true}
                    changeTab={changeTab}
                  />
                </View>
              )
            }
            setHandleMapList={setHandleMapList}
            setEnableDrag={setEnableDrag}
            enableDrag={enableDrag}
            bottomSheetModalRef={bottomSheetModalRef}
          />
        ) : (
          <AnimatedList
            tab={tab}
            handleMapList={handleMapList}
            setShadow={setShadow}
            listTab={listTab}
            data={listTab == 1 ? shopList : truckBillList}
            setShopIndex={setShopIndex}
            shopIndex={shopIndex}
            changeTab={changeTab}
            translateY={translateY}
            heightValue={heightValue}
            height={HEADER_HEIGHT}
          />
        )}
        <Header
          shadow={shadow}
          listTab={listTab}
          tab={tab}
          handleMapList={handleMapList}
          changeTabScreen={changeTabScreen}
          changeTab={changeTab}
          mapPage={mapPage}
          translateY={translateY}
          heightValue={heightValue}
          setExpanded={setExpanded}
          expanded={expanded}
        />
      </Animatable.View>
      </GestureHandlerRootView>
    </>
  );
};

export default ShopList;
