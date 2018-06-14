import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
import {Col, Input, Row, Select} from 'antd';
import * as userActions from '../../action/user.action';

const Option = Select.Option;
const Search = Input.Search;
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
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
                        <Select
                            mode="tags"
                            style={{ width: '100%' }}
                            placeholder="Tags Mode"
                            onChange={handleChange}
                        >
                            {children}
                        </Select>
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