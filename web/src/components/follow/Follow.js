import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import {Col, Input, Row} from 'antd';
import * as userActions from '../../action/user.action';

const Search = Input.Search;

class Follow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    // componentWillMount() {
    //
    // }

    componentDidMount() {
        // this.props.getAllDiaries(this.state.user.id)
    }

    changeSearch(e) {
        console.log(e.target.value);
        this.props.allUserInfo(e.target.value)
    }

    onSearch(value) {
        console.log(value)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <h3>请输入用户名</h3>
                        <Search
                            placeholder="input search username"
                            onSearch={this.onSearch.bind(this)}
                            onChange={this.changeSearch.bind(this)}
                        />
                    </Col>
                    {/*<Col span={3}/>*/}
                </Row>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // user: state.Login.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        allUserInfo: (userName) => {
            dispatch(userActions.allUserInfo(userName))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Follow));