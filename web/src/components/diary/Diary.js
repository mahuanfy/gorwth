import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {withCookies} from 'react-cookie';
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
            content: "请输入日志内容",
            user: []
        }
    }

    componentWillMount() {
        const {cookies} = this.props;
        const user = cookies.get('user');
        this.setState({user});
    }

    componentDidMount() {
        this.props.getAllDiaries(this.state.user.id)
    }

    submitDiary(newDiary, userId) {
        this.props.addDiary({...newDiary, userId: userId});
    }

    deleteDiary(diaryId, userId) {
        this.props.deleteDiary(diaryId, userId);
    }

    render() {
        const diaries = this.props.diaries;
        const {user, time, title, content} = this.state;
        const userId = user.id;
        return (
            <div>
                <AddDiary
                    time={time}
                    title={title}
                    content={content}
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
        isLogin: state.User.isLogin,
        user: state.User.user
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

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Diary));