import {ADD_COLLEGE } from './collegeTypes'

const initialState = {
    collegeList: []
}

export const collegeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COLLEGE: return {
            ...state,
            collegeList: state.collegeList.append(action.payload)
        }
        default: return state
    }
}

export default collegeReducer