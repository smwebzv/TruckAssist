import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { tabButtonStyles } from "./TabButton.style";
import AddNew from "../../assets/icons/addNew.svg";
import { ITabButtonsList } from "../../helpers/interfaceData";
import LineChart from "../../screens/repairScreen/LineChart/LineChart";
import { TouchableRipple } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

interface IProps {
  item: ITabButtonsList;
  index?: number;
  setTabIndx?: (e: number) => void;
  page: string;
}

const TabButton = ({ item, index, setTabIndx, page }: IProps) => {
  const { repairCounts } = useSelector((state: RootState) => state.repairData);
  const isButtonActive =
    item.count ||
    (item.name === "Preventive Maintenance" && true) ||
    ["load-screen", "fuel-screen"].includes(page);
  const isBlueButton =
    ["repair-screen", "fuel-screen"].includes(page) && index == 0;
  const isInnactiveButton = ["load-screen"].includes(page) && index == 0;

  return (
    <SafeAreaView style={tabButtonStyles.holderTabs}>
      <View
        style={[
          tabButtonStyles.holderRipple,
          isBlueButton && tabButtonStyles.blueButton,
          isInnactiveButton && tabButtonStyles.innactiveButton,
        ]}
      >
        <TouchableRipple
          rippleColor="#3074D3"
          style={[tabButtonStyles.tabButton]}
          onPress={() => setTabIndx && index && setTabIndx(index)}
        >
          <>
            <View style={tabButtonStyles.holderLeftPart}>
              <View
                style={[
                  tabButtonStyles.holderIcon,
                  !isButtonActive &&
                    !isBlueButton &&
                    tabButtonStyles.iconOpasity,
                ]}
              >
                {item.image}
              </View>

              <View>
                <Text
                  style={[
                    tabButtonStyles.title,
                    isInnactiveButton
                      ? tabButtonStyles.innactiveText
                      : isBlueButton
                      ? tabButtonStyles.blueText
                      : isButtonActive
                      ? tabButtonStyles.activeText
                      : null,
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    tabButtonStyles.description,
                    isInnactiveButton
                      ? tabButtonStyles.innactiveText
                      : isBlueButton
                      ? tabButtonStyles.blueText
                      : isButtonActive
                      ? tabButtonStyles.activeText
                      : null,
                  ]}
                >
                  {item.description}
                </Text>
              </View>
            </View>
            {item?.status || item?.count ? (
              <View
                style={[
                  tabButtonStyles.holderStatus,
                  (item?.count ? item?.count : 0) > 0 &&
                    tabButtonStyles.activeHolderStatus,
                  item.status === "Active" && tabButtonStyles.activeGreenHolder,
                ]}
              >
                <Text
                  style={[
                    tabButtonStyles.statusText,
                    item.status === "Active" && tabButtonStyles.activeGreenText,
                  ]}
                >
                  {item?.status ? item?.status : repairCounts[item?.value]}
                </Text>
              </View>
            ) : isBlueButton ? (
              <View style={tabButtonStyles.addNew}>
                <AddNew color={"#3074D3"} />
              </View>
            ) : item.name === "Preventive Maintenance" ? (
              <LineChart />
            ) : null}
          </>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default TabButton;
