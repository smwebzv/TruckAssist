import React from "react";
import { FlatList } from "react-native";
import TabButton from "../../../../components/TabButton/TabButton";
import * as Animatable from "react-native-animatable";
import { fuelList } from "../../../../helpers/fuel-list-data";

interface IProps {
  setTabIndx: (e: number) => void;
}

const FirstTab = ({ setTabIndx }: IProps) => {
  return (
    <Animatable.View animation="slideInLeft" duration={200}>
      <FlatList
        data={fuelList}
        renderItem={({ item, index }) => (
          <TabButton
            setTabIndx={setTabIndx}
            item={item}
            index={index}
            page={"fuel-screen"}
          />
        )}
        scrollEnabled={false}
      />
    </Animatable.View>
  );
};

export default FirstTab;
