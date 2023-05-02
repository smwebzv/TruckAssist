import React from "react";
import { FlatList } from "react-native";
import TabButton from "../../../../components/TabButton/TabButton";
import { loadList } from "../../../../helpers/load-list-data";
import * as Animatable from "react-native-animatable";

interface IProps {
  setTabIndx: (e: number) => void;
}

const FirstTab = ({ setTabIndx }: IProps) => {
  return (
    <Animatable.View animation="slideInLeft" duration={200}>
      <FlatList
        data={loadList}
        renderItem={({ item, index }) => (
          <TabButton
            setTabIndx={setTabIndx}
            item={item}
            index={index}
            page={"load-screen"}
          />
        )}
        scrollEnabled={false}
      />
    </Animatable.View>
  );
};

export default FirstTab;
