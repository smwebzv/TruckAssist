import {
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  PanResponderGestureState,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderInfo from "../HeaderInfo/HeaderInfoItem/HeaderInfoItem";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../../../../helpers/deviceModels";
import DeviceInfo from "react-native-device-info";
import SlidingUpPanel, {
  SlidingUpPanelAnimationConfig,
} from "rn-sliding-up-panel";
import PanelHandle from "./PanelHandle";
const ios = Platform.OS === "ios";

interface Iprops {}

const SwipeableHeader = ({}: Iprops) => {
  const deviceHeight = useWindowDimensions().height;
  const model = DeviceInfo.getModel();
  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);
  const insets = useSafeAreaInsets();
  const [top, setTop] = React.useState(830);
  const [bottom, setBottom] = React.useState(730);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [allowDragging, setAllowDragging] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const PANEL_VELOCITY = ios ? 1 : 2.3;

  const showFullScreenPanelTop: SlidingUpPanelAnimationConfig = {
    velocity: PANEL_VELOCITY,
    toValue: top,
  };

  const showFullScreenPanelBottom: SlidingUpPanelAnimationConfig = {
    velocity: PANEL_VELOCITY,
    toValue: bottom,
  };

  const panelRef = React.useRef<SlidingUpPanel | null>(null);

  const onMomentumDragEnd = React.useCallback(
    (value: number) => {
      if (value === top && !scrollEnabled) {
        setScrollEnabled(true);
        setAtTop(true);
        setAllowDragging(false);
        if (panelRef && panelRef.current) {
          panelRef.current.show(showFullScreenPanelTop);
        }
      } else if (value === bottom) {
        if (panelRef && panelRef.current) {
          panelRef.current.show(showFullScreenPanelBottom);
        }
      } else if (value === top) {
        if (panelRef && panelRef.current) {
          panelRef.current.show(showFullScreenPanelTop);
        }
      }
    },
    [top, bottom, scrollEnabled]
  );

  const onDragStart = React.useCallback(
    (_: number, gestureState: PanResponderGestureState) => {
      if (atTop && scrollEnabled) {
        if (gestureState.vy > 0) {
          setScrollEnabled(false);
          if (ios) {
            setAllowDragging(true);
          }
          if (panelRef && panelRef.current) {
            panelRef.current.show(showFullScreenPanelTop);
          }
        } else {
          setAtTop(false);
          if (ios) {
            setAllowDragging(false);
          }
        }
      }
    },
    [atTop, scrollEnabled, panelRef]
  );

  const [panelPositionVal] = useState(new Animated.Value(top));

  React.useEffect(() => {
    setAllowDragging(true);
    if (panelRef && panelRef.current) {
      panelRef.current.show(showFullScreenPanelTop);
    }
  }, []);
  
  return (
    <>
      <SlidingUpPanel
        ref={panelRef}
        animatedValue={panelPositionVal}
        draggableRange={{
          top: top,
          bottom: bottom,
        }}
        snappingPoints={[top, bottom]}
        backdropOpacity={0}
        showBackdrop={false}
        height={top}
        allowDragging={allowDragging}
        onMomentumDragEnd={onMomentumDragEnd}
        onDragStart={onDragStart}
      >
        <TouchableOpacity activeOpacity={1}>
          <HeaderInfo swipe={true} />
          <PanelHandle />
        </TouchableOpacity>
      </SlidingUpPanel>
    </>
  );
};

export default SwipeableHeader;
