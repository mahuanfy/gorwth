import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';


export const login = (content) => {
    return {
        type: "USER_INFO",
        content
    }
};
export const logout = () => {
    return {
        type: "USER_LOGIN_OUT",
        content:[]
    }
}
export const userLogin = (user) => {
    return dispatch => {
        request.post("/web/user", user)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    console.log("login success");
                    dispatch(login(result.data));
                }
            })
    }
};
export const register = (user) => {
    return dispatch => {
        request.put("/web/user", user)
            .then(result => {
                if (result.status === StatusCode.OK) {

                    dispatch(login(result.data));
                }
            })
    }
};