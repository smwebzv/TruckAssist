import * as React from "react";
import { Dimensions, Text } from "react-native";
const dimensions = Dimensions.get("screen");

interface Iprops {
  text: string;
  search: string;
  style: any;
  holderStyle: any;
  secondaryStyle?: any;
  page?: string;
  isDropdown?: boolean;
}

const HighlightedText = ({
  text,
  search,
  style,
  holderStyle,
  secondaryStyle,
  page,
  isDropdown,
}: Iprops) => {
  const parts = text.split(new RegExp(`(${search})`, "gi"));

  return (
    <Text
      numberOfLines={1}
      style={[
        { flexWrap: "wrap" },
        holderStyle,
        { maxWidth: dimensions.width - (isDropdown ? 120 : 70) },
      ]}
    >
      {parts.map((part, i) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <Text
            key={i}
            numberOfLines={1}
            style={[
              style,
              !isDropdown && { backgroundColor: "#3074D333", color: "#3074D3" },
              page == "load-screen" ? secondaryStyle : null,
            ]}
          >
            {part}
          </Text>
        ) : (
          <Text
            key={i}
            numberOfLines={1}
            style={[
              style,
              page == "load-screen" ? secondaryStyle : null,
            ]}
          >
            {part}
          </Text>
        )
      )}
    </Text>
  );
};

export default HighlightedText;
