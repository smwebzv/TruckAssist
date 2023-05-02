import * as React from "react";
import { Animated, View } from "react-native";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
import { styles } from "./Header.style";
import SortArrow from "../../../assets/icons/sortByArrow.svg";
import Arrow from "../../../assets/icons/modalArrowIcon.svg";
import { TouchableRipple } from "react-native-paper";
import LengthCountCircle from "../../InfoSelectedBar/LengthCountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

interface Iprops {
  name: string;
  handleOnPress: () => void;
  expanded: number;
  index: number;
  icon?: JSX.Element;
  buttonHeight: Animated.Value;
  textSize: Animated.Value;
  textAnimatedStyles: any;
  listTab: number;
}

const Header = ({
  name,
  handleOnPress,
  expanded,
  index,
  icon,
  buttonHeight,
  textSize,
  textAnimatedStyles,
  listTab
}: Iprops) => {
  const { selectedServices } = useSelector(
    (state: RootState) => state.filterModal
  );
  return (
    <TouchableRipple
      onPress={() => handleOnPress()}
      rippleColor={expanded !== -1 ? colors.darkGrey : "#EEEEEE"}
    >
      <Animated.View
        style={[
          styles.headerHolder,
          {
            height: buttonHeight,
            paddingHorizontal: 12,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {
            (selectedServices?.length && index == 2 && expanded == -1) ? 
            <LengthCountCircle
            num={selectedServices?.length ? selectedServices?.length : 0}
            background={"#fff"}
            textColor={colors.primary}
            />
            :
            <View style={[(listTab !== 1 && index == 1) && { transform:[ { scale:1.8}] }]}>{(index !== expanded && expanded !== -1) ? null : icon}</View>
          }
          <Animated.Text
            style={[
              {
                fontSize: textSize,
                fontFamily:
                  expanded !== -1 || (index == 1 && listTab !== 1)
                    ? fonts.montserratBold
                    : fonts.montserratMedium,
                color: colors.darkGrey,
                marginLeft: 8,
              },
              textAnimatedStyles,
            ]}
          >
            {name}
          </Animated.Text>
          {
            (selectedServices?.length && index == 2 && expanded !== -1) ?
            <LengthCountCircle
            num={selectedServices?.length ? selectedServices?.length : 0}
            background={"#fff"}
            textColor={colors.darkGrey}
            marginLeft={4}
            />
            :
            null
          }
          
        </View>
        {index !== expanded && expanded !== -1
          ? null
          : index !== 3 && (
              <View>
                {expanded !== -1 ? (
                  <Arrow />
                ) : index == 2 ? listTab !== 1 ? <SortArrow color={"#919191"}/> : null : (
                  <SortArrow color={"#919191"}/>
                )}
              </View>
            )}
      </Animated.View> 
    </TouchableRipple>
   
  );
};

export default Header;