import { createSlice } from '@reduxjs/toolkit';

export interface IBlurViewProps {
    isBlured: boolean;
  }
  
const initialState: IBlurViewProps = {
    isBlured: false,
};

const blurViewSlice = createSlice({
    name: 'blur',
    initialState,
    reducers: {
        toggleBlur: (state, action) => {
            state.isBlured = action.payload;
        }
    },
});

export const {
    toggleBlur
 } =
 blurViewSlice.actions;

export default blurViewSlice.reducer;
