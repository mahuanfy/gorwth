const USER_LOGIN_INFO = "USER_LOGIN_INFO"
const USER_LOGIN_OUT = "USER_LOGIN_OUT"
const initState = { isLogin: false, user: [] };
export default function (state = initState, action) {

    console.log(action)
    switch (action.type) {
        case "USER_LOGIN_INFO":
            return { ...state, isLogin: true, user: action.content }
        case "USER_LOGIN_OUT":
            return { ...state, isLogin: false, user: action.content }
        default:
            return state
    }

}