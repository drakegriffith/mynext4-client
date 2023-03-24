import {ADD_COLLEGE, FETCH_COLLEGE_FAILURE, FETCH_COLLEGE_REQUEST, FETCH_COLLEGE_SUCCESS} from './college/collegeTypes'

export const addCollege = () => {
    return {
        type: ADD_COLLEGE,
        payload: college_object
    }
}

export const fetchCollegeRequest = () => {
    return {
        type: FETCH_COLLEGE_REQUEST
    }
}

export const fetchCollegeSuccess = users => {
    return {
        type: FETCH_COLLEGE_SUCCESS,
        payload: college_object
    }
}

export const fetchCollegeFailure = error => {
    return {
        type: FETCH_COLLEGE_FAILURE,
        payload: error
    }
}


export const fetchCollege = () => {
    return function(dispatch) {
        dispatch(fetchCollegeRequest())
        axios.get("http://127.0.0.1:8000/api/colleges/")
            .then(response => {
                // response.data is the array of users
                const college = response.data.map(college => college.id )
                dispatch(fetchCollegeSuccess(college))
            })
            .catch(error => {
                dispatch(fetchCollegeFailure(error.message))
                // error.message is the error description
            })
    }
}