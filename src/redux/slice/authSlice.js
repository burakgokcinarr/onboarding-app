import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userToken: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (state, actions) => {
            const newToken  = actions.payload;
            state.userToken = newToken;
        },
        logout: (state) => {
            state.userToken = null;
        },
    },
})

export const { setAuthentication, logout } = authSlice.actions;

export default authSlice.reducer;