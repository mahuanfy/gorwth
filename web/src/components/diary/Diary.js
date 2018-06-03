import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import AddDiary from './AddDiary';
import ShowDiary from './ShowDiary';
import * as diaryActions from '../../action/diary.action';

const dateFormat = 'YYYY/MM/DD';

class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(new Date(), dateFormat),
            title: "新增日志",
            content: "请输入日志内容"
        }
    }

    componentDidMount() {
        this.props.getAllDiaries(this.props.user.id)
    }

    submitDiary(newDiary, userId) {
        this.props.addDiary({...newDiary, userId: userId});
    }

    deleteDiary(diaryId, userId) {
        this.props.deleteDiary(diaryId, userId);
    }

    render() {
        const diaries = this.props.diaries;
        const userId = this.props.user.id;
        return (
            <div>
                <AddDiary
                    time={this.state.time}
                    title={this.state.title}
                    content={this.state.content}
                    userId={userId}
                    submitDiary={this.submitDiary.bind(this)}
                />
                <ShowDiary
                    diaries={diaries}
                    userId={userId}
                    deleteDiary={this.deleteDiary.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        diaries: state.Diary.diary,
        isLogin: state.Login.isLogin,
        user: state.Login.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addDiary: (diary) => {
            dispatch(diaryActions.addDiary(diary));
        },
        getAllDiaries: (userId) => {
            dispatch(diaryActions.getAllDiary(userId));
        },
        deleteDiary: (diaryId, userId) => {
            dispatch(diaryActions.deleteDiary(diaryId, userId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Diary);