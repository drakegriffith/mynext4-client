import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    error: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LOGIN_SUCCESS(state, action) {
            localStorage.setItem('access', action.payload.access);
            state.isAuthenticated = true;
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
        },

        LOGIN_FAIL(state) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.access = null;
            state.refresh = null;
            state.user = null;
            state.isAuthenticated = false;
        },

        USER_LOADED_SUCCESS(state, action) {
            state.user = action.payload;
        },

        USER_LOADED_FAIL(state, action) {
            state.user = null;
        }
    }
});

export const userActions = userSlice.actions;