import * as React from "react";
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { headerInfoItemStyle } from "./HeaderInfoItem.style";
import colors from "../../../../../../helpers/colors";
import Star from "../../../../../../assets/icons/star.svg";
import Visited from "../../../../../../assets/icons/visitedIcon.svg";
import PhoneCall from "../../../../../../assets/icons/phoneGray.svg";
import MailIcon from "../../../../../../assets/icons/mailGray.svg";
import LocationIcon from "../../../../../../assets/icons/locationGray.svg";

interface Iprops {
  swipe: boolean;
  item?: any;
}

const HeaderInfoItem = ({ swipe, item }: Iprops) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[headerInfoItemStyle.holderInfo, { width }]}
    >
      {!swipe && (
        <View style={headerInfoItemStyle.holderNameStart}>
          <Text style={headerInfoItemStyle.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Star color={item?.pinned ? colors.primary : colors.inactiveButton} />
        </View>
      )}

      <View style={headerInfoItemStyle.locationAway}>
        <Visited color="#26A690" />
        <Text style={headerInfoItemStyle.locationAwayCount}>156 mi •</Text>
        <Text style={headerInfoItemStyle.locationAwayText}>Away</Text>
      </View>

      <View>
        {item.phone && (
          <View style={headerInfoItemStyle.iconAndText}>
            <PhoneCall />
            <Text style={headerInfoItemStyle.infoText}>{item.phone}</Text>
          </View>
        )}

        {item.email && (
          <View style={headerInfoItemStyle.iconAndText}>
            <MailIcon />
            <Text style={headerInfoItemStyle.infoText} numberOfLines={1}>
              {item.email}
            </Text>
          </View>
        )}

        {item.address.address && (
          <View style={headerInfoItemStyle.iconAndText}>
            <LocationIcon />
            <Text style={headerInfoItemStyle.infoText}>
              {item.address?.address}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HeaderInfoItem;
