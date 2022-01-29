import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: window.localStorage.getItem('logged_user') ? JSON.parse(window.localStorage.getItem('logged_user')) : null,
    },
    reducers: {
        login: (state, action) => {
            window.localStorage.setItem('logged_user', JSON.stringify(action.payload));
            state.user = action.payload;
        },
        logout: (state) => {
            window.localStorage.removeItem('logged_user');
            state.user = null;
        },
    },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;