import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "../../../../components/ListItem/ListItem";
import ShortcutButton from "../../../../components/ShortcutButton/ShortcutButton";
import { locationList } from "../../../../helpers/load-list-data";
import { secondTabStyles } from "./SecondTab.style";
import * as Animatable from "react-native-animatable";

const SecondTab = () => {
  return (
    <Animatable.View animation="slideInRight" duration={200}>
      <View style={secondTabStyles.holderShortcutsButtons}>
        <ShortcutButton name="Filter" />
        <ShortcutButton name="Sort by" />
      </View>

      <View style={secondTabStyles.holderList}>
        <FlatList
          data={locationList}
          renderItem={({ item, index }) => (
            <ListItem key={index} item={item} page="load-screen" />
          )}
          scrollEnabled={false}
        />
      </View>
    </Animatable.View>
  );
};

export default SecondTab;
