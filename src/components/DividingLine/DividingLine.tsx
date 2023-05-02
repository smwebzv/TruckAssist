import React from "react";
import { Animated, Text, View } from "react-native";

interface IProps {
    animatedLineWidth?: any;
    animatedLineHeight?: any;
    lineWidth?: number;
    lineHeight?: number;
    background: string;
    marginTop?: number;
    marginBottom?: number;
}

const DividingLine = ({ animatedLineWidth, animatedLineHeight, lineWidth, lineHeight, background, marginTop, marginBottom  }: IProps) => {

  return (
    <Animated.View
        style={{
        width: lineWidth ? lineWidth : animatedLineWidth,
        height: lineHeight ? lineHeight : animatedLineHeight,
        backgroundColor: background,
        alignSelf: "center",
        borderRadius: 20,
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
    }}
  />
  );
};

export default DividingLine;
