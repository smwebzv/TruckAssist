import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ExpandedButtons.style";
import { TouchableRipple } from "react-native-paper";
import colors from "../../../helpers/colors";
import { useSelector } from "react-redux";
import { buttonsData } from "../../../helpers/menuButtonsData";
import UserTab from "../UserTab/UserTab";
import RippleButton from "../../../components/RippleButton/RippleButton";
import { RootState } from "../../../redux/store/store";

interface IProps {
  tab: number;
  changeScreen: (e: string) => void;
  changeTabScreen: (e: number) => void;
  logout: () => void;
  deviceInfo?: DInfo;
}

interface DInfo {
  name: string;
  model: string[];
  corner: number;
  padding: number;
  iconCorner: number;
}

const ExpandedButtons = ({
  tab,
  changeScreen,
  changeTabScreen,
  logout,
  deviceInfo,
}: IProps) => {
  const data = useSelector((state: RootState) => state.auth.userData);
  const routeName = useSelector((state: RootState) => state.menu.screenName);
  let firstName = data?.firstName ? data?.firstName : "";
  let lastName = data?.lastName ? data?.lastName : "";
  let newFirstName = firstName?.replace(/\s+/g, "");
  let newLastName = lastName?.replace(/\s+/g, "");
  return (
    <View style={[styles.mainHolder, tab == 2 && { paddingTop: 27 }]}>
      {tab == 1 ? (
        <>
          <View style={styles.headerHold}>
            <View>
              <Text style={styles.title}>{data?.companyName ? data?.companyName : ""}</Text>
              <Text style={styles.name}>
                {newFirstName + " " + newLastName}
              </Text>
            </View>
            <View
              style={[
                styles.initialsHolder,
                { backgroundColor: colors.darkGrey },
              ]}
            >
              <TouchableRipple
                style={styles.initialsHolder}
                onPress={() => changeTabScreen(2)}
                rippleColor={colors.darkerGrey}
              >
                <View style={styles.initialsSecondHolder}>
                  <Text style={styles.initials}>
                    {newFirstName[0] + newLastName[0]}
                  </Text>
                  <View style={styles.firstCirkle}>
                    <View style={styles.secondCirkle}>
                      <View style={styles.thirdCirkle} />
                    </View>
                  </View>
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View style={styles.buttonHolder}>
            {buttonsData.map((item, indx) => (
              <View key={indx} style={styles.button}>
                <RippleButton
                  rippleColor={colors.primary}
                  onPressWithReturn={changeScreen}
                  functionParametar={item.page}
                  icon={item.icon}
                  buttonHolder={[
                    styles.iconHolder,
                    item.page == routeName && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  rippleStyle={styles.rippleHolder}
                />
                <Text style={[styles.name, { marginTop: 4 }]}>{item.name}</Text>
              </View>
            ))}
          </View>
        </>
      ) : (
        <UserTab changeTabScreen={changeTabScreen} logout={logout} />
      )}
    </View>
  );
};

export default ExpandedButtons;
