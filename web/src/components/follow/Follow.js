import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import {Col, Icon, Input, Row, Select} from 'antd';
import * as userActions from '../../action/user.action';

const Option = Select.Option;
const Search = Input.Search;

class Follow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            username: ""
        }
    }

    handleChange(username) {
        this.props.allUserInfo(username);
    }

    onClickFollow(followUserId) {
        const userId = this.props.user.id;
        this.props.addFollow(followUserId, userId);
    }

    render() {
        const children = [];
        const students = this.props.allUser;
        students.map(item => {
            children.push(<Option key={item.name}>{item.name}
                <a style={{float: 'right'}} onClick={this.onClickFollow.bind(this, item.id)}><Icon
                    type="plus-circle-o"/>关注</a>
            </Option>);
            return children;
        });
        console.log(children);
        return (
            <div>
                <Row>
                    <Col span={10}>
                        <span>请输入用户名</span>
                        <Select
                            mode="combobox"
                            style={{width: '100%'}}
                            placeholder="用户名"
                            onChange={this.handleChange.bind(this)}>
                            {children}
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allUser: state.User.allUser,
        user: state.User.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        allUserInfo: (userName) => {
            dispatch(userActions.allUserInfo(userName))
        },
        addFollow: (followUserId, userId) => {
            // dispatch(userActions.addFollow(followUserId, userId))e
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Follow));