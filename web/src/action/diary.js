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
        request.get(`http://localhost:8081/diary`)
            .then(result => {
                if (result.status === StatusCode.OK) {
                    
                    dispatch(allDiary(result.data));
                }
            })
    }
};
export const addDiary = (diary) => {
    return dispatch => {
        request.post("http://localhost:8081/diary", diary)
            .then(result => {
                if (result.status === StatusCode.CREATED) {
                    dispatch(getAllDiary(diary.userId));
                }
            })
    }
}