import {combineReducers} from 'redux';

import Diary from './diary.redux'
import User from './user.redux'

export default combineReducers({
    Diary,User
})