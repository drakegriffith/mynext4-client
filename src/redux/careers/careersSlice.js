import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainCareer: null,
    careerList: null
}

export const careersSlice = createSlice({
    name: "career",
    initialState,
    reducers: {
        FETCH_CAREER_SUCCESS(state, action) {
            state.mainCareer = action.payload.mainCareer;
            state.careerList = action.payload.careerList;
        },

        FETCH_CAREER_FAILURE(state) {
            state.mainCareer = null;
            state.careerList = null;
        },

        CHANGE_MAIN_CAREER(state, action) {
            state.mainCareer = action.payload;
        },

        ADD_CAREER(state, action) {
            state.careerList.push(action.payload);
        }
    }
});


export const careersActions = careersSlice.actions;