import React from "react";
import { Text, View } from "react-native";
import colors from "../../../helpers/colors";
import { styles } from "./VehicleStatus.style";
import Direction from "../../../assets/icons/direction.svg";
import fonts from "../../../helpers/fonts";

interface IProps {
  status: string;
  time: string;
  speed: string;
}

const VehicleStatus = ({ status, time, speed }: IProps) => {
  return (
    <View style={styles.mainHolder}>
      <Text style={styles.title}>Vehicle Status</Text>
      <Text style={styles.location}>{status}</Text>
      <Text style={[styles.title, { color: colors.darkerGrey }]}>{time}</Text>
      <View style={styles.directionHolder}>
        <Direction />
        <View style={{ marginLeft: 6 }}>
          <Text style={styles.title}>Speed</Text>
          <Text
            style={[
              styles.title,
              { color: colors.darkerGrey, fontFamily: fonts.montserratBold },
            ]}
          >
            {speed}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default VehicleStatus;
