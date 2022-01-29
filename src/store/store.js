import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import userPopupReducer from './popup/UserPopupSlice';

const store = configureStore({
    reducer: { user: userReducer, userPopup: userPopupReducer }
});

export default store;