import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import colors from "../../../../helpers/colors";
import { styles } from "./ServiceList.style";
import fonts from "../../../../helpers/fonts";
import { TouchableRipple } from "react-native-paper";
import { getSvgIcon } from "../../../../helpers/filter-sort-by-data";
import { IFilterDataProps } from "../../../../helpers/stateTypes/filterModalTypes";
import * as Animatable from "react-native-animatable";
const dimensions = Dimensions.get("screen");

interface Iprops {
  item: IFilterDataProps;
  selectUser: (e: number) => void;
}

const ServiceList = ({ item, selectUser }: Iprops) => {
  let serviceButtonWidth = (dimensions.width - 64) / 3;
  let firstTwoButtons = (dimensions.width - 56) / 2;
  

  return (
    <View style={styles.mainHolder}>
      {item.list?.data.map((i, indx) => (
        <Animatable.View key={indx} duration={ 50 * (indx + 1)} animation={'fadeInLeft'}>
        <TouchableRipple
          onPress={() => selectUser(indx)}
          rippleColor={colors.darkerGrey}
          style={[
            styles.button,
            {
              width: indx > 1 ? serviceButtonWidth : firstTwoButtons,
              backgroundColor: i?.checked ? colors.primary : colors.darkGrey,
            },
          ]}
        >
          <>
          <Text
            style={[
              styles.title,
              i?.checked && { fontFamily: fonts.montserratBold },
            ]}
          >
            {i.name}
          </Text>
          <View style={{ transform:[ { scale:1.8}] }}>
            {getSvgIcon(i?.name, i?.checked ? i?.iconActive : i?.icon)}
          </View>
          </>
        </TouchableRipple>
        </Animatable.View>
      ))}
    </View>
  );
};

export default ServiceList;
