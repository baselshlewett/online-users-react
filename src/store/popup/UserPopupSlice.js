import { createSlice } from '@reduxjs/toolkit'

export const userPopupSlice = createSlice({
    name: 'userPopup',
    initialState: {
        shown: false,
        userData: null
    },
    reducers: {
        show: (state, action) => {
            state.shown = true;
            state.userData = action.payload
        },
        hide: (state) => {
            state.shown = false;
            state.userData = null
        },
    },
})

export const { show, hide } = userPopupSlice.actions

export const isShownPopup = (state) => state.userPopup.shown;
export const getUserData = (state) => state.userPopup.userData;

export default userPopupSlice.reducer;