import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../action/login.action';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        diaries: state.Login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(loginActions.userLogin(user));
        },
        // addDiary: (diary) => {
        //     dispatch(diaryActions.addDiary(diary));
        // },
        // getAllDiaries: () => {
        //     dispatch(diaryActions.getAllDiary());
        // }
        // userLogin:()=>{

        // }
    };
}

// const WrappedNormalLoginForm = Form.create()(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);