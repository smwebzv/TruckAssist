import { createSlice } from '@reduxjs/toolkit';

interface IGpsProps {
    isActive: boolean,
    location: any,
    watch_position: boolean,
}

const initialState:IGpsProps = {
    isActive: false,
    location: null,
    watch_position: false,
};

const gpsSlice = createSlice({
    name: 'gps',
    initialState,
    reducers: {
        toggleGpsActivation: (state, action) => {
            state.isActive = action.payload;
        },
        updateGpsLocation: (state, action) => {
            state.location = action.payload;
        },
        toggleWachPosition: (state, action) => {
            state.watch_position = action.payload;
        }
    },
});

export const {
    toggleWachPosition,
    toggleGpsActivation,
    updateGpsLocation
 } =
 gpsSlice.actions;

export default gpsSlice.reducer;
