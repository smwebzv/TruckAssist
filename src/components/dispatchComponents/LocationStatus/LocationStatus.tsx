import React from "react";
import { Text, View } from "react-native";
import { styles } from "./LocationStatus.style";

interface IProps {
  location?: string;
  time?: string;
}

const LocationStatus = ({ location, time }: IProps) => {
  return (
    <View style={styles.mainHolder}>
      <Text style={styles.title}>Last Location</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={[styles.title, { fontSize: 14, lineHeight: 18 }]}>
        {time}
      </Text>
    </View>
  );
};
export default LocationStatus;
