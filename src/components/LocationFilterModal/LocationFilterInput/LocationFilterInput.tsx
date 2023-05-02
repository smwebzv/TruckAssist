import React from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./LocationFilterInput.style";
import Location from "../../../assets/icons/locationIcon.svg";
import Gps from "../../../assets/icons/gps.svg";
import Cancel from "../../../assets/icons/cancelX.svg";
import Selected from "../../../assets/icons/locSelectedIcon.svg";
import * as Animatable from "react-native-animatable";
import { TouchableRipple } from "react-native-paper";
import fonts from "../../../helpers/fonts";
import colors from "../../../helpers/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAutocompleteAddress } from "../../../api/geoLocation/geoLocation";
import HighlightedText from "../../HighlightedText/HighlightedText";
let searchTimeout: any = null;
interface IProps {
  tab: number;
  placeholder: string;
  setAddress: (e: string) => void;
  value: string;
  type: string;
  animDuration: number;
}

const LocationFilterInput = ({
  tab,
  placeholder,
  setAddress,
  value,
  type,
  animDuration
}: IProps) => {
  const insets = useSafeAreaInsets();
  const [onFocus, setOnFocus] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [locationList, setLocationList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchLocation = (e: string) => {
    setSearchQuery(e);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (e.length === 0) {
      setLocationList([]);
      setAddress("")
    }
    if (e.length >= 0 && e.length < 3) return;
    searchTimeout = setTimeout(() => {
      setSearchQuery(e);
      getAutocompleteAddress(e)
        .then(async (res) => {
          setLocationList(res?.data?.addresses);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };

  const confirmLocation = (e: string) => {
    setAddress(e);
    setSearchQuery(e);
  };

  const deleteLocation = () => {
    setAddress("");
    setSearchQuery("");
    setLocationList([]);
  };

  return (
    <>
      <Animatable.View style={styles.mainHolder} duration={animDuration} animation={'fadeInDown'}>
        <View
          style={[
            styles.rippleHolder,
            value ? { backgroundColor: "#3074D366" } : {},
          ]}
        >
          <TouchableRipple
            onPress={() => setModalVisible(true)}
            rippleColor="#919191"
            style={[
              styles.ripple,
              value ? { backgroundColor: "#3074D366" } : {},
            ]}
          >
            <>
              <Location color={value ? "#6F9EE0" : "#919191"} />
              <Text style={styles.input}>{placeholder}</Text>
            </>
          </TouchableRipple>
        </View>
      </Animatable.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
            style={{ flex: 1, backgroundColor: "#FFFFFFCC" }}
          >
            <View
              style={[
                styles.modalHolder,
                Platform.OS == "ios" && { marginTop: 20 + insets.top },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 8,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={[
                    styles.headerText,
                    { fontFamily: fonts.montserratBold },
                  ]}
                >
                  {type}
                </Text>
                <Text style={styles.headerText}>
                  {" "}
                  • Area / Filter / Repair Shop
                </Text>
              </View>
              <View style={[styles.inputHolder]}>
                <Location color={"#919191"} />
                <TextInput
                  onBlur={() => setOnFocus(false)}
                  onFocus={() => setOnFocus(true)}
                  style={[styles.input, { color: "#2F2F2F" }]}
                  placeholder={onFocus ? "Info Message" : placeholder}
                  value={searchQuery}
                  placeholderTextColor="#DADADA"
                  onChangeText={(e) => searchLocation(e)}
                />
                {searchQuery || value ? (
                  <TouchableOpacity
                    onPress={() => deleteLocation()}
                    style={{ width: 28, height: 46, justifyContent:'center' }}
                  >
                    <Cancel color={"#919191"} />
                  </TouchableOpacity>
                ) : null}
              </View>
              {locationList.length ? (
                <View>
                  {value ? (
                    <View
                      style={[
                        styles.ripple,
                        {
                          paddingLeft: 8,
                          backgroundColor: colors.darkerGrey,
                          justifyContent: "space-between",
                          paddingRight: 22,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.currentLocText,
                          { fontFamily: fonts.montserratBold },
                        ]}
                      >
                        {value}
                      </Text>
                      <Selected />
                    </View>
                  ) : (
                    locationList.map((item: string, index: number) => (
                      <TouchableOpacity
                        onPress={() => confirmLocation(item)}
                        style={[
                          styles.ripple,
                          {
                            paddingLeft: 8,
                            backgroundColor: colors.darkerGrey,
                          },
                        ]}
                        key={index}
                      >
                        <HighlightedText
                          text={item ? item : ""}
                          search={searchQuery}
                          style={[
                            styles.currentLocText,
                            { marginLeft: 0 },
                            value == item && {
                              fontFamily: fonts.montserratBold,
                            },
                          ]}
                          holderStyle={{ marginRight: 6 }}
                        />
                      </TouchableOpacity>
                    ))
                  )}
                </View>
              ) : (
                <View
                  style={[
                    styles.rippleHolder,
                    {
                      backgroundColor: colors.darkerGrey,
                      alignItems: "flex-start",
                      marginTop: 8,
                    },
                  ]}
                >
                  <TouchableRipple
                    onPress={() => console.log("pritisnuo")}
                    rippleColor="#919191"
                    style={[
                      styles.ripple,
                      {
                        backgroundColor: colors.darkerGrey,
                        paddingLeft: 12,
                        width: "100%",
                      },
                    ]}
                  >
                    <>
                      <Gps />
                      <Text style={styles.currentLocText}>
                        Use current address
                      </Text>
                    </>
                  </TouchableRipple>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default LocationFilterInput;
