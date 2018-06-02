import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../../action/login.action';
import {Form, Icon, Input, Button, Card, Row, Col} from 'antd';
import '../../css/App.css';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }

    componentDidMount() {
        console.log("登陆状态", this.props.isLogin);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values)
            }
        });
    };

    render() {
        if (this.props.isLogin) {
            this.props.history.push("/app");
        }
        const {getFieldDecorator} = this.props.form;
        return (

            <Card title="登录页面" style={{margin: "10px"}}>
                <Row>
                    <Col span={9}/>
                    <Col span={6}>
                        <div>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('name', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               placeholder="Username"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               type="password" placeholder="Password"/>
                                    )}
                                </FormItem>
                                <FormItem>

                                    <Button type="primary" htmlType="submit" style={{width: "100%"}}
                                            className="login-form-button">
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </FormItem>
                            </Form>
                        </div>
                    </Col>
                    <Col span={9}/>
                </Row>
            </Card>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.Login.isLogin
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(loginActions.userLogin(user));
        }
    };
};
const LoginForm = Form.create()(Login);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);