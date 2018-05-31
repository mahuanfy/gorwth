import {combineReducers} from 'redux';

import Diary from './diary.redux'
import Login from './login.redux'

export default combineReducers({
    Diary,Login
})