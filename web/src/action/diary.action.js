import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_DIARY",
        content
    }
};

export const getAllDiary = (userId) => {
    return dispatch => {
        request.get(`/web/diary/${userId}`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    console.log(result.data);
                    dispatch(allDiary(result.data));
                }
            })
    }
};
export const addDiary = (diary) => {
    return dispatch => {
        request.post("/web/diary", diary)
            .then(result => {
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllDiary(diary.userId));
                }
            })
    }
}