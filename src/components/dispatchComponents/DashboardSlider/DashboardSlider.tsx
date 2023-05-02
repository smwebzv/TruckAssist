import React, { useRef } from "react";
import { Animated, Dimensions, FlatList, View } from "react-native";
import {
  earningData,
  expensesData,
  milesData,
} from "../../../helpers/dashboardChartData";
import { dashboardList } from "../../../helpers/dashboardList";
import EarningCharts from "../ChartComponents/EarningsCharts/EarningsCharts";
import ExpensesCharts from "../ChartComponents/ExpensesCharts/ExpensesCharts";
import MilesCharts from "../ChartComponents/MilesCharts/MilesCharts";
import AnimatedCarousel from "./AnimatedCarousel";
import { styles } from "./DashboardSlider.style";
import FooterList from "./FooterList";

interface IProps {}

const DashboardSlider = ({}: IProps) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("screen");

  const viewableIetemChanged = useRef(({ viewableItems }) => {
    setActiveSlide(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={[styles.container, { width }]}>
      <FlatList
        data={dashboardList}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={[styles.container, { width, marginBottom: 22, height: 113 }]}
          >
            {index == 0 ? (
              <EarningCharts data={earningData[activeType]} />
            ) : index == 1 ? (
              <ExpensesCharts data={expensesData[activeType]} />
            ) : (
              <MilesCharts data={milesData[activeType]} />
            )}
          </View>
        )}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableIetemChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <FooterList setActiveType={setActiveType} />
      <AnimatedCarousel width={width} scrollX={scrollX} list={dashboardList} />
    </View>
  );
};

export default DashboardSlider;
