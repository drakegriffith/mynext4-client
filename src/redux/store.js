import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './users/userSlice'
import { careersSlice } from './careers/careersSlice'
import { coursesSlice } from './courses/coursesSlice'
import { collegesSlice } from './colleges/collegesSlice'

const store = configureStore({
    reducer: {user: userSlice.reducer,
            college: collegesSlice.reducer,
            career: careersSlice.reducer,
            course: coursesSlice.reducer}
});


export default store