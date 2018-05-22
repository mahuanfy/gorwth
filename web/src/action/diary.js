import * as request from '../request/request';
import * as StatusCode from '../constants/StatusCode';

export const allDiary = (content) => {
    return {
        type: "GET_ALL_DIARY",
        content
    }
};

export const getAllDiary = () => {
    console.log(12341)
    return dispatch => {
        request.get("/web/diary")
            .then(result => {
                console.log(result.data)
                if (result.status === StatusCode.OK) {
                    
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