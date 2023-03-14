
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL } from "./userTypes";
import { API, init_api } from "../../API";
import { fetchUserCareerInfo } from "../careers/careerActions";
import { userActions } from "./userSlice";

export const load_user = () => async dispatch => {

    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };


        try {
            init_api();
            const res = await API.get('/auth/users/me/', config);
            
            
            

            dispatch(fetchUserCareerInfo(res.data.id));
            dispatch(userActions.USER_LOADED_SUCCESS(res.data));
            
        } catch (err) {
            dispatch(userActions.USER_LOADED_FAIL());
        }

    } else {
        dispatch(userActions.USER_LOADED_FAIL());
    }
}


export const login = (email, password) => async dispatch => {

    try {
        init_api();
        const res = await API.post("/auth/jwt/create", {
            email: email,
            password: password
        });

        dispatch(userActions.LOGIN_SUCCESS(res.data));

        dispatch(load_user());
        
    } catch (err) {
        dispatch(userActions.LOGIN_FAIL());
    }
};