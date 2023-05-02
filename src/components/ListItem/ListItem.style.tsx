import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import fonts from "../../helpers/fonts";

export const listItemStyles = StyleSheet.create({
  holderItem: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 12,
    paddingRight: 12,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: fonts.montserratBold,
    textTransform: "uppercase",
    color: colors.darkerGrey,
    marginRight: 8,
  },
  titleLoadScreen: {
    marginLeft: 2,
  },
  holderRightSide: {
    alignItems: "flex-end",
  },
  numberLoadAndIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberLoad: {
    marginRight: 6,
    fontSize: 14,
    fontFamily: fonts.montserratMedium,
    color: colors.mediumGrey,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
  },
  timeMargin: {
    marginVertical: 8,
  },
  location: {
    color: colors.darkerGrey,
  },
  circlePickup: {
    width: 18,
    height: 18,
    borderRadius: 17,
    backgroundColor: colors.pickup.circle,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pickupNumber: {
    color: colors.pickup.number,
    fontSize: 11,
    fontFamily: fonts.montserratBold,
  },
  circleDelivery: {
    backgroundColor: colors.delivery.circle,
  },
  deliveryNumber: {
    color: colors.delivery.number,
  },
  holderFirstLocation: {
    marginBottom: 4,
    marginTop: 4,
  },
  repairShopLocation: {
    textTransform: "none",
    fontSize: 11,
    marginTop: 4,
    lineHeight: 14,
    fontFamily: fonts.montserrat,
    color: colors.mediumGrey,
  },
  arrowHold: {
    width: 36,
    height: 36,
    backgroundColor: colors.inactiveButton,
    borderRadius: 8,
    overflow:'hidden',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    transform: [{ rotate: "180deg" }]
  },
  arrowHoldRipple: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
