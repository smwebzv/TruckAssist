import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export const firstHeight = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(`${e}%`, { duration: 250 }),
    };
  });
  return style;
};

export const secondHeight = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(`${e}%`, { duration: 250 }),
    };
  });
  return style;
};

export const firstWidth = (e: number, color?: string) => {
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(`${e}%`, { duration: 250 }),
      backgroundColor: color,
      height: 18,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 4,
    };
  });
  return style;
};

export const secondWidth = (e: number, color?: string) => {
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(`${e}%`, { duration: 250 }),
      backgroundColor: color,
      height: 18,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    };
  });
  return style;
};

export const firstDot = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(`${e}%`, { duration: 250 }),
    };
  });
  return style;
};

export const secondDot = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(`${e}%`, { duration: 250 }),
    };
  });
  return style;
};

export const firstDotWidth = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(`${e}%`, { duration: 250 }),
      height: 22,
      flexDirection: "column-reverse",
      top: 6,
      left: 0,
      alignItems: "flex-end",
    };
  });
  return style;
};

export const secondDotWidth = (e: number) => {
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(`${e}%`, { duration: 250 }),
      height: 22,
      flexDirection: "column-reverse",
      top: 6,
      left: 0,
      alignItems: "flex-end",
    };
  });
  return style;
};
