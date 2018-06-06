import {combineReducers} from 'redux';

import Diary from './diary.redux'
import Login from './user.redux'

export default combineReducers({
    Diary,Login
})