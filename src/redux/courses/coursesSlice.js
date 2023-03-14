import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    courseList: [2,3,4,5,6,7,8]
};


export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        ADD_COURSE(state,action) {
            state.courseList.push(action.paylod);
        }
    }
});

export const coursesActions = coursesSlice.actions;