import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { buttonBackStyles } from "./BackButton.style";
import BackArrow from "../../assets/icons/backArrow.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Cancel from "../../assets/icons/searchInputCancel.svg";
import Options from "../../assets/icons/threeDots.svg";
import Star from "../../assets/icons/star.svg";
import { Shadow } from "react-native-shadow-2";
import colors from "../../helpers/colors";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react-native";
import {
  setLoader,
  setPageIndex,
  setRepairShopList,
  setRepairShopSearch,
  setSearchInputFocused,
} from "../../redux/repair/repairSlice";
import { TouchableRipple } from "react-native-paper";
import { getRepairShopList } from "../../api/app/repairShop";
import { RootState } from "../../redux/store/store";
let searchTimeout: any = null;

interface IProps {
  search: boolean;
  value?: string;
  count?: number;
  findedCount?: number;
  setTab: (tab: number) => void;
  mapPage?: boolean;
  shadow?: boolean;
  tab?: number;
  title?: string;
  repairShopName?: string;
}

const BackButton = ({
  search,
  value,
  count,
  findedCount,
  setTab,
  mapPage,
  shadow,
  tab,
  title,
  repairShopName,
}: IProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    serviceFilter,
    searchValue,
    setSort,
    isSearchInputFocused,
    selectedRepairShop,
    loader,
  } = useSelector((state: RootState) => state.repairData);
  let shadowDistance = mapPage || shadow ? 5 : 0;
  const [focused, setFocused] = React.useState(false);
  const [countt, setCountt] = React.useState(1);
  const isNumOfShopsSame = count === findedCount ? true : false;

  const cancelSearch = () => {
    dispatch(setSearchInputFocused(false));
    setFocused(false);
  };

  const focusSearch = () => {
    dispatch(setSearchInputFocused(true));
    setFocused(true);
  };

  /* React.useEffect(() => {
    console.log("back button count show distance")
    const intervalId = setInterval(() => {
      if (countt < 5 && shadowDistance === 5) {
        setCountt(countt + 1);
      } else if (countt > 0 && shadowDistance === 0) {
        setCountt(countt - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1);

    return () => clearInterval(intervalId);
  }, [countt, shadowDistance]); */

  const handleOnClick = () => {
    if (tab == 0) {
      navigation.navigate("dashboard-screen");
    } else if (tab === 2) {
      setTab(1);
    } else {
      setTab(0);
    }
  };

  const handleSearchInput = (e) => {
    dispatch(setRepairShopSearch(e));
    dispatch(setRepairShopList([]));
    dispatch(setPageIndex(1));
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (e.length > 0 && e.length < 4) return;
    searchTimeout = setTimeout(() => {
      getRepairShopList([], serviceFilter, e, setSort, 1)(dispatch);
      dispatch(setLoader(true));
      dispatch(setRepairShopSearch(e));
    }, 1000);
  };

  const clearInput = () => {
    dispatch(setRepairShopSearch(""));
  };

  const Back = () => {
    return (
      <View style={buttonBackStyles.backButton}>
        <TouchableRipple
          rippleColor="#CCCCCC"
          onPress={() => handleOnClick()}
          style={buttonBackStyles.backButton}
        >
          <BackArrow color="#919191" />
        </TouchableRipple>
      </View>
    );
  };

  const [titleOpacity, setTitleOpacity] = React.useState(new Animated.Value(1));
  const [repairShopNameOpacity, setRepairShopNameOpacity] = React.useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    if (repairShopName) {
      Animated.timing(titleOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
      Animated.timing(repairShopNameOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(repairShopNameOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [repairShopName]);

  return (
    <Animated.View style={buttonBackStyles.mainHolder}>
      <Shadow
        startColor="#00000012"
        distance={countt}
        style={[
          buttonBackStyles.holderBackArrow,
          search && buttonBackStyles.holderWithSearch,
          shadowDistance === 0 &&
            search && { backgroundColor: colors.background },
          focused && { backgroundColor: "#1D1D1D" },
          title === "Repair Shop Detail" && {
            backgroundColor: colors.background,
          },
          { elevation: title === "Repair Shop Detail" ? 0 : 1 },
        ]}
      >
        {search ? (
          <View style={{ flexDirection: "row" }}>
            {isSearchInputFocused ? (
              <TouchableOpacity
                onPress={() => focusSearch()}
                style={buttonBackStyles.backButton}
              >
                <SearchIcon
                  color={
                    !isSearchInputFocused && !isNumOfShopsSame && searchValue
                      ? colors.primary
                      : "#919191"
                  }
                />
              </TouchableOpacity>
            ) : (
              <Back />
            )}

            <>
              {!isSearchInputFocused && (
                <View style={[buttonBackStyles.holderValueAndCount]}>
                  <Text style={buttonBackStyles.searchText}>{value}</Text>
                  <View
                    style={[
                      buttonBackStyles.countBox,
                      !isNumOfShopsSame &&
                        searchValue && { backgroundColor: colors.primary },
                    ]}
                  >
                    <Text style={buttonBackStyles.countValue}>
                      {!isNumOfShopsSame && searchValue
                        ? findedCount + "/" + count
                        : count}
                    </Text>
                  </View>
                </View>
              )}
              <TextInput
                value={!isSearchInputFocused ? "" : searchValue}
                style={[buttonBackStyles.textInput]}
                placeholder={isSearchInputFocused ? "Find Repair Shop" : ""}
                placeholderTextColor={"#6C6C6C"}
                cursorColor={"#fff"}
                numberOfLines={1}
                onChangeText={(e) => handleSearchInput(e)}
                onPressIn={() => {
                  focusSearch();
                }}
                onBlur={() => {
                  cancelSearch();
                }}
              />
              <View>
                {isSearchInputFocused &&
                  !isNumOfShopsSame &&
                  searchValue &&
                  !loader && (
                    <View style={buttonBackStyles.infoSearchResult}>
                      <Text style={buttonBackStyles.infoSearchText}>
                        {findedCount} Results
                      </Text>
                    </View>
                  )}

                <TouchableOpacity
                  onPress={() =>
                    isSearchInputFocused ? clearInput() : focusSearch()
                  }
                  style={buttonBackStyles.backButton}
                >
                  {loader && searchValue ? (
                    <Lottie
                      style={{ width: 18, height: 18 }}
                      source={require("../../assets/gifs/searchLoader.json")}
                      autoPlay
                      loop
                    />
                  ) : isSearchInputFocused ? (
                    <Cancel />
                  ) : (
                    <SearchIcon
                      color={
                        !isSearchInputFocused &&
                        !isNumOfShopsSame &&
                        searchValue
                          ? colors.primary
                          : "#919191"
                      }
                    />
                  )}
                </TouchableOpacity>
              </View>
            </>
          </View>
        ) : (
          <Back />
        )}
      </Shadow>

      {title !== "" && !repairShopName && (
        <Animated.Text
          numberOfLines={1}
          style={[
            buttonBackStyles.title,
            {
              fontSize: title === "Repair Shop Detail" ? 17 : 26,
              opacity: titleOpacity,
            },
          ]}
        >
          {title}
        </Animated.Text>
      )}
      {repairShopName !== "" && (
        <Animated.Text
          numberOfLines={1}
          style={[
            buttonBackStyles.title,
            {
              fontSize: 17,
              opacity: repairShopNameOpacity,
            },
          ]}
        >
          {repairShopName}
        </Animated.Text>
      )}
      {repairShopName && selectedRepairShop?.pinned && (
        <Animated.View
          style={[
            buttonBackStyles.holderStar,
            { opacity: repairShopNameOpacity },
          ]}
        >
          <Star color={colors.primary} />
        </Animated.View>
      )}

      {title === "Repair Shop Detail" && (
        <TouchableOpacity
          style={[buttonBackStyles.holderBackArrow, buttonBackStyles.options]}
        >
          <Options />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default BackButton;
