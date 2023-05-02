import React from "react";
import { Text, View } from "react-native";
import Like from "../../../assets/icons/like.svg";
import Dislike from "../../../assets/icons/dislike.svg";
import Edit from "../../../assets/icons/edit.svg";
import { style } from "./InfoSortBar.style";
import { useSelector } from "react-redux";
import fonts from "../../../helpers/fonts";
import { RootState } from "../../../redux/store/store";
import { IShopListProps } from "../../../helpers/stateTypes/repairTypes";

interface IProps {
  item: IShopListProps;
}

const InfoSortBar = ({ item }: IProps) => {
  const sortType = useSelector((state: RootState) => state.repairData.setSort);
  let date = new Date(item?.lastVisited).getTime();
  let today = new Date().getTime();
  let msDay = 24 * 60 * 60 * 1000;

  let days = Math.floor((today - date) / msDay);

  return (
    <View style={style.likeDislikeHold}>
      {!sortType ||
      [
        "nameAsc",
        "nameDesc",
        "dateAddedAsc",
        "dateAddedDesc",
        "ratingAsc",
        "ratingDesc",
      ].includes(sortType) ? (
        <>
          <View style={style.likeDislike}>
            <Like />
            <Text style={style.likeDislikeText}>
              {!item.currentCompanyUserRating
                ? 0
                : item.currentCompanyUserRating}
            </Text>
          </View>
          <View style={style.likeDislike}>
            <Dislike />
            <Text style={style.likeDislikeText}>{item.downCount}</Text>
          </View>
          <View style={style.likeDislike}>
            <Edit />
            <Text style={style.likeDislikeText}>
              {item?.note ? item.note : 0}
            </Text>
          </View>
        </>
      ) : ["lastUsedDateAsc", "lastUsedDateDesc"].includes(sortType) ? (
        item.lastVisited ? (
          <View style={style.likeDislike}>
            <Text style={style.usedText}>{days} days ago </Text>
            <Text style={[style.usedText, { fontFamily: fonts.montserrat }]}>
              • Last used
            </Text>
          </View>
        ) : (
          <Text style={style.usedText}>Never used</Text>
        )
      ) : (
        <View style={style.likeDislike}>
          <Text style={style.usedText}>${item.cost ? item.cost : 0} </Text>
          <Text style={[style.usedText, { fontFamily: fonts.montserrat }]}>
            • Total cost
          </Text>
        </View>
      )}
    </View>
  );
};

export default InfoSortBar;
