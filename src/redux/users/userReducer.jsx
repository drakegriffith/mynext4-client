import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL
} from './userTypes'

const initialState = {
    loading: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', action.payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: action.payload.access,
                refresh: action.payload.refresh
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        default: return state
    }
   
}

export default userReducer
