import {ADD_COURSE, FETCH_COURSE_FAILURE, FETCH_COURSE_REQUEST, FETCH_CAREER_SUCCESS} from './courses/courseTypes'

export const addCourse = () => {
    return {
        type: ADD_COURSE,
        payload: course_object
    }
}

export const fetchCourseRequest = () => {
    return {
        type: FETCH_COURSE_REQUEST
    }
}

export const fetchCourseSuccess = users => {
    return {
        type: FETCH_COURSE_SUCCESS,
        payload: users
    }
}

export const fetchCourseFailure = error => {
    return {
        type: FETCH_COURSE_FAILURE,
        payload: error
    }
}


export const fetchCourse = () => {
    return function(dispatch) {
        dispatch(fetchCourseRequest())
        axios.get("/")
            .then(response => {
                // response.data is the array of users
                const course = response.data.map(course => course.id )
                dispatch(fetchCourseSuccess(users))
            })
            .catch(error => {
                dispatch(fetchCourseFailure(error.message))
                // error.message is the error description
            })
    }
}