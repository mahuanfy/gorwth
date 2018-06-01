import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const login = (content) => {
    return {
        type: "USER_LOGIN_INFO",
        content
    }
};
export const logout = (content) => {
    return {
        type: "USER_LOGIN_OUT",
        content
    }
}

export const getUserInfo = (user) => {
    return dispatch => {
        dispatch(login(user))
    }
}
export const userLogin = (user) => {
    return dispatch => {
        request.post("/web/user", user)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    console.log("login success")
                    dispatch(getUserInfo(result.data));
                }
            })
    }
};
export const register = (user) => {
    return dispatch => {
        request.post("/web/user", user)
            .then(result => {
                if (result.status === StatusCode.OK) {

                    dispatch(getUserInfo(result.data));
                }
            })
    }
};