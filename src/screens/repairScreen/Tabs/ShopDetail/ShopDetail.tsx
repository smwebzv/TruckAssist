import * as React from "react";
import { useState } from "react";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../../../components/BackButton/BackButton";
import Details from "./Details/Details";
import RepairExpenses from "./RepairExpenses/RepairExpenses";
import ServicesDropdown from "./ServicesDropdown/ServicesDropdown";
import { shopDetailStyle } from "./ShopDetail.style";
import ShortcutsButtons from "./ShortcutsButtons/ShortuctsButtons";
import TruckBillList from "./TruckBillList/TruckBillList";
import { Dimensions, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
const dimensions = Dimensions.get("screen");
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import HeaderInfoSlider from "./HeaderInfo/HeaderInfoSlider";
import { RootState } from "../../../../redux/store/store";

interface Iprops {
  tab: number;
  setTab: (tab: number) => void;
}

const ShopDetail = ({ tab, setTab }: Iprops) => {
  const [previewTab, setPreviewTab] = useState(1);
  const insets = useSafeAreaInsets();
  const [positionY, setPositionY] = useState(0);
  const [swipe, setSwipe] = useState(false);
  const selectedRepairShop = useSelector(
    (state: RootState) => state.repairData.selectedRepairShop
  );

  const handleScroll = (event) => {
    setPositionY(event.nativeEvent.contentOffset.y);
  };

  return (
    <Animatable.View
      animation="slideInLeft"
      duration={350}
      style={[
        shopDetailStyle.mainHolder,
        swipe && previewTab === 2 && { paddingTop: insets.top + 66 },
      ]}
    >
      <LinearGradient
        colors={["#FFFFFFE5", "#FFFFFF99"]}
        style={{
          height: 66 + insets.top,
          position: "absolute",
          zIndex: 99999,
          width: dimensions.width,
        }}
      >
        <BlurView
          style={{
            flex: 1,
          }}
          blurType="light"
          blurAmount={1}
          overlayColor="transparent"
        >
          <View
            style={{ backgroundColor: "transparent", paddingTop: insets.top }}
          >
            <BackButton
              search={false}
              setTab={setTab}
              mapPage={false}
              shadow={false}
              tab={2}
              title={tab === 2 ? "Repair Shop Detail" : ""}
              repairShopName={positionY > 25 && selectedRepairShop.name}
            />
          </View>
        </BlurView>
      </LinearGradient>

      <ScrollView onScroll={handleScroll} style={shopDetailStyle.mainHolder}>
        <View>
          <HeaderInfoSlider swipe={false} />
        </View>

        <ShortcutsButtons
          setPreviewTab={setPreviewTab}
          previewTab={previewTab}
        />

        {previewTab === 1 && (
          <>
            <Details />
            <ServicesDropdown />
            <RepairExpenses />
          </>
        )}

        {previewTab === 2 && <TruckBillList />}
      </ScrollView>
    </Animatable.View>
  );
};

export default ShopDetail;
