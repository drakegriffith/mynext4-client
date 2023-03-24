import {ADD_COURSE } from './courseTypes'

const initialState = {
    courseList: []
}

const courseReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COURSE: return {
            ...state,
            courseList: state.courseList.append(action.payload)
        }
        default: return state
    }
}

export default courseReducer