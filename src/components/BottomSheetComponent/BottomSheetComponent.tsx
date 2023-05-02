import React, { useCallback, useMemo } from "react";
import {
  View,
  Text,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import bottomSheetStyles from "./BottomSheet.style";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface IProps {
  setOpenComment: (e: boolean) => void;
  component?: JSX.Element;
  snapPointsTop?: string;
}

const BottomSheetComponent = ({ setOpenComment, component, snapPointsTop }: IProps) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["20%", snapPointsTop], []);

  React.useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, [])

  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) {
      setOpenComment(false)
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          handleIndicatorStyle={{ backgroundColor: "#D9D9D9" }}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableContentPanningGesture={true}
        >
          <View style={bottomSheetStyles.contentContainer}>
            {component}
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default BottomSheetComponent;
