import React from "react";
import { ImageBackground, View } from "react-native";

interface IProps {
}

const EmptySceletonList = ({ }: IProps) => {
  const image = require("../../assets/images/sceleton.png");

  return (
    <>
    {Array.from({ length: 15 }, (_, index) => (
     <View key={index} style={{ flex: 1}}>
     <ImageBackground
       resizeMode="stretch"
       style={{ height:75}}
       source={image}
     />
   </View>
    ))}
    </>
  );
};

export default EmptySceletonList;
