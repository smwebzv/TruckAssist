import React, { useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import BottomSheet, {
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { styles } from "./SwipeablePanel.style";
import { Shadow } from "react-native-shadow-2";
import List from "../../assets/icons/list.svg";
import DeviceInfo from "react-native-device-info";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../helpers/deviceModels";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setFocusedRepairShop, setFocusedRepairShopIndex } from "../../redux/repair/repairSlice";
const ios = Platform.OS === "ios";

interface IProps {
  component: JSX.Element;
  setHandleMapList: (e: boolean) => void;
  setEnableDrag: (e: boolean) => void;
  enableDrag: boolean;
  bottomSheetModalRef: React.RefObject<BottomSheet>;
}

const SwipeablePanel = ({
  component,
  setHandleMapList,
  setEnableDrag,
  enableDrag,
  bottomSheetModalRef,
}: IProps) => {
  const insets = useSafeAreaInsets();
  const { focusedRepairShop } = useSelector(
    (state: RootState) => state.repairData
  );
  const dispatch = useDispatch();
  const [isButton, setIsButton] = React.useState(false);
  const [snapIndex, setSnapIndex] = React.useState(1);
  const model = DeviceInfo.getModel();
  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);

  const snapPoints = useMemo(() => ["20%", "35%", "100%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.snapToIndex(1);
    setIsButton(false);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    setSnapIndex(index)
    if (index === 2) {
      setHandleMapList(true);
      setEnableDrag(false);
    } else if (index === -1) {
      setIsButton(true);
      dispatch(setFocusedRepairShop({}))
      dispatch(setFocusedRepairShopIndex(-1));
    } else {
      setHandleMapList(false);
      setEnableDrag(true);
    }
  }, [setHandleMapList, setEnableDrag, setIsButton, dispatch]);

  React.useEffect(() => {

    if(Object.keys(focusedRepairShop).length !== 0){
      handlePresentModalPress()
    }
  },[focusedRepairShop])

  return (
    <BottomSheetModalProvider>
      {isButton && (
        <View
          style={[
            styles.buttonHolder,
            { bottom: (deviceInfo ? 88 : 98) + (ios ? 0 : insets.bottom) },
          ]}
        >
          <Shadow startColor="#00000012" distance={5} style={[styles.button]}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
              onPress={() => handlePresentModalPress()}
            >
              <List />
              <Text style={styles.buttonText}>List</Text>
            </TouchableOpacity>
          </Shadow>
        </View>
      )}
      <BottomSheet
        ref={bottomSheetModalRef}
        index={1}
        handleIndicatorStyle={{ backgroundColor: "#919191" }}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableContentPanningGesture={enableDrag}
        topInset={-insets.top}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>{component}</View>
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};

export default SwipeablePanel;
