import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Dropdown, Button, message, Icon, Menu } from 'antd';
import { Router } from 'react-router'


const userLoginMenu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" >
        <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item key="2">注册</Menu.Item>
    </Menu>
);
const userInfoMenu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">个人信息</Menu.Item>
        <Menu.Item key="2">注销</Menu.Item>
    </Menu>
);

function handleButtonClick(e) {
    message.info('<Icon type="loading" />');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info(<Icon type="loading" >正在跳转，请稍等...</Icon>);
}
class Personal extends Component {
    render() {
        const isLogin = this.props.isLogin
        return (
            <Row>
                <Col span={6} offset={19}>
                    <Dropdown overlay={isLogin == 0?userLoginMenu:userInfoMenu}>
                        <Button style={{ marginLeft: 8 }}>
                            {isLogin == 0 ? '请先登录' : this.props.name} <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
        )
    }
}
export default Personal;
