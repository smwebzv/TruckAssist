import * as React from "react";
import { FlatList } from "react-native";
import { repairList } from "../../../../helpers/repair-list-data";
import { styles } from "./MenuScreen.style";
import PageTitle from "../../../../components/PageTittle/PageTittle";
import TabButton from "../../../../components/TabButton/TabButton";
import * as Animatable from "react-native-animatable";

interface Iprops {
  setTab: (tab: number) => void;
}

const MenuScreen = ({ setTab }: Iprops) => {
  return (
    <Animatable.View
      animation="slideInLeft"
      duration={350}
      style={[styles.mainHolder]}
    >
      <FlatList
        data={repairList}
        renderItem={({ item, index }) => (
          <TabButton
            setTabIndx={setTab}
            item={item}
            index={index}
            page={"repair-screen"}
          />
        )}
        scrollEnabled={false}
      />
    </Animatable.View>
  );
};

export default MenuScreen;
