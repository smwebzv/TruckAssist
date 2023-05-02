import * as React from "react";
import { View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import BackButton from "../../../../../../components/BackButton/BackButton";
import ExpandButton from "../../../../../../components/ExpandButton/ExpandButton";
import Sort from "../../../../../../assets/icons/sort.svg";
import Filter from "../../../../../../assets/icons/filter.svg";
import Map from "../../../../../../assets/icons/map.svg";
import Truck from "../../../../../../assets/icons/services/truck.svg";
import Trailer from "../../../../../../assets/icons/services/trailer.svg";
import Repair from "../../../../../../assets/icons/mainButtonIcons/repair.svg";
import { styles } from "../Header.style";
import colors from "../../../../../../helpers/colors";
import InfoFilterButton from "../../../../../../components/InfoFilterButton/InfoFilterButton";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { sortByData, sortByDataBils } from "../../../../../../helpers/repair-sort-by-data";
import { trailerList, truckList } from "../../../../../../helpers/truck-trailer-list";
import { RootState } from "../../../../../../redux/store/store";
const dimensions = Dimensions.get("screen");
interface IProps {
  shadow: boolean;
  listTab: number;
  handleMapList: boolean;
  tab: number;
  changeTabScreen: (tab: number) => void;
  changeTab: (tab: number) => void;
  mapPage: boolean;
  expanded: number;
  setExpanded: (expanded: number) => void;
  translateY: any;
}

const ButtonsHold = ({
  shadow,
  listTab,
  changeTab,
  mapPage,
  changeTabScreen,
  tab,
  handleMapList,
  expanded,
  setExpanded,
  translateY
}: IProps) => {
  const { numberOfShops, findedNumberOfShops, serviceFilter, repairCounts } =
    useSelector((state: RootState) => state.repairData);
  const { selectedServices, filterData } = useSelector((state: RootState) => state.filterModal);
  const insets = useSafeAreaInsets();
  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  return (
    <View
      style={{
        paddingTop: insets.top,
        elevation: 1,
        zIndex: 3,
      }}
    >
      <BackButton
        search={true}
        value={
          listTab == 1
            ? "Repair Shop"
            : listTab == 3
            ? "Truck Repair Bills"
            : "Trailer Repair Bills"
        }
        count={
          listTab == 1
            ? numberOfShops
            : listTab == 3
            ? repairCounts?.truckRepairCount
            : repairCounts?.trailerRepairCount
        }
        findedCount={findedNumberOfShops}
        setTab={changeTab}
        mapPage={mapPage}
        shadow={shadow}
        tab={1}
      />
      <View style={{ overflow: "hidden", paddingTop: 12 }}>
        <Animated.View
          style={[
            styles.buttonsHold,
            {
              flexDirection: "column",
            },
            actionBarStyle,
          ]}
        >
          <View style={{ flexDirection: "row" }}>
          {listTab !== 1 && (
              <ExpandButton
                name={listTab == 3 ? expanded == 1 ? "Truck Unit" : "35645" : expanded == 1 ? "Trailer Unit" : "R-123"}
                buttonWidth={120}
                icon={listTab == 3 ? <Truck color={tab == 3 ? "#fff" : colors.mediumGrey} /> : <Trailer color={tab == 3 ? "#fff" : colors.mediumGrey} />}
                index={1}
                tabScreen={tab}
                expanded={expanded}
                setExpanded={setExpanded}
                changeTabScreen={changeTabScreen}
                listTab={listTab}
                type={listTab == 3 ? "truck" : "trailer"}
                dropdownData={listTab == 3 ? truckList : trailerList}
              />
            )}
            <ExpandButton
              name={"Sort by"}
              buttonWidth={dimensions.width - (listTab === 1 ? 211 : 249)}
              icon={<Sort />}
              index={listTab == 1 ? 1 : 2}
              tabScreen={tab}
              expanded={expanded}
              setExpanded={setExpanded}
              changeTabScreen={changeTabScreen}
              listTab={listTab}
              type={"sort"}
              dropdownData={listTab !== 1 ? sortByDataBils : sortByData}
            />
            <ExpandButton
              name={"Filter"}
              buttonWidth={89}
              icon={
                <Filter
                  color={
                    serviceFilter && expanded == -1 ? "#fff" : colors.mediumGrey
                  }
                />
              }
              index={listTab == 1 ? 2 : 3}
              tabScreen={tab}
              expanded={expanded}
              setExpanded={setExpanded}
              changeTabScreen={changeTabScreen}
              listTab={listTab}
              type={"filter"}
              dropdownData={filterData}
            />
            {listTab === 1 && (
              <ExpandButton
                name={"Map"}
                buttonWidth={82}
                icon={<Map color={tab == 3 ? "#fff" : colors.mediumGrey} />}
                index={3}
                tabScreen={tab}
                expanded={expanded}
                setExpanded={setExpanded}
                changeTabScreen={changeTabScreen}
                listTab={listTab}
                type={"map"}
              />
            )}
          </View>
          {selectedServices.length && expanded == -1 ? (
            <View style={{ flexDirection: "row" }}>
              <InfoFilterButton
                icon={<Repair color="#98B9EA" />}
                array={selectedServices}
              />
            </View>
          ) : null}
        </Animated.View>
      </View>
    </View>
  );
};

export default ButtonsHold;
