import * as React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
import {
  setLoader,
  setPageIndex,
  setRepairShopList,
  setRepairShopSort,
} from "../../../redux/repair/repairSlice";
import { styles } from "./ListItem.style";
import SortType from "../../../assets/icons/sortType.svg";
import { getRepairShopList } from "../../../api/app/repairShop";
import { RootState } from "../../../redux/store/store";
import { IFilterDataProps } from "../../../helpers/stateTypes/filterModalTypes";
import * as Animatable from "react-native-animatable";
let searchTimeout: any = null;

interface Iprops {
  item: IFilterDataProps;
  listTab: number;
  index: number;
  expanded: number;
}

const ListItem = ({ item, listTab, index, expanded }: Iprops) => {
  const dispatch = useDispatch();
  const animationRef = React.useRef(null);
  const { serviceFilter, searchValue, setSort } = useSelector(
    (state: RootState) => state.repairData
  );
  const sort = setSort == item.value ? item.valueDesc : item.value;
  const isDesc = setSort == item.valueDesc;
  const isAsc = setSort == item.value;

  const setSortType = () => {
    dispatch(setRepairShopSort(sort));
    dispatch(setRepairShopList([]));
    dispatch(setPageIndex(1));
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
      getRepairShopList([], serviceFilter, searchValue, sort, 1)(dispatch);
      dispatch(setLoader(true));
    }, 1000);
  };

  React.useEffect(() => {
    const animationType = expanded !== -1 ? "fadeInDown" : "fadeInUp";
    const duration = 100 * item?.id;

    // Apply animation properties to the element
    animationRef.current?.animate(animationType, duration);
  }, [expanded]);

  return (
    <Animatable.View ref={animationRef}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          listTab !== 1 || item.name == "Distance" ? null : setSortType()
        }
        style={[
          styles.mainHolder,
          (isAsc || isDesc) && styles.mainHolderActive,
        ]}
      >
        <Text
          style={[
            styles.title,
            (isAsc || isDesc) && { fontFamily: fonts.montserratBold },
          ]}
        >
          {item.name}
        </Text>
        <View style={styles.typeHold}>
          <Text
            style={[
              styles.title,
              { color: colors.mediumGrey },
              (isAsc || isDesc) && { color: "#fff" },
            ]}
          >
            {isDesc ? item.typeDesc : item.type}
          </Text>
          {(isAsc || isDesc) && item.name !== "Distance" && (
            <View style={{ paddingLeft: 8 }}>
              <View style={[isDesc && { transform: [{ rotate: "180deg" }] }]}>
                <SortType />
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ListItem;
