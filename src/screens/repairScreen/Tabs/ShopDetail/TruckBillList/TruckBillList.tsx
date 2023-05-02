import * as React from "react";
import { Platform, View } from "react-native";
import { truckBillListStyle } from "./TruckBillList.style";
import DeviceInfo from "react-native-device-info";
import {
  getDeviceModelAndroid,
  getDeviceModelIos,
} from "../../../../../helpers/deviceModels";
import { truckBillList } from "../../../../../helpers/repair-list-data";
import TruckBillItem from "./TruckBillItem/TruckBillItem";

interface Iprops {}

const TruckBillList = ({}: Iprops) => {
  const model = DeviceInfo.getModel();
  const deviceInfo =
    Platform.OS === "ios"
      ? getDeviceModelIos(model)
      : getDeviceModelAndroid(model);

  return (
    <View
      style={[
        truckBillListStyle.mainHolder,
        {
          borderTopLeftRadius: deviceInfo?.corner,
          borderTopRightRadius: deviceInfo?.corner,
        },
      ]}
    >
      {truckBillList.map((item, index) => (
        <TruckBillItem key={index} item={item} index={index}/>
      ))}
    </View>
  );
};

export default TruckBillList;
