import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoader,
  setPageIndex,
  setRepairShopList,
  setServiceFilterCategories,
} from "../../../redux/repair/repairSlice";
import { styles } from "./ExpandedListItem.style";
import Arrow from "../../../assets/icons/filterArrow.svg";
import Clear from "../../../assets/icons/clearBtn.svg";
import {
  setFilterData,
  setSelectedServices,
} from "../../../redux/filterModal/filterModalSlice";
import ServiceList from "./ServiceList/ServiceList";
import fonts from "../../../helpers/fonts";
import { serviceType } from "../../../helpers/repair-list-data";
import LocationFilterModal from "../../LocationFilterModal/LocationFilterModal";
import { TouchableRipple } from "react-native-paper";
import colors from "../../../helpers/colors";
import LengthCountCircle from "../../InfoSelectedBar/LengthCountCircle";
import { getRepairShopList } from "../../../api/app/repairShop";
import { RootState } from "../../../redux/store/store";
import { getSvgIcon } from "../../../helpers/filter-sort-by-data";
import { IFilterDataProps } from "../../../helpers/stateTypes/filterModalTypes";
import * as Animatable from "react-native-animatable";
let searchTimeout: any = null;

interface Iprops {
  item: IFilterDataProps;
  index: number;
  setFilterTab: (e: number) => void;
  filterTab: number;
  expanded: number;
}

const ExpandedListItem = ({ item, index, setFilterTab, filterTab, expanded }: Iprops) => {
  const dispatch = useDispatch();
  const animationRef = React.useRef(null);
  const { filterData, selectedServices } = useSelector(
    (state: RootState) => state.filterModal
  );

  const { searchValue, setSort } =
    useSelector((state: RootState) => state.repairData);
  let isActive = selectedServices?.length && item.list?.type == "service-list";

  const openDropDown = (indx: number) => {
    let tab = filterTab == indx ? -1 : indx;
    setFilterTab(tab);
  };

  const getFilteredData = (selected: string) => {
    dispatch(setRepairShopList([]));
    dispatch(setPageIndex(1));
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
      getRepairShopList(
        [],
        selected,
        searchValue,
        setSort,
        1
      )(dispatch);
      dispatch(setLoader(true));
    }, 1000);
  }

  const selectUser = (indx: number) => {
    let mainList = [...filterData];
    let selectedItemsString = "";
    if (mainList[1]?.list.data[indx].checked == true) {
      mainList[1].list.data[indx].checked = false;
    } else {
      mainList[1].list.data[indx].checked = true;
    }
    console.log(filterData[1]?.list.data[indx])
    dispatch(setFilterData(mainList));
    let selected = mainList[1].list?.data.filter((item) => item?.checked);
    selected?.map((item, index) => {
      selectedItemsString += `categoryIds[${index}]=${item.id}${
        index == selected?.length - 1 ? "" : "&"
      }`;
    });
    dispatch(setSelectedServices(selected));
    dispatch(setServiceFilterCategories(selectedItemsString));
    getFilteredData(selectedItemsString)
  };

  const uncheckAll = () => {
    let mainList = [...filterData];
    let selectedItemsString = "";
    mainList[1].list?.data?.map((e) => {
      if (e.checked == true) {
        e.checked = false;
      }
    });
    dispatch(setFilterData(mainList));
    let selected = mainList[1].list?.data.filter((item) => item?.checked);
    selected?.map((item, index) => {
      selectedItemsString += `categoryIds[${index}]=${item.id}${
        index == selected?.length - 1 ? "" : "&"
      }`;
    });
    dispatch(setSelectedServices(selected));
    dispatch(setServiceFilterCategories(""));
    getFilteredData("")
  };

  const handleCheckActiveService = (val) => {
    return selectedServices?.some((item) => val.name === item.name);
  };

  React.useEffect(() => {
    const animationType = expanded !== -1 ? 'fadeInDown' : 'fadeInUp';
    const duration = 200 * (index + 1);

    animationRef.current?.animate(animationType, duration);
  },[expanded])

  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <Animatable.View ref={animationRef} style={styles.rippleHolder}>
      <TouchableRipple
        onPress={() => (index == 0 ? null : openDropDown(index))}
        rippleColor={colors.darkGrey}
        style={[
          styles.mainHolder,
          isActive && filterTab == -1 && styles.mainHolderActive
        ]}
      >
        <>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          {getSvgIcon(item.name, isActive && filterTab == -1 ? item?.iconActive : item?.icon)}
            <Text
              style={[
                styles.title,
                filterTab == index && { fontFamily: fonts.montserratBold },
              ]}
            >
              {item.name}
            </Text>
            {isActive ? (
              <LengthCountCircle
                num={selectedServices?.length ? selectedServices?.length : 0}
                background={"#fff"}
                textColor={filterTab == -1 ? colors.primary : colors.darkGrey}
                marginLeft={4}
              />
            ) : null}
          </View>

          <View style={styles.typeHold}>
            {index > 0 &&
              (isActive ? (
                filterTab == -1 ? (
                  <View style={{ flexDirection: "row" }}>
                    {serviceType?.map((i: any, index: number) => (
                      <View key={index} style={{ marginRight: 5 }}>
                        {handleCheckActiveService(i)
                          ? i.iconServiceActive
                          : i.iconService}
                      </View>
                    ))}
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => uncheckAll()}
                  >
                    <Text style={[styles.title, styles.clearButtonText]}>
                      Clear
                    </Text>
                    <Clear />
                  </TouchableOpacity>
                )
              ) : (
                <View
                  style={[
                    filterTab == index && { transform: [{ rotate: "180deg" }] },
                  ]}
                >
                  <Arrow />
                </View>
              ))}
          </View>
        </>
      </TouchableRipple>
      </Animatable.View>
      {filterTab == index && (
        <View>
          {item.list?.type == "service-list" ? (
            <ServiceList item={item} selectUser={selectUser}/>
          ) : (
            <LocationFilterModal />
          )}
        </View>
      )}
    </View>
  );
};

export default ExpandedListItem;
