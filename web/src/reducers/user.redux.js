const USER_INFO = "USER_INFO";
const USER_LOGIN_OUT = "USER_LOGIN_OUT";
const ALL_USER_INFO = "ALL_USER_INFO";
export default function (state = {isLogin: false, user: [], allUser: []}, action) {
    switch (action.type) {
        case USER_INFO:
            return {...state, isLogin: true, user: action.content};
        case USER_LOGIN_OUT:
            return {...state, isLogin: false, user: []};
        case ALL_USER_INFO:
            return {...state, allUser: action.content};
        default:
            return state
    }
}