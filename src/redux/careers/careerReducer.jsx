import {FETCH_CAREER_SUCCESS,
        FETCH_CAREER_FAILURE } from './careerTypes'

export const initialState = {
    mainCareer: null,
    careerList: null
}

export const careerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CAREER_SUCCESS: 
            return {
                ...state,
                mainCareer: action.payload.mainCareer,
                careerList: action.payload.careerList
        }
        case FETCH_CAREER_FAILURE:
            return {
                ...state,
                initialState
            }
        default: return state
    }
};

export default careerReducer