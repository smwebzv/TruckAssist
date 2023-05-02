import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../helpers/colors";
import fonts from "../../../helpers/fonts";
import { toggleGpsActivation } from "../../../redux/gps/gpsSlice";
import { RootState } from "../../../redux/store/store";
import { styles } from "./DispatchStatus.style";

interface IProps {
  name: string;
  status: boolean;
  time: string;
}

const DispatchStatus = ({ name, status, time }: IProps) => {
  const { isActive } = useSelector((state: RootState) => state.gpsData);
  const dispatch = useDispatch();

  const changeAvtiveStatus = () => {
    dispatch(toggleGpsActivation(!isActive));
  };

  return (
    <View style={styles.mainHolder}>
      <View>
        <Text style={styles.title}>Dispatch Status</Text>
        <TouchableOpacity
          /* onPress={() => changeAvtiveStatus()} */ activeOpacity={1}
        >
          <Text style={styles.status}>{isActive ? "ON" : "OFF"}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.title, { fontFamily: fonts.montserratBold }]}>
          {name}
        </Text>
        <Text
          style={[
            styles.status,
            { color: colors.darkerGrey, fontFamily: fonts.montserrat },
          ]}
        >
          {time} ago
        </Text>
      </View>
    </View>
  );
};
export default DispatchStatus;
