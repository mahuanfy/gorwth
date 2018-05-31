const USER_LOGIN_INFO = "USER_LOGIN_INFO"
const USER_LOGIN_OUT = "USER_LOGIN_OUT"
export default function (state = { isUser: false, user: [] }, action) {
    switch (action.type) {
        case "USER_LOGIN_INFO":
            return { ...state, isUser: true, user: action.content }
        case "USER_LOGIN_OUT":
            return { ...state, isUser: false, user: action.content }
    }
    return state;
}