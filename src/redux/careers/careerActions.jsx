import { API, init_api } from '../../API'
import store from '../store'
import { FETCH_CAREER_FAILURE, FETCH_CAREER_SUCCESS, GET_CAREER_LIST_FAILURE,
     GET_CAREER_LIST_SUCCESS } from './careerTypes';
import { careersActions } from './careersSlice';
/*
export const fetchCareerList = () => {
    
    try {

    
        init_api();
        const user = store.getState().user.user.id;
        const res = API.get(`/api/User/${user}/`);
        const careerList = res.likedCareers;

        dispatch({
            type: GET_CAREER_LIST_SUCCESS,
            payload: careerList
        });

    } catch (err) {
        dispatch({
            type: GET_CAREER_LIST_FAILURE
        });
    }

}
*/

export const fetchUserCareerInfo = (id) => async dispatch => {

    try {
        init_api();
        //const user = store.getState().user.user.id;
        const res = await API.get(`/api/User/${id}/`);
        const info = {
            mainCareer: res.data.favCareer,
            careerList: res.data.likedCareers
        }

        dispatch(careersActions.FETCH_CAREER_SUCCESS(info));
    } catch (err) {
        dispatch(careersActions.FETCH_CAREER_FAILURE());
    }
};

export const changeMainCareer = (careerID) => dispatch => {
    console.log("Enters stack");
    dispatch(careersActions.CHANGE_MAIN_CAREER(careerID));
};

export const addCareer = (careerID) => dispatch => {
    dispatch(careersActions.ADD_CAREER(careerID));
}


