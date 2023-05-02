import * as React from "react";
import { View, Dimensions, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getRepairShopList } from "../../../../../api/app/repairShop";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TruckBillItem } from "../../ShopDetail/TruckBillList/TruckBillItem/TruckBillItem";
import EmptySceletonList from "../../../../../components/EmptySceletonList/EmptySceletonList";
import {
  setLoader,
  setPageIndex,
} from "../../../../../redux/repair/repairSlice";
import { RootState } from "../../../../../redux/store/store";
import { IShopListProps } from "../../../../../helpers/stateTypes/repairTypes";
import { ListItem } from "../../../../../components/ListItem/ListItem";
const dimensions = Dimensions.get("screen");
interface IProps {
  tab: number;
  handleMapList: boolean;
  setShadow: (e: boolean) => void;
  listTab: number;
  data: IShopListProps[];
  setShopIndex: (e: number) => void;
  shopIndex: number;
  changeTab: (e: number) => void;
  translateY: any;
  heightValue: any;
  height: number;
}

interface ItemProps {
  item: IShopListProps,
  index: number;
}

const AnimatedList = ({
  tab,
  handleMapList,
  setShadow,
  listTab,
  data,
  setShopIndex,
  shopIndex,
  changeTab,
  translateY,
  heightValue,
  height,
}: IProps) => {
  const dispatch = useDispatch();
  const {
    shopList,
    pageIndex,
    findedNumberOfShops,
    serviceFilter,
    searchValue,
    setSort,
  } = useSelector((state: RootState) => state.repairData);
  const insets = useSafeAreaInsets();

  let decimalNumber = findedNumberOfShops / 25;
  let roundedNumber = Math.ceil(decimalNumber);

  const handleScroll = () => {
    if (roundedNumber == pageIndex) return;
    dispatch(setPageIndex(pageIndex + 1));
    dispatch(setLoader(true));
    getRepairShopList(
      shopList,
      serviceFilter,
      searchValue,
      setSort,
      pageIndex + 1
    )(dispatch);
  };

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const regularHandler = (event) => {
    if (event.nativeEvent.contentOffset.y == 0) {
      setShadow(false);
    } else {
      setShadow(true);
    }
  };

  const scrollAnimatedHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = 0;
        heightValue.value = height - 12;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -height;
        heightValue.value = 58 + insets.top;
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const renderItem = React.useCallback(
    ({ item, index }:ItemProps) => (
      <View
        key={index}
        style={[
          {
            flex: 1,
            width: dimensions.width,
            backgroundColor: "#fff",
          },
          index === data.length - 1 && { paddingBottom: 94 },
        ]}
      >
        {listTab !== 1 ? (
          <TruckBillItem key={index} item={item} list={true} index={index} />
        ) : (
          <ListItem
            tab={tab}
            item={item}
            page="repairShop-screen"
            setShopIndex={setShopIndex}
            shopIndex={shopIndex}
            index={index}
            changeTab={changeTab}
          />
        )}
      </View>
    ),
    [shopIndex]
  );

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        top: -insets.top,
        backgroundColor: "#fff",
      }}
    >
      <Animated.FlatList
        data={data}
        horizontal={false}
        bounces={false}
        scrollEnabled={!handleMapList && tab == 3 ? false : true}
        ListEmptyComponent={() => <EmptySceletonList />}
        renderItem={renderItem}
        style={{
          flex: 1,
          width: dimensions.width,
          minHeight: dimensions.height,
        }}
        contentContainerStyle={{
          paddingTop:
            tab == 3 && !handleMapList
              ? Platform.OS == "ios"
                ? 60
                : 30
              : height + (tab == 3 && handleMapList ? 24 : 0),
        }}
        scrollEventThrottle={16}
        onEndReached={handleScroll}
        onScrollBeginDrag={scrollAnimatedHandler}
        onScrollEndDrag={scrollAnimatedHandler}
        onScroll={regularHandler}
      />
    </View>
  );
};

export default AnimatedList;
