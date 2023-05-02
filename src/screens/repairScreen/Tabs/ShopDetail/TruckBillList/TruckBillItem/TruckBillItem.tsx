import * as React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import DividingLine from "../../../../../../components/DividingLine/DividingLine";
import fonts from "../../../../../../helpers/fonts";
import { truckBillItemStyle } from "./TruckBillItem.style";
import Check from "../../../../../../assets/icons/checkBills.svg"
const dimensions = Dimensions.get("screen");

interface Iprops {
  item: any;
  list?: boolean;
  index: number;
}

const TruckBillMemoItem = ({ item, list, index }: Iprops) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        truckBillItemStyle.itemHolder,
        list && { paddingHorizontal: 12 },
        list && index == 0 && { paddingTop: 0 },
      ]}
    >
      <>
        <DividingLine
          lineWidth={dimensions.width - 16}
          lineHeight={list ? 2 : index == 0 ? 0 : 2}
          background={"#F7F7F7"}
          marginBottom={8}
        />
        <View
          style={[
            truckBillItemStyle.header,
            { marginBottom: 4, justifyContent: "space-between" },
          ]}
        >
          <View style={truckBillItemStyle.header}>
            <Text style={truckBillItemStyle.name}>{item.name} </Text>
            <Text style={truckBillItemStyle.date}>• {item.date}</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            {
              item.paid && <Check/>
            }
            <Text style={truckBillItemStyle.price}>{item.price}</Text>
          </View>
          
        </View>
        {list && (
          <View style={{ marginBottom: 4 }}>
            <Text style={truckBillItemStyle.shopName}>
              {item.shopName}
            </Text>
          </View>
        )}
        <View style={[truckBillItemStyle.header, { flexWrap: "wrap" }]}>
          <Text
            style={[
              truckBillItemStyle.itemsText,
              { fontFamily: fonts.montserratBold },
            ]}
          >
            {item.items.length} Items |{" "}
          </Text>
          {item.items.map((item: string, index: number) => (
            <Text
              style={[truckBillItemStyle.itemsText, { marginLeft: 0 }]}
              key={index}
            >
              {item} •{" "}
            </Text>
          ))}
        </View>
      </>
    </TouchableOpacity>
  );
};

export const TruckBillItem = React.memo(TruckBillMemoItem);
