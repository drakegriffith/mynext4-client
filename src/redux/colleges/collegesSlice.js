import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    collegeList: []
};


export const collegesSlice = createSlice({
    name: 'college',
    initialState,
    reducers: {
        ADD_COLLEGE(state, action) {
            state.collegeList.append(action.paylod);
        }
    }
});

export const collegesActions = collegesSlice.actions;