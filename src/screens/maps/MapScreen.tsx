import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
} from "react-native";
import mapStyle from "../../helpers/map-style.json";
import type { PointFeature } from "supercluster";
import type { BBox, GeoJsonProperties } from "geojson";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { styles } from "./MapScreen.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSupercluster from "use-supercluster";
import { useDispatch, useSelector } from "react-redux";
import { checkOpen } from "../../helpers/calculateOpenCloseStore";
import CustomMarker from "./CustomMarker/CustomMarker";
import { getRepairShopMapList } from "../../api/app/repairShop";
import { setFocusedRepairShop, setFocusedRepairShopIndex } from "../../redux/repair/repairSlice";
import { RootState } from "../../redux/store/store";
let searchTimeout: any = null;

interface PointProperties {
  cluster: boolean;
  category: string;
  id: number;
  color: string;
}

const MapScreen = () => {
  const { location } = useSelector((state: RootState) => state.gpsData);
  const {shopMapList, focusedRepairShopIndex} = useSelector((state: RootState) => state.repairData);
  let parsedList = JSON.parse(shopMapList)
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const mapRef = React.useRef<MapView>(null);
  const image = require("../../assets/icons/claster.png");
  const marker = require("../../assets/icons/marker.png");
  const closedMarker = require("../../assets/icons/closedMarker.png");
  const pinnedMarker = require("../../assets/icons/pinnedMarker.png");
  var mapp = mapStyle;
  const [bounds, setBounds] = React.useState<BBox>();
  const [zoom, setZoom] = React.useState(12);

  React.useEffect(() => {
    return () => {
      dispatch(setFocusedRepairShop({}));
      dispatch(setFocusedRepairShopIndex(-1));
    }
  },[])

  const focuseCurrentShop = (indx:number) => {
    dispatch(setFocusedRepairShopIndex(indx));
    const focused = parsedList[indx];
    dispatch(setFocusedRepairShop(focused))
  }

  const region = {
    latitude: location ? location?.coords?.latitude : 37.09024,
    longitude: location ? location?.coords?.longitude : -95.712891,
    latitudeDelta: 37,
    longitudeDelta: 37,
  };

  const regionToBoundingBox = (region: Region): BBox => {
    let lngD: number;
    if (region.longitudeDelta < 0) lngD = region.longitudeDelta + 360;
    else lngD = region.longitudeDelta;

    return [
      region.longitude - lngD,
      region.latitude - region.latitudeDelta,
      region.longitude + lngD,
      region.latitude + region.latitudeDelta,
    ];
  };

  const handleClusterPress = (cluster_id: number): void => {
    const leaves = supercluster?.getLeaves(cluster_id);
    if (!leaves) return;
    const coords = leaves?.map((l) => ({
      longitude: l.geometry.coordinates[0],
      latitude: l.geometry.coordinates[1],
    }));
    mapRef.current?.fitToCoordinates(coords, {
      edgePadding: {
        top: 200,
        right: 50,
        bottom: 250,
        left: 50,
      },
      animated: true,
    });
  };

  const getShopList = (n, s) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        getRepairShopMapList(
         n.latitude,
         n.longitude,
         s.latitude,
         s.longitude,
        )(dispatch);
      }, 1000);
  }

  const onRegionChangeComplete = async (region: Region, _?: object) => {
    const mapBounds = regionToBoundingBox(region);
    setBounds(mapBounds);
    
    const coords = await mapRef.current?.getCamera();
    setZoom(coords?.zoom ?? 10);
    let northeast = {
      latitude: region.latitude + region.latitudeDelta / 2,
      longitude: region.longitude + region.longitudeDelta / 2,
    }
    , southwest = {
      latitude: region.latitude - region.latitudeDelta / 2,
      longitude: region.longitude - region.longitudeDelta / 2,
    };
      getShopList(northeast, southwest)
  };

  const points = React.useMemo<
    PointFeature<GeoJsonProperties & PointProperties>[]
  >(() => {
    return parsedList.map((m, indx) => ({
      type: "Feature",
      properties: {
        cluster: false,
        category: "markers",
        id: indx,
        name: m.name,
        pinned: m.pinned,
        openHoursToday: m.openHoursToday,
      },
      geometry: {
        type: "Point",
        coordinates: [m.longitude, m.latitude],
      },
    }));
  }, [parsedList.length]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <View style={[styles.mainContainer, { top: -insets.top }]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        style={{ flex: 1 }}
        followsUserLocation={true}
        ref={mapRef}
        onRegionChangeComplete={onRegionChangeComplete}
        customMapStyle={mapp}
        mapPadding={{ top: 106 + insets.top, right: 0, left: 0, bottom: 0 }}
        region={region}
      >
        {clusters?.map((point) => {
          const [longitude, latitude] = point.geometry.coordinates;
          const coordinates = { latitude, longitude };
          const properties = point.properties;

          if (properties?.cluster) {
            const size = 44 + (properties.point_count * 30) / points.length;
            const fontSize = 14 + (properties.point_count * 1) / points.length;
            return (
              <Marker
                key={`cluster-${properties.cluster_id}`}
                coordinate={coordinates}
                onPress={() => handleClusterPress(properties.cluster_id)}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={[styles.cluster, { width: size, height: size }]}
                >
                  <Text style={[styles.clusterCount, { fontSize: fontSize }]}>
                    {properties.point_count}
                  </Text>
                </ImageBackground>
              </Marker>
            );
          }
          const startHours = properties?.openHoursToday?.split(" - ")[0];
          const endHours = properties?.openHoursToday?.split(" - ")[1];
          const isOpen = checkOpen(startHours, endHours);
          return (
            <Marker
              key={properties.id}
              coordinate={coordinates}
              onPress={() => focuseCurrentShop(properties.id)}
            >
              <CustomMarker
                icon={
                  properties?.pinned
                    ? isOpen == "Closed"
                      ? closedMarker
                      : pinnedMarker
                    : marker
                }
                name={properties?.name}
                isFocused={focusedRepairShopIndex == properties.id ? true : false}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;
