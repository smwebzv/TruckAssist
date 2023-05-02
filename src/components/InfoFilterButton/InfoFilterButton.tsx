import React from "react";
import { Text, View } from "react-native";
import fonts from "../../helpers/fonts";
import { styles } from "./InfoFilterButton.style";

interface IProps {
  icon: JSX.Element,
  array: {name: string} []
}

const InfoFilterButton = ({icon, array}: IProps) => {
  return (
    <View style={styles.mainHolder}>
      <View style={{transform:[{scale: 0.6}]}}>{icon}</View>
      <Text style={[styles.text]}>
        {array?.slice(0, 2)?.map((item, indx) =>
        <Text key={indx}>{item.name}{indx == 0 && array.length !== 1 ? ', ' : ''}</Text>
        )}
        {array?.length > 2 ? "..." : ""}
      </Text>
      {
        array.length > 2 ? 
        <Text style={[styles.text, { fontFamily: fonts.montserratBold, marginLeft: 6 }]}>
        {("+" + (array?.length - 2))}
      </Text>
      :
      null
      }
    </View>
  );
};

export default InfoFilterButton;
