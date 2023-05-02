import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { shortcutButtonStyles } from "./ShortcutButton.style";
import Filter from "../../assets/icons/filter.svg";
import Map from "../../assets/icons/map.svg";
import Sort from "../../assets/icons/sort.svg";
import SortIconTranslated from "../../assets/icons/sortModalIconTranslated.svg";
import SortArrow from "../../assets/icons/sortByArrow.svg";
import Info from "../../assets/icons/info.svg";
import * as Animatable from "react-native-animatable";
import colors from "../../helpers/colors";
import { Shadow } from "react-native-shadow-2";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

interface IProps {
  name: string;
  setTab?: (tab: number) => void;
  value?: number;
  active?: boolean;
  mapPage?: boolean;
  tab?: number;
  handleMapList?: boolean;
  count?: number;
  total?: number;
}

const ShortcutButton = ({
  name,
  setTab,
  value,
  active,
  mapPage,
  tab,
  handleMapList,
  count,
  total,
}: IProps) => {
  const { setSort } = useSelector((state: RootState) => state.repairData);
  const isDesc = setSort?.includes("Desc");

  const setType = () => {
    switch (setSort) {
      case "dateAddedAsc":
        return "Sort by";
      case "nameAsc":
        return "Name";
      case "ratingAsc":
        return "Rating";
      case "lastUsedDateAsc":
        return "Used";
      case "costAsc":
        return "Cost";
      default:
        return "Sort by";
    }
  };

  return (
    <Animatable.View
      animation="flipInX"
      duration={100}
      style={[
        ["Truck", "Sort by"].includes(name) && { flex: 1, marginRight: 8 },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setTab && value && setTab(value)}
        style={[["Truck", "Sort by"].includes(name) && { flex: 1 }]}
      >
        <Shadow
          style={[
            shortcutButtonStyles.buttonBox,
            { paddingLeft: count ? 8 : 16 },
            ["Truck", "Sort by"].includes(name) && { width: "100%" },
            mapPage &&
              tab === 3 &&
              !handleMapList &&
              shortcutButtonStyles.whiteBackground,
            active &&
              (value == 3 && name !== "Trailer"
                ? shortcutButtonStyles.activeBlue
                : shortcutButtonStyles.activeDarkGrey),
            ["Trailer"].includes(name) && { marginRight: 0 },
          ]}
          startColor="#00000012"
          distance={
            mapPage && tab === 3 && !handleMapList && name !== "Map" ? 5 : 0
          }
        >
          {name == "Filter" ? (
            <Filter color={active ? colors.greyOpacity : colors.mediumGrey} />
          ) : name == "Map" ? (
            <Map color={active ? "#ffffffB3" : colors.mediumGrey} />
          ) : name == "Sort by" ? (
            isDesc ? (
              <SortIconTranslated />
            ) : (
              <Sort />
            )
          ) : ["Info", "InfoNoneText"].includes(name) ? (
            <Info color={active ? colors.inactiveButton : colors.mediumGrey} />
          ) : null}

          {count && (
            <View
              style={[
                shortcutButtonStyles.countCircle,
                active && shortcutButtonStyles.activeCountCircle,
              ]}
            >
              <Text
                style={[
                  shortcutButtonStyles.count,
                  active && shortcutButtonStyles.activeCount,
                ]}
              >
                {count}
              </Text>
            </View>
          )}

          {name !== "InfoNoneText" && (
            <Text
              style={[
                shortcutButtonStyles.shortcutName,
                active && shortcutButtonStyles.whiteName,
                { marginLeft: count ? 4 : 8 },
              ]}
            >
              {name === "Sort by" ? setType() : name}
            </Text>
          )}

          {total && name === "Truck" && active && (
            <Text style={[shortcutButtonStyles.total]}> • {total}</Text>
          )}

          {name == "Sort by" ||
            (name === "Truck" && active && (
              <View
                style={[
                  { alignItems: "flex-end", flex: 1 },
                  name === "Truck" && shortcutButtonStyles.arrowAbsolute,
                ]}
              >
                <SortArrow
                  color={name === "Truck" ? "#fff" : colors.mediumGrey}
                />
              </View>
            ))}
        </Shadow>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ShortcutButton;
