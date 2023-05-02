import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Thumb from "./Slider/Thumb";
import ValueThumb from "./Slider/ValueThumb";
import { styles } from "./RangeSlider.style";
import { Slider } from "@miblanchard/react-native-slider";
import * as Animatable from "react-native-animatable";

interface IProps {
  min: number;
  max: number;
  setRangeValue: (e: RangeProps) => void;
  animation: string;
  duration: number;
}

interface RangeProps {
  min: number;
  max: number;
}

const RangeSliderTest = ({ min, max, setRangeValue, animation, duration }: IProps) => {
  const [drag, setDrag] = React.useState(false);

  const handleValueChange = (lowValue: number[]) => {
    const values = { min: Math.round(lowValue[0]), max: 250 };
    setRangeValue(values);
  };

  return (
    <Animatable.View duration={duration} animation={animation}>
      <View style={stylees.container}>
        <Slider
          containerStyle={{ marginTop: 20 }}
          maximumValue={250}
          minimumValue={20}
          step={1}
          maximumTrackTintColor={drag ? "#3074D366" : "#424242"}
          minimumTrackTintColor="#fff"
          thumbTouchSize={{width: 80, height: 34}}
          trackStyle={{
            height: 8,
            borderRadius: 20,
          }}
          value={min}
          onValueChange={(value) => handleValueChange(value)}
          renderThumbComponent={() => (!drag && min > 20) ? <ValueThumb value={min}/> : <Thumb value={min} drag={drag}/>}
          onSlidingStart={() => setDrag(true)}
          onSlidingComplete={() => setDrag(false)}
          trackClickable={false}
        />
      </View>
      <View style={styles.milesHold}>
        <Text style={styles.text}>{min} mi</Text>
        <Text style={styles.text}>{max} mi</Text>
      </View>
    </Animatable.View>
  );
};

const stylees = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
});

export default RangeSliderTest;
