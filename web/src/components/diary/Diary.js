import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.props.getAllDiaries()
    }
    submitDiary(newDiary) {
        this.props.addDiary({ ...newDiary, userId: 1 });
    }
    render() {
        const diaries = this.props.diaries;
        return (
            <div>
                <AddDiary
                    time={this.state.time}
                    title={this.state.title}
                    content={this.state.content}
                    submitDiary={this.submitDiary.bind(this)}
                />
                <ShowDiary
                    diaries={diaries}
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
}
const mapDispatchToProps = (dispatch) => {
    return {
        addDiary: (diary) => {
            dispatch(diaryActions.addDiary(diary));
        },
        getAllDiaries: () => {
            dispatch(diaryActions.getAllDiary());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Diary);