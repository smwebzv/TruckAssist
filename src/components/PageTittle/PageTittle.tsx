import React from "react";
import {  Text, View } from "react-native";
import fonts from "../../helpers/fonts";
import { pageTitleStyles } from "./PageTittle.style";
import Warning from "../../assets/icons/warning.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Repair from "../../assets/images/repairImage.svg";
import Load from "../../assets/images/loadImage.svg";
import Fuel from "../../assets/images/fuelImage.svg";

interface IProps {
  title?: string;
  text?: string;
  text2?: string;
  fontSizeTitle?: number;
  textAlignCenter?: boolean;
  email?: string;
  secondTitle?: string;
  titleMarginBottom?: number;
}

const PageTitle = ({
  title,
  text,
  fontSizeTitle,
  textAlignCenter,
  email,
  secondTitle,
  text2,
  titleMarginBottom,
}: IProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        pageTitleStyles.holderTittleAndText,
        ["Repair", "Load", "Fuel"].includes(title) && {
          paddingTop: insets.top + 46,
          paddingBottom: 26,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={["Repair", "Load", "Fuel"].includes(title) && { flex: 1 }}>
        {title && (
          <Text
            style={[
              pageTitleStyles.title,
              { fontSize: fontSizeTitle ? fontSizeTitle : 26 },
              {
                marginBottom: titleMarginBottom
                  ? titleMarginBottom
                  : fontSizeTitle
                  ? 20
                  : 12,
              },
              { textAlign: textAlignCenter ? "center" : "left" },
            ]}
          >
            {title}
          </Text>
        )}
        {secondTitle && (
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Warning />
            <Text style={pageTitleStyles.secondTitle}>{secondTitle}</Text>
          </View>
        )}
        {text && (
          <Text
            style={[
              pageTitleStyles.text,
              ["Repair", "Load", "Fuel"].includes(title) &&
                pageTitleStyles.repairPage,
              {
                textAlign: textAlignCenter ? "center" : "left",
                marginTop: secondTitle && 22,
              },
            ]}
          >
            {text}
          </Text>
        )}
        {text2 && (
          <Text
            style={[
              pageTitleStyles.text,
              { textAlign: textAlignCenter ? "center" : "left", marginTop: 22 },
            ]}
          >
            {text2}
          </Text>
        )}
        {email && (
          <Text
            style={[
              pageTitleStyles.text,
              {
                textAlign: textAlignCenter ? "center" : "left",
                color: "#3074D3",
                fontFamily: fonts.montserratBold,
              },
            ]}
          >
            {email}
          </Text>
        )}
      </View>
      {title === "Repair" && <Repair />}
      {title === "Load" && <Load />}
      {title === "Fuel" && <Fuel />}
    </View>
  );
};

export default PageTitle;
