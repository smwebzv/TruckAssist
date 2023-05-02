import { createSlice } from '@reduxjs/toolkit';
import { IFilterModalProps } from '../../helpers/stateTypes/filterModalTypes';

const initialState: IFilterModalProps = {
    filterData: [],
    selectedServices: [],
    selectedLocation: "",
    numberOfSelectedFilters: 0,
    isButtonForCloseActive: false,
};

const filterModalSlice = createSlice({
    name: 'filterModal',
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.filterData = action.payload;
        },
        setSelectedServices: (state, action) => {
            state.selectedServices = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload;
        },
        setNumberOfSelectedFilters: (state, action) => {
            state.numberOfSelectedFilters = action.payload;
        },
        setIsButtonForCloseActive: (state, action) => {
            state.isButtonForCloseActive = action.payload;
        }
    },
});

export const {
    setFilterData,
    setNumberOfSelectedFilters,
    setSelectedLocation,
    setSelectedServices,
    setIsButtonForCloseActive
 } =
 filterModalSlice.actions;

export default filterModalSlice.reducer;
