import * as React from "react";
import { FlatList, View } from "react-native";
import { IFilterDataProps } from "../../../helpers/stateTypes/filterModalTypes";
import ExpandedListItem from "../ExpandedList/ExpandedListItem";
import ListItem from "../ListItem/ListItem";
import TruckTrailerItem from "../Truck&TrailerItem/TruckTrailerItem";
import { styles } from "./List.style";

interface Iprops {
  listTab: number;
  data: IFilterDataProps[] | undefined;
  type: string;
  setFilterTab: (tab: number) => void;
  filterTab: number;
  expanded: number;
}

const List = ({ data, type, setFilterTab, filterTab, listTab, expanded }: Iprops) => {
  const keyExtractor = React.useCallback((_, index) => index.toString(), []);
  
  return (
    <View
      style={styles.mainHolder}
    >
      <FlatList
          data={data}
          renderItem={({ item, index }) => (
            type == "sort" ?
            <ListItem
              item={item}
              listTab={listTab}
              index={index}
              expanded={expanded}
            />
            :
            ["truck", "trailer"].includes(type) ?
            <TruckTrailerItem item={item} expanded={expanded}/>
            :
            <ExpandedListItem
            item={item}
            index={index}
            setFilterTab={setFilterTab}
            filterTab={filterTab}
            expanded={expanded}/>
          )}
          keyExtractor={keyExtractor}
        />
    </View>
  );
};

export default List;