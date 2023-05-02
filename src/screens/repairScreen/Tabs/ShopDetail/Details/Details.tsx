import * as React from "react";
import { Text, View } from "react-native";
import { detailsStyle } from "./Details.style";
import Edit from "../../../../../assets/icons/editBigger.svg";
import colors from "../../../../../helpers/colors";
import Like from "../../../../../assets/icons/likeBigger.svg";
import Dislike from "../../../../../assets/icons/dislikeBigger.svg";
import Clock from "../../../../../assets/icons/clock.svg";
import Arrow from "../../../../../assets/icons/fullArrowDown.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../../../redux/store/store";

interface Iprops {}

const Details = ({}: Iprops) => {
  const [active, setActive] = useState(false);
  const selectedRepairShop = useSelector(
    (state: RootState) => state.repairData.selectedRepairShop
  );
  const [isOpen, setIsOpen] = useState(false);
  const [workTimeToday, setWorkTimeToday] = useState("");

  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  const currentHours = currentTime.split(" ")[0];

  const startToday = selectedRepairShop?.openHoursToday?.split("-")[0];
  const endToday = selectedRepairShop?.openHoursToday?.split("-")[1];
  const startHoursToday = startToday?.split(":")[0];
  const endHoursToday = endToday?.split(":")[0];

  useEffect(() => {
    if (startHoursToday <= currentHours <= endHoursToday) {
      setIsOpen(true);
      setWorkTimeToday("Closes at " + endToday);
    } else {
      setIsOpen(false);
      setWorkTimeToday("Open at " + selectedRepairShop?.startTimeAllDays);
    }
  }, []);

  return (
    <View style={detailsStyle.mainHolder}>
      <View style={detailsStyle.reviewLikes}>
        <View style={detailsStyle.reviewHolder}>
          <Edit />
          <Text style={detailsStyle.reviewText}>Review</Text>
          <View style={detailsStyle.reviewCountHolder}>
            <Text style={detailsStyle.reviewCount}>
              {selectedRepairShop.reviews ? selectedRepairShop.reviews : 0}
            </Text>
          </View>
        </View>

        <View style={detailsStyle.reviewHolder}>
          <View
            style={[detailsStyle.likeHolder, { backgroundColor: "#26A690" }]}
          >
            <Like />
            <Text style={[detailsStyle.likeCount, { color: "#fff" }]}>
              {selectedRepairShop.currentCompanyUserRating
                ? selectedRepairShop.currentCompanyUserRating
                : 0}
            </Text>
          </View>

          <View style={[detailsStyle.likeHolder, { marginRight: 10 }]}>
            <Dislike />
            <Text style={detailsStyle.likeCount}>
              {selectedRepairShop.downCount ? selectedRepairShop.downCount : 0}
            </Text>
          </View>

          <View style={[active && { transform: [{ rotateX: "180deg" }] }]}>
            <Arrow color={colors.mediumGrey} />
          </View>
        </View>
      </View>

      <View style={[detailsStyle.reviewLikes, { marginTop: 20 }]}>
        <View style={detailsStyle.reviewHolder}>
          <Clock />
          <Text
            style={[
              detailsStyle.openOrClose,
              !isOpen && { color: colors.defaultRed },
            ]}
          >
            {isOpen ? "Open" : "Close"}{" "}
          </Text>
          <Text style={detailsStyle.whenOpenOrClose}>• {workTimeToday}</Text>
        </View>

        <Arrow color={colors.mediumGrey} />
      </View>
    </View>
  );
};

export default Details;
