import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_DIARY",
        content
    }
};

export const getAllDiary = () => {
    return dispatch => {
        request.get("/web/login")
            .then(result => {
                if (result.status === StatusCode.OK) {
                    
                    dispatch(allDiary(result.data));
                }
            })
    }
};