import React, { useEffect, useState } from "react";
import { View, Animated, Dimensions } from "react-native";
import colors from "../../helpers/colors";
import List from "./List/List";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import DividingLine from "../DividingLine/DividingLine";
import { toggleBlur } from "../../redux/blurView/blurViewSlice";
import { RootState } from "../../redux/store/store";
import { IFilterDataProps } from "../../helpers/stateTypes/filterModalTypes";
import { setIsButtonForCloseActive } from "../../redux/filterModal/filterModalSlice";
const dimensions = Dimensions.get("screen");

interface IProps {
  name: string;
  buttonWidth: number;
  icon?: JSX.Element;
  index: number;
  tabScreen: number;
  expanded: number;
  setExpanded: (expanded: number) => void;
  changeTabScreen: (tab: number) => void;
  listTab: number;
  type:string;
  dropdownData?: IFilterDataProps [];
}

const ExpandButton = ({
  name,
  buttonWidth,
  icon,
  index,
  tabScreen,
  expanded,
  setExpanded,
  changeTabScreen,
  listTab,
  type,
  dropdownData
}: IProps) => {
  const dispatch = useDispatch();
  const animationRef = React.useRef(null);
  const { isSearchInputFocused, serviceFilter } = useSelector(
    (state: RootState) => state.repairData
  );
  const { isButtonForCloseActive } = useSelector(
    (state: RootState) => state.filterModal
  );
  const [filterTab, setFilterTab] = React.useState(-1);
  const [width, setWidth] = useState(new Animated.Value(buttonWidth));
  const [backgroundColor, setBackgroundColor] = useState(new Animated.Value(0));
  const [textColor, setTextColor] = useState(new Animated.Value(0));
  const [textSize, setTextSize] = useState(new Animated.Value(14));
  const [buttonHeight, setButtonHeight] = useState(new Animated.Value(34));
  const [lineWidth, setLineWidth] = useState(new Animated.Value(0));
  const [lineHeight, setLineHeight] = useState(new Animated.Value(0));
  const expanendWidth = dimensions.width - 24;
  const line = dimensions.width - 40;
  const buttonColor =
    (type == "map" && tabScreen == 3) || (serviceFilter && type == "filter")
      ? colors.primary
      : (listTab !== 1 && ["truck", "trailer"].includes(type)) ? colors.darkerGrey : colors.inactiveButton;
  const buttonTextColor =
    (type == "map" && tabScreen == 3) || (serviceFilter && type == "filter")
      ? "#fff"
      : (listTab !== 1 && ["truck", "trailer"].includes(type)) ? "#fff" : colors.darkerGrey;

  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [buttonColor, "#2F2F2F"],
  });

  const textColorInterpolation = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: [buttonTextColor, "#ffffff"],
  });

  const animatedStyles = {
    backgroundColor: backgroundColorInterpolation,
  };

  const textAnimatedStyles = {
    color: textColorInterpolation,
  };

  const expand = () => {
    setExpanded(index);
    dispatch(toggleBlur(true));
    Animated.timing(width, {
      toValue: expanendWidth,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(textColor, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(textSize, {
      toValue: 17,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(buttonHeight, {
      toValue: 42,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(lineWidth, {
      toValue: line,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(lineHeight, {
      toValue: 2,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    setExpanded(-1);
    setFilterTab(-1);
    dispatch(toggleBlur(false));
    dispatch(setIsButtonForCloseActive(false));
    Animated.timing(width, {
      toValue: buttonWidth,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(backgroundColor, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(textColor, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(textSize, {
      toValue: 14,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(buttonHeight, {
      toValue: 34,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(lineWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(lineHeight, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    if (index !== expanded && expanded !== -1) {
      Animated.timing(width, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else if (index == expanded) {
      Animated.timing(width, {
        toValue: expanendWidth,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(width, {
        toValue: buttonWidth,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [expanded]);

  useEffect(() => {
    if (isSearchInputFocused) {
      close();
    }
    if(isButtonForCloseActive){
      close();
    }
  }, [isSearchInputFocused, isButtonForCloseActive]);

  const handleOnPress = () => {
    switch (index) {
      case 1:
        return expanded !== -1 ? close() : expand();
      case 2:
        return expanded !== -1 ? close() : expand();
      case 3:
        return listTab !== 1 ? expanded !== -1 ? close() : expand() : changeTabScreen(3);
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        marginHorizontal: index === 2 ? (expanded !== -1 ? 0 : 8) : 0,
      }}
    >
      <Animated.View
        style={[
          {
            width: width,
            justifyContent: "flex-start",
            borderRadius: 16,
            overflow: "hidden",
          },
          expanded == index ? {paddingBottom: 8} : {height: 34},
          animatedStyles,
        ]}
      >
       
        <Header
          name={name}
          handleOnPress={handleOnPress}
          expanded={expanded}
          index={index}
          icon={icon}
          buttonHeight={buttonHeight}
          textSize={textSize}
          textAnimatedStyles={textAnimatedStyles}
          listTab={listTab}
        />
        <DividingLine
          animatedLineWidth={lineWidth}
          animatedLineHeight={lineHeight}
          background={colors.darkGrey}
        />
        <View
          style={{
            paddingHorizontal: 8,
          }}
        >
            <List
              listTab={listTab}
              type={type}
              data={dropdownData}
              setFilterTab={setFilterTab}
              filterTab={filterTab}
              expanded={expanded}
            />
        </View>
      </Animated.View>
    </View>
  );
};

export default ExpandButton;
