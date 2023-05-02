import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../../helpers/colors";
import { TruckTrailerProps } from "../../../helpers/filterDataTypes";
import { getTruckIcon } from "../../../helpers/truck-trailer-list";
import LengthCountCircle from "../../InfoSelectedBar/LengthCountCircle";
import { styles } from "./TruckTrailerItem.style";
import * as Animatable from "react-native-animatable";

interface Iprops {
  item: TruckTrailerProps;
  expanded: number;
}

const TruckTrailerItem = ({ item, expanded }: Iprops) => {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    const animationType = expanded !== -1 ? 'fadeInDown' : 'fadeInUp';
    const duration = 100 * item?.id;

    animationRef.current?.animate(animationType, duration);
  },[expanded])

  return (
    <Animatable.View ref={animationRef}>
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.mainHolder]}
    >
      <View>
        <View style={styles.iconTitleHolder}>
          <View>
            {getTruckIcon(item.type)}
          </View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={{flexDirection:"row", alignItems:'center'}}>
          <Text style={[styles.status, styles.statusBold]}>{item.lastUsed}</Text>
          <Text style={[styles.status, {paddingHorizontal: 4}]}>•</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.visitedHold}>
        <LengthCountCircle
        num={item.visited}
        background={colors.darkGrey}
        textColor={"#fff"}
        />
        
      </View>
    </TouchableOpacity>
    </Animatable.View>
  );
};

export default TruckTrailerItem;