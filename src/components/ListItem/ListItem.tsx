import React from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { listItemStyles } from "./ListItem.style";
import Load from "../../assets/icons/load.svg";
import Star from "../../assets/icons/star.svg";
import Arrow from "../../assets/icons/backArrow.svg";
import Visited from "../../assets/icons/visitedIcon.svg";
import colors from "../../helpers/colors";
import DropDownCart from "./DropDownCart/DropDownCart";
import InfoSortBar from "./InfoSortBar/InfoSortBar";
import { useDispatch, useSelector } from "react-redux";
import HighlightedText from "../HighlightedText/HighlightedText";
import { TouchableRipple } from "react-native-paper";
import DividingLine from "../DividingLine/DividingLine";
import RippleButton from "../RippleButton/RippleButton";
import { Easing } from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import { setSelectedRepairShop } from "../../redux/repair/repairSlice";
import { RootState } from "../../redux/store/store";
import { IShopListProps } from "../../helpers/stateTypes/repairTypes";
const dimensions = Dimensions.get("screen");

interface IProps {
  item: IShopListProps;
  page?: string;
  setShopIndex?: (e: number) => void;
  shopIndex?: number;
  index?: number;
  changeTab?: (e: number) => void;
  tab?: number;
  light?: boolean;
}

const MemoList = ({
  item,
  page,
  setShopIndex,
  shopIndex,
  index,
  changeTab,
  tab,
  light,
}: IProps) => {
  const { searchValue } = useSelector((state: RootState) => state.repairData);
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = React.useState(
    new Animated.Value(0)
  );
  const [adressHeight, setAdressHeight] = React.useState(
    new Animated.Value(18)
  );
  const bgColor = light ? "#fff" : colors.background;
  const [opacity, setOpacity] = React.useState(new Animated.Value(1));
  const isDropdown =
    page == "repairShop-screen" && shopIndex == index ? true : false;
  const isDropdownNextItem =
    page == "repairShop-screen" && index !== 0 && shopIndex + 1 == index
      ? true
      : false;
  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", bgColor],
  });

  const animatedStyles = {
    backgroundColor: backgroundColorInterpolation,
  };

  const handleDropdown = (indx: number) => {
    if (indx == shopIndex) {
      setShopIndex(-1);
    } else {
      setShopIndex(indx);
    }
  };

  React.useEffect(() => {
    if (isDropdown || light) {
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.timing(adressHeight, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(backgroundColor, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.timing(adressHeight, {
        toValue: 18,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [shopIndex, light]);

  const selectRepairShop = () => {
    dispatch(setSelectedRepairShop(item));
    changeTab && changeTab(2);
  };

  return (
    <>
      <DividingLine
        lineWidth={dimensions.width - 16}
        lineHeight={(index == 0 && tab == 3) || page == "map-screen" ? 0 : 2}
        background={
          isDropdown || isDropdownNextItem ? "transparent" : "#F7F7F7"
        }
      />
      <Animated.View
        style={[
          {
            overflow: "hidden",
          },
          animatedStyles,
        ]}
      >
        <TouchableRipple
          onPress={() => (page == "map-screen" ? null : handleDropdown(index))}
          rippleColor="#E5E5E5"
          style={[listItemStyles.holderItem, isDropdown && { paddingRight: 8 }]}
        >
          <>
            <View style={{ flex: 1 }}>
              <View style={[{ flexDirection: "row", height: 18 }]}>
                <HighlightedText
                  text={item.name ? item.name : ""}
                  search={searchValue}
                  style={listItemStyles.title}
                  holderStyle={{ marginRight: 6 }}
                  secondaryStyle={listItemStyles.title}
                  page={page}
                  isDropdown={isDropdown}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent:
                      isDropdown || light ? "flex-start" : "space-between",
                  }}
                >
                  {["repairShop-screen", "map-screen"].includes(page) &&
                  item?.pinned ? (
                    <Star color={colors.primary} />
                  ) : (
                    <View />
                  )}
                  {["repairShop-screen", "map-screen"].includes(page) &&
                    item.lastVisited && (
                      <View style={{ paddingLeft: 6 }}>
                        <Visited color="#26A690" />
                      </View>
                    )}
                </View>
              </View>

              {page == "load-screen" ? (
                <>
                  <View
                    style={[
                      listItemStyles.numberLoadAndIcon,
                      listItemStyles.holderFirstLocation,
                    ]}
                  >
                    <View style={listItemStyles.circlePickup}>
                      <Text style={listItemStyles.pickupNumber}>
                        {item?.pickupNumber}
                      </Text>
                    </View>
                    <Text
                      style={[listItemStyles.time, listItemStyles.location]}
                    >
                      {item?.location1}
                    </Text>
                  </View>

                  <View style={[listItemStyles.numberLoadAndIcon]}>
                    <View
                      style={[
                        listItemStyles.circlePickup,
                        listItemStyles.circleDelivery,
                      ]}
                    >
                      <Text
                        style={[
                          listItemStyles.pickupNumber,
                          listItemStyles.deliveryNumber,
                        ]}
                      >
                        {item?.deliveryNumber}
                      </Text>
                    </View>
                    <Text
                      style={[listItemStyles.time, listItemStyles.location]}
                    >
                      {item?.location2}
                    </Text>
                  </View>
                </>
              ) : ["repairShop-screen", "map-screen"].includes(page) ? (
                <>
                  <Animated.View style={{ height: adressHeight }}>
                    <Text style={listItemStyles.repairShopLocation}>
                      {item?.address?.city +
                        ", " +
                        item?.address?.stateShortName +
                        (item?.address?.zipCode
                          ? " " + item?.address?.zipCode
                          : "") +
                        ", " +
                        item?.address?.country}
                    </Text>
                  </Animated.View>
                  <InfoSortBar item={item} />
                </>
              ) : null}
            </View>

            <View style={listItemStyles.holderRightSide}>
              {page == "load-screen" ? (
                <>
                  <View style={listItemStyles.numberLoadAndIcon}>
                    <Text style={listItemStyles.numberLoad}>
                      {item?.numberLoad}
                    </Text>
                    <Load />
                  </View>
                  <Text
                    style={[listItemStyles.time, listItemStyles.timeMargin]}
                  >
                    {item?.time1}
                  </Text>
                  <Text style={listItemStyles.time}>{item?.time2}</Text>
                </>
              ) : null}
            </View>
            {isDropdown || page == "map-screen" ? (
              <Animatable.View animation="fadeInLeft" duration={200}>
                <RippleButton
                  rippleColor={"#fff"}
                  onPress={() => selectRepairShop()}
                  icon={<Arrow color={light ? "#fff" : "#919191"} />}
                  buttonHolder={[
                    listItemStyles.arrowHold,
                    light && { backgroundColor: colors.primary },
                  ]}
                  rippleStyle={listItemStyles.arrowHoldRipple}
                />
              </Animatable.View>
            ) : null}
          </>
        </TouchableRipple>
        {isDropdown ? (
          <Animatable.View animation="fadeInDown" duration={100}>
            <TouchableOpacity activeOpacity={1}>
              <DropDownCart item={item} light={light} opacity={opacity} />
            </TouchableOpacity>
          </Animatable.View>
        ) : null}
      </Animated.View>
    </>
  );
};
export const ListItem = React.memo(MemoList);
