import {combineReducers} from 'redux'
import courseReducer from './courses/courseReducer'
import collegeReducer from './colleges/collegeReducer'
import careerReducer from './careers/careerReducer'
import userReducer from './users/userReducer'

const rootReducer = combineReducers({
    course: courseReducer,
    college: collegeReducer,
    career: careerReducer,
    user: userReducer
})

export default rootReducer