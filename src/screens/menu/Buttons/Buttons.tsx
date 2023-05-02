import React from "react";
import { View } from "react-native";
import DashboardIcon from "../../../assets/images/dashboard.svg";
import LoadIcon from "../../../assets/images/load.svg";
import ChatIcon from "../../../assets/images/chat.svg";
import NotificationsIcon from "../../../assets/images/notifications.svg";
import { styles } from "./Buttons.style";
import { TouchableRipple } from "react-native-paper";
import colors from "../../../helpers/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

interface IProps {
  deviceInfo?: DInfo;
  changeScreen: (e: string) => void;
}

interface DInfo {
  name: string;
  model: string[];
  corner: number;
  padding: number;
  iconCorner: number;
}

const Buttons = ({ deviceInfo, changeScreen }: IProps) => {
  const routeName = useSelector((state: RootState) => state.menu.screenName);
  return (
    <>
      <View
        style={[
          styles.buttonsHold,
          {
            paddingTop: deviceInfo?.corner ? 0 : 10,
            marginLeft: deviceInfo ? 14 + deviceInfo.padding : 18,
          },
        ]}
      >
        <View
          style={[
            styles.buttons,
            deviceInfo && { borderRadius: deviceInfo.iconCorner },
          ]}
        >
          <TouchableRipple
            rippleColor="#6F9EE0"
            onPress={() => [changeScreen("dashboard-screen")]}
            style={[
              styles.buttons,
              deviceInfo && { borderRadius: deviceInfo.iconCorner },
              routeName == "dashboard-screen" && {
                backgroundColor: colors.primary,
              },
            ]}
          >
            <DashboardIcon
              color={routeName == "dashboard-screen" ? "#fff" : colors.primary}
            />
          </TouchableRipple>
        </View>

        <View
          style={[
            styles.buttons,
            deviceInfo && { borderRadius: deviceInfo.iconCorner },
          ]}
        >
          <TouchableRipple
            rippleColor="#6F9EE0"
            onPress={() => [changeScreen("load-screen")]}
            style={[
              styles.buttons,
              deviceInfo && { borderRadius: deviceInfo.iconCorner },
              routeName == "load-screen" && {
                backgroundColor: colors.primary,
              },
            ]}
          >
            <LoadIcon
              color={routeName == "load-screen" ? "#fff" : colors.primary}
            />
          </TouchableRipple>
        </View>
      </View>
      <View
        style={[
          styles.buttonsHold,
          {
            paddingTop: deviceInfo?.corner ? 0 : 10,
            marginRight: deviceInfo ? 14 + deviceInfo.padding : 18,
          },
        ]}
      >
        <View
          style={[
            styles.buttons,
            deviceInfo && { borderRadius: deviceInfo.iconCorner },
          ]}
        >
          <TouchableRipple
            rippleColor="#6F9EE0"
            style={[
              styles.buttons,
              deviceInfo && { borderRadius: deviceInfo.iconCorner },
            ]}
          >
            <ChatIcon color={colors.primary} />
          </TouchableRipple>
        </View>
        <TouchableRipple
          rippleColor="#6F9EE0"
          style={[
            styles.buttons,
            deviceInfo && { borderRadius: deviceInfo.iconCorner },
          ]}
        >
          <NotificationsIcon color={colors.primary} />
        </TouchableRipple>
      </View>
    </>
  );
};

export default Buttons;
