const USER_INFO = "USER_INFO";
const USER_LOGIN_OUT = "USER_LOGIN_OUT";
export default function (state = {isLogin: false, user: []}, action) {
    console.log(action);
    switch (action.type) {
        case USER_INFO:
            return {...state, isLogin: true, user: action.content};
        case USER_LOGIN_OUT:
            return {...state, isLogin: false, user:[]};
        default:
            return state
    }
}