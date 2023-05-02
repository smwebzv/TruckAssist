import { axiosInstance } from "../../helpers/axiosInterceptor";
import { IShopListProps } from "../../helpers/stateTypes/repairTypes";
import {
  setFindedNumberOfShops,
  setLoader,
  setNumberOfShops,
  setRepairCounts,
  setRepairShopList,
  setRepairShopMapList,
} from "../../redux/repair/repairSlice";

export const getRepairShopList =
  (
    shopList: IShopListProps[],
    serviceFilter?: string,
    value?: string,
    sort?: string,
    pageIndex?: number
  ) =>
    (dispatch: (arg0: any) => void) => {
      let filter = serviceFilter ? "&" + serviceFilter : "";
      let search =
        value && value.length > 2
          ? (serviceFilter || pageIndex ? "&" : "") + "Search=" + value
          : "";
      let sortType = sort
        ? (serviceFilter || search || pageIndex ? "&" : "") + "Sort=" + sort
        : "";
      axiosInstance
        .get(
          `repairshop/list?long=-122.431297&lat=37.773972&PageIndex=${pageIndex}${filter}${search}${sortType}`
        )
        .then(async (res) => {
          let data;
          if (pageIndex == 1) {
            dispatch(setRepairShopList(res.data.pagination.data));
          } else {
            data = [...shopList, ...res.data.pagination.data];
            dispatch(setRepairShopList(data));
          }
          dispatch(setLoader(false));
          dispatch(setFindedNumberOfShops(res.data.pagination.count));
          dispatch(setNumberOfShops(res.data.repairShopCount));
        })
        .catch((err) => {
          console.log(err);
          dispatch(setLoader(false));
        });
    };

export const getRepairShopMapList =
  (
    northEastLatitude: number,
    northEastLongitude: number,
    southWestLatitude: number,
    southWestLongitude: number
  ) =>
    (dispatch: (arg0: any) => void) => {
      axiosInstance
        .get(
          `repairshop/listmap?northEastLatitude=${northEastLatitude}&northEastLongitude=${northEastLongitude}&southWestLatitude=${southWestLatitude}&southWestLongitude=${southWestLongitude}`
        )
        .then(async (res) => {
          const data = JSON.stringify(res.data.pagination.data)
          dispatch(setRepairShopMapList(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };

export const getRepairCounts = () => (dispatch: (arg0: any) => void) => {
  axiosInstance
    .get(`repairshop/mobile/count`)
    .then(async (res) => {
      dispatch(setRepairCounts(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
