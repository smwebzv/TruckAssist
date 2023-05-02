import React from "react";
import { Animated, Dimensions, Text, View } from "react-native";
import { style } from "./DropDownCart.style";
import PhoneCall from "../../../assets/icons/grayPhoneIcon.svg";
import MailIcon from "../../../assets/icons/grayMailIcon.svg";
import LocationIcon from "../../../assets/icons/repairLocationIcon.svg";
import { serviceType } from "../../../helpers/repair-list-data";
import DividingLine from "../../DividingLine/DividingLine";
import colors from "../../../helpers/colors";
import { IShopListProps } from "../../../helpers/stateTypes/repairTypes";
import * as Animatable from "react-native-animatable";
import DropDownItem from "../DropDownItem/DropDownItem";
const dimensions = Dimensions.get("screen");

interface IProps {
  item: IShopListProps;
  light: boolean;
  opacity: Animated.Value;
}

const DropDownCart = ({ item, light, opacity }: IProps) => {
  let date = new Date(item?.lastVisited).getTime();
  let today = new Date().getTime();
  let msDay = 24 * 60 * 60 * 5000;

  let days = Math.floor((today - date) / msDay);

  return (
    <Animated.View style={{ opacity: opacity }}>
      <DividingLine
        lineWidth={dimensions.width - 16}
        lineHeight={2}
        background={light ? "#F7F7F7" : "#E5E5E5"}
        marginBottom={8}
      />
      <View style={{ paddingHorizontal: 12 }}>
        <DropDownItem
          name={item?.phone}
          holderStyle={style.holderItem}
          textStyle={[
            style.time,
            { paddingLeft: 6 },
            light && { color: colors.darkGrey },
          ]}
          icon={<PhoneCall />}
          duration={100}
        />
        {item.email && (
          <DropDownItem
            name={item?.email}
            holderStyle={style.holderItem}
            textStyle={[
              style.time,
              { paddingLeft: 6 },
              light && { color: colors.darkGrey },
            ]}
            icon={<MailIcon />}
            duration={200}
          />
        )}
        <DropDownItem
          name={item?.address?.streetNumber + " " + item?.address?.street}
          holderStyle={[style.holderItem, { alignItems: "flex-start" }]}
          textStyle={[
            style.time,
            { marginLeft: 6 },
            light && { color: colors.darkGrey },
          ]}
          secondTextStyle={[
            style.time,
            { marginLeft: 6 },
            light && { color: colors.darkGrey },
          ]}
          secondName={
            item?.address?.city +
            ", " +
            item?.address?.stateShortName +
            " " +
            item?.address?.zipCode +
            ", " +
            item?.address?.country
          }
          icon={<LocationIcon />}
          duration={300}
        />
      </View>
      <DividingLine
        lineWidth={dimensions.width - 16}
        lineHeight={2}
        background={light ? "#F7F7F7" : "#E5E5E5"}
        marginBottom={8}
      />
      <View style={{ paddingHorizontal: 12 }}>
        {item?.serviceTypes && (
          <View style={style.holderItem}>
            <View style={{ flex: 1, flexDirection: "row", paddingLeft: 4 }}>
              {serviceType.map((i: any, index: number) => (
                <Animatable.View
                  key={index}
                  animation="fadeInLeft"
                  duration={50 * (index + 1)}
                  style={{ marginRight: 13, transform: [{ scale: 1.4 }] }}
                >
                  {item?.serviceTypes[index]?.active ? i.iconActive : i.icon}
                </Animatable.View>
              ))}
            </View>
          </View>
        )}
        <DropDownItem
          name={"Distance"}
          holderStyle={style.holderItem}
          textStyle={[style.time, light && { color: colors.darkGrey }]}
          secondTextStyle={[
            style.time,
            style.bold,
            light && { color: colors.mediumGrey },
          ]}
          dot={true}
          secondName={`${item?.distance} mi`}
          duration={200}
        />
        {item.lastVisited ? (
          <>
            <DropDownItem
              name={"Last used"}
              holderStyle={[style.holderItem, { alignItems: "flex-start" }]}
              textStyle={[style.time, light && { color: colors.darkGrey }]}
              secondTextStyle={[
                style.time,
                style.bold,
                light && { color: colors.mediumGrey },
              ]}
              dot={true}
              secondName={`${days} days ago`}
              duration={300}
            />
            <DropDownItem
              name={"Total visits"}
              holderStyle={[style.holderItem, { alignItems: "flex-start" }]}
              textStyle={[style.time, light && { color: colors.darkGrey }]}
              secondTextStyle={[
                style.time,
                style.bold,
                light && { color: colors.mediumGrey },
              ]}
              dot={true}
              secondName={item?.timesVisitedByCompany}
              duration={400}
            />
            <DropDownItem
              name={"Total cost"}
              holderStyle={[style.holderItem, { alignItems: "flex-start" }]}
              textStyle={[style.time, light && { color: colors.darkGrey }]}
              secondTextStyle={[
                style.time,
                style.bold,
                light && { color: colors.mediumGrey },
              ]}
              dot={true}
              secondName={`$${item?.cost?.toLocaleString()}`}
              duration={500}
            />
          </>
        ) : (
          <DropDownItem
            name={"Never used"}
            holderStyle={style.holderItem}
            textStyle={[style.time, { color: colors.mediumGrey }]}
            duration={300}
          />
        )}
      </View>
    </Animated.View>
  );
};

export default DropDownCart;
