import React, {Component} from 'react';
import {withCookies} from 'react-cookie';
import {Link} from 'react-router-dom';
import {Row, Col, Dropdown, Button, message, Icon, Menu} from 'antd';


class Personal extends Component {
    handleMenuClick(e) {
        if (e.key === "2") {
            const {cookies} = this.props;
            cookies.remove('isLogin', {path: "/"});
            cookies.remove('user', {path: "/"});
            message.success('注销成功');
            this.props.logout();
            this.props.history.push("/");
        }
    }

    render() {
        const userInfoMenu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                <Menu.Item key="1">个人信息</Menu.Item>
                <Menu.Item key="2">注销</Menu.Item>
            </Menu>
        );
        const userLoginMenu = (
            <Menu>
                <Menu.Item key="1">
                    <Link to="/">登录</Link>
                </Menu.Item>
                <Menu.Item key="2">注册</Menu.Item>
            </Menu>
        );

        const isLogin = this.props.isLogin;
        return (
            <Row>
                <Col span={6} offset={19}>
                    <Dropdown overlay={isLogin ? userInfoMenu : userLoginMenu}>
                        <Button style={{marginLeft: 8}}>
                            {isLogin ? "欢迎：" + this.props.name : '请先登录'} <Icon type="down"/>
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        )
    }
}

export default withCookies(Personal);
