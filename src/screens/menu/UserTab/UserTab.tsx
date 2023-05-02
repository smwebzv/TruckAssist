import React from "react";
import { Text, View } from "react-native";
import { styles } from "./UserTab.style";
import colors from "../../../helpers/colors";
import { useSelector } from "react-redux";
import Back from "../../../assets/icons/backArrow.svg";
import Company from "../../../assets/icons/mainButtonIcons/company.svg";
import Settings from "../../../assets/icons/mainButtonIcons/settings.svg";
import Status from "../../../assets/icons/mainButtonIcons/status.svg";
import Help from "../../../assets/icons/mainButtonIcons/help.svg";
import Logout from "../../../assets/icons/mainButtonIcons/logout.svg";
import Edit from "../../../assets/icons/mainButtonIcons/edit.svg";
import Profile from "../../../assets/icons/profile.svg";
import RippleButton from "../../../components/RippleButton/RippleButton";
import { RootState } from "../../../redux/store/store";

interface IProps {
  changeTabScreen: (e: number) => void;
  logout: () => void;
}

const UserTab = ({ changeTabScreen, logout }: IProps) => {
  const { userData } = useSelector((state: RootState) => state.auth);
  return (
    <View>
      <View style={styles.headerHold}>
        <RippleButton
          rippleColor={colors.darkGrey}
          onPressWithReturn={changeTabScreen}
          functionParametar={1}
          icon={<Back color="#fff"/>}
          buttonHolder={styles.backArrowHold}
          rippleStyle={styles.backRipple}
        />
        <RippleButton
          rippleColor={colors.darkerGrey}
          name={"Switch company"}
          onPress={() => console.log("test")}
          icon={<Company />}
          buttonHolder={styles.companyHold}
          rippleStyle={styles.companyRipple}
          nameStyle={styles.companyName}
        />
      </View>
      <View>
        <View style={styles.userInfoHold}>
          <View>
            <Profile />
            <RippleButton
              rippleColor={colors.darkerGrey}
              icon={<Edit />}
              buttonHolder={styles.editHold}
              rippleStyle={styles.editRipple}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: 12 }}>
            <Text style={styles.title}>{userData?.companyName}</Text>
            <Text style={styles.name}>
              {userData?.firstName + " " + userData?.lastName}
            </Text>
          </View>
        </View>
      </View>
      <RippleButton
        rippleColor={colors.darkGrey}
        name={"Settings"}
        onPress={() => console.log("test")}
        icon={<Settings />}
        buttonHolder={styles.buttonHolder}
        rippleStyle={styles.rippleHolder}
        nameStyle={styles.rippleText}
      />
      <RippleButton
        rippleColor={colors.darkGrey}
        name={"Active status"}
        onPress={() => console.log("test")}
        icon={<Status />}
        buttonHolder={styles.buttonHolder}
        rippleStyle={styles.rippleHolder}
        nameStyle={styles.rippleText}
      />
      <RippleButton
        rippleColor={colors.darkGrey}
        name={"Help center"}
        onPress={() => console.log("test")}
        icon={<Help />}
        buttonHolder={styles.buttonHolder}
        rippleStyle={styles.rippleHolder}
        nameStyle={styles.rippleText}
      />
      <RippleButton
        rippleColor={colors.darkGrey}
        name={"Logout"}
        onPress={() => logout()}
        icon={<Logout />}
        buttonHolder={styles.buttonHolder}
        rippleStyle={styles.rippleHolder}
        nameStyle={styles.rippleText}
      />
    </View>
  );
};

export default UserTab;
