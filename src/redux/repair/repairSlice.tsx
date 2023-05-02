import { createSlice } from '@reduxjs/toolkit';
import { IRepairProps } from '../../helpers/stateTypes/repairTypes';

const initialState: IRepairProps = {
  shopList: [],
  shopMapList: "[]",
  serviceFilter: "",
  searchValue: "",
  setSort: "dateAddedAsc",
  numberOfShops: 0,
  findedNumberOfShops: 0,
  selectedRepairShop: {},
  isSearchInputFocused: false,
  focusedRepairShop: {},
  focusedRepairShopIndex: -1,
  pageIndex: 1,
  loader: false,
  repairCounts: {}
};

const repairSlice = createSlice({
    name: 'repair',
    initialState,
    reducers: {
      setRepairShopList: (state, action) => {
        state.shopList = action.payload;
      },
      setRepairShopMapList: (state, action) => {
        state.shopMapList = action.payload;
      },
      setServiceFilterCategories: (state, action) => {
        state.serviceFilter = action.payload;
      },
      setRepairShopSearch: (state, action) => {
        state.searchValue = action.payload;
      },
      setRepairShopSort: (state, action) => {
        state.setSort = action.payload;
      },
      setNumberOfShops: (state, action) => {
        state.numberOfShops = action.payload;
      },
      setFindedNumberOfShops: (state, action) => {
        state.findedNumberOfShops = action.payload;
      },
      setSelectedRepairShop: (state, action) => {
        state.selectedRepairShop = action.payload;
      },
      setSearchInputFocused: (state, action) => {
        state.isSearchInputFocused = action.payload;
      },
      setFocusedRepairShop: (state, action) => {
        state.focusedRepairShop = action.payload;
      },
      setFocusedRepairShopIndex: (state, action) => {
        state.focusedRepairShopIndex = action.payload;
      },
      setPageIndex: (state, action) => {
        state.pageIndex = action.payload;
      },
      setLoader: (state, action) => {
        state.loader = action.payload;
      },
      setRepairCounts: (state, action) => {
        state.repairCounts = action.payload;
      },
    },
});

export const {
  setRepairShopList,
  setRepairShopMapList,
  setServiceFilterCategories,
  setRepairShopSearch,
  setRepairShopSort,
  setNumberOfShops,
  setFindedNumberOfShops,
  setSelectedRepairShop,
  setSearchInputFocused,
  setFocusedRepairShop,
  setFocusedRepairShopIndex,
  setPageIndex,
  setLoader,
  setRepairCounts
  
 } =
    repairSlice.actions;

export default repairSlice.reducer;
