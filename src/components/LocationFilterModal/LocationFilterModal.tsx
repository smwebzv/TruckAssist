import React from "react";
import { View, Text } from "react-native";
import LocationFilterInput from "./LocationFilterInput/LocationFilterInput";
import { styles } from "./LocationFilterModal.style";
import RangeSlider from "../RangeSlider/RangeSlider";
import { TouchableRipple } from "react-native-paper";
import * as Animatable from "react-native-animatable";

interface IProps {}

const LocationFilterModal = ({}: IProps) => {
  const [tab, setTab] = React.useState(1);
  const [rangeValue, setRangeValue] = React.useState({ min: 20, max: 250 });
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestionation] = React.useState("");
  const [location, setLocation] = React.useState("");

  return (
    <View style={styles.mainHolder}>
      <Animatable.View style={styles.buttonsHolder} duration={50} animation={'fadeInDown'}>
        <View style={[styles.button]}>
          <TouchableRipple
            onPress={() => setTab(1)}
            rippleColor="#fff"
            style={[styles.button, tab == 1 && styles.buttonActive]}
          >
            <Text
              style={[styles.buttonText, tab == 1 && styles.buttonTextActive]}
            >
              Radius
            </Text>
          </TouchableRipple>
        </View>
        <View style={[styles.button]}>
          <TouchableRipple
            onPress={() => setTab(2)}
            rippleColor="#fff"
            style={[styles.button, tab == 2 && styles.buttonActive]}
          >
            <Text
              style={[styles.buttonText, tab == 2 && styles.buttonTextActive]}
            >
              Route
            </Text>
          </TouchableRipple>
        </View>
      </Animatable.View>
      {tab == 1 && (
        <LocationFilterInput
          value={location}
          type="Location"
          tab={tab}
          placeholder={location ? location : "Location"}
          setAddress={setLocation}
          animDuration={200}
        />
      )}
      {tab == 2 && (
        <>
          <LocationFilterInput
            value={origin}
            type="Origin"
            tab={tab}
            placeholder={origin ? origin : "Origin"}
            setAddress={setOrigin}
            animDuration={200}
          />
          <LocationFilterInput
            value={destination}
            type="Destination"
            tab={tab}
            placeholder={destination ? destination : "Destination"}
            setAddress={setDestionation}
            animDuration={300}
          />
        </>
      )}
      <RangeSlider
        min={rangeValue.min}
        max={rangeValue.max}
        setRangeValue={setRangeValue}
        animation="fadeInDown"
        duration={tab == 2 ? 400 : 300}
      />
    </View>
  );
};

export default LocationFilterModal;
