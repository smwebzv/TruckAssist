import React from "react";
import { Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import DashboardSlider from "../../../../components/dispatchComponents/DashboardSlider/DashboardSlider";
import { styles } from "./DashboardInfo.style";
import DeviceInfo from "react-native-device-info";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../../../helpers/deviceModels";
import { RootState } from "../../../../redux/store/store";

const DashboardInfo = () => {
  const data = useSelector((state: RootState) => state.auth.userData);
  const insets = useSafeAreaInsets();
  const model = DeviceInfo.getModel();
  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);

  let firstName = data?.firstName ? data?.firstName : "";
  let lastName = data?.lastName ? data?.lastName : "";
  let newFirstName = firstName?.replace(/\s+/g, "");
  let newLastName = lastName?.replace(/\s+/g, "");

  return (
    <View
      style={[
        styles.mainHolder,
        {
          paddingTop: insets.top,
          height: 302 + insets.top,
          maxHeight: 302 + insets.top,
          borderBottomLeftRadius: deviceInfo?.corner,
          borderBottomRightRadius: deviceInfo?.corner,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={{ width: 28 }} />
        <Text style={styles.title}>{data?.companyName}</Text>
        <View style={styles.initialsHolder}>
          <Text style={styles.initials}>
            {newFirstName[0] + newLastName[0]}
          </Text>
        </View>
      </View>
      <DashboardSlider />
    </View>
  );
};

export default DashboardInfo;
