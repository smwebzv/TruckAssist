import * as React from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { servicesDropdownStyle } from "./ServicesDropdown.style";
import RepairKey from "../../../../../assets/icons/repairKey.svg";
import Arrow from "../../../../../assets/icons/fullArrowDown.svg";
import colors from "../../../../../helpers/colors";
import { shopMobileServices } from "../../../../../helpers/repair-list-data";
import { useSelector } from "react-redux";
import { useState } from "react";

interface Iprops {}

const ServicesDropdown = ({}: Iprops) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState(new Animated.Value(0));
  const [backgroundColor, setBackgroundColor] = React.useState(
    new Animated.Value(0)
  );
  const selectedRepairShop = useSelector(
    (state: any) => state.repairData.selectedRepairShop
  );

  let typeServices = selectedRepairShop.serviceTypes
    .filter((service) =>
      shopMobileServices.find(
        (dummy) => dummy.name === service.serviceType.name
      )
    )
    .map((item) => item);

  let activeServices = typeServices.filter((item) => item.active);

  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.background, "#fff"],
  });

  const animatedStyles = {
    backgroundColor: backgroundColorInterpolation,
  };

  const openDropdown = () => {
    setActive(!active);
    if (active) {
      Animated.timing(height, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(backgroundColor, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(height, {
        toValue: 102,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[servicesDropdownStyle.mainHolder, animatedStyles]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => openDropdown()}
        style={servicesDropdownStyle.headerHolder}
      >
        <View style={servicesDropdownStyle.header}>
          <RepairKey />
          <Text style={servicesDropdownStyle.title}>
            Shop & Mobile Services
          </Text>
          <View style={servicesDropdownStyle.countCircle}>
            <Text style={servicesDropdownStyle.count}>
              {activeServices.length}
            </Text>
          </View>
        </View>

        <View
          style={[
            servicesDropdownStyle.holderArrow,
            active && { transform: [{ rotateX: "180deg" }] },
          ]}
        >
          <Arrow color={active ? colors.inactiveButton : colors.mediumGrey} />
        </View>
      </TouchableOpacity>

      <Animated.View style={{ height: height, overflow: "hidden" }}>
        <View style={servicesDropdownStyle.holderDropdown}>
          {shopMobileServices.map((i: any, index: number) => (
            <View key={index} style={[servicesDropdownStyle.serviceItem]}>
              <View style={{ transform: [{ scale: 1.4 }] }}>
                {typeServices[index]?.active ? i.icon : i.iconInactive}
              </View>
              <Text
                style={[
                  servicesDropdownStyle.serviceName,
                  !typeServices[index]?.active &&
                    servicesDropdownStyle.inactiveService,
                ]}
              >
                {i.name}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default ServicesDropdown;
