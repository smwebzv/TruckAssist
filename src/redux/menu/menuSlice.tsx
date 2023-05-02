import { createSlice } from '@reduxjs/toolkit';

interface IMenuProps {
    screenName: string
}

const initialState: IMenuProps = {
    screenName: "",
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCurrentScreen: (state, action) => {
            state.screenName = action.payload;
        }
    },
});

export const {
    setCurrentScreen
 } =
    menuSlice.actions;

export default menuSlice.reducer;
