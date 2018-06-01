import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, message, Icon } from 'antd';
import { Route } from 'react-router-dom';
import * as action from '../action/login.action';
import '../css/App.css';
import Personal from './Personal'
import Diary from './diary/Diary'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





class App extends Component {
  constructor() {
    super();
    this.state = {
      pathName: "成长日志"
    }
  }

  path(pathName) {
    this.setState({ pathName })
  }
  componentWillMount() {
    this.props.user()
  }
  render() {
    console.log(this.props.isLogin)
    if (!this.props.isLogin) {
      this.props.history.push("/");
    }
    const match = this.props.match
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">成长日志</Menu.Item>

          </Menu>
          <Personal
            isLogin={0}
            name={'mahuanhuan'}
          />


        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>思特沃克学员</Breadcrumb.Item>
            <Breadcrumb.Item>成长日志</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.pathName}</Breadcrumb.Item>
          </Breadcrumb>

          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1">
                  <Link to={`${match.url}/`} onClick={this.path.bind(this, "我的日志")}><Icon type="user-add" />我的日志</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={`${match.url}/app`} onClick={this.path.bind(this, "我的关注")}><Icon type="solution" />我的关注</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <div onClick={this.path.bind(this, "优秀日志")}><Icon type="like-o" />优秀日志</div>
                </Menu.Item>
                <Menu.Item key="4">
                  <div onClick={this.path.bind(this, "测试")}><Icon type="like-o" />测试</div>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Route exact path={`${match.url}/`} component={Diary} />
              <Route exact path={`${match.url}/app`} component={Diary} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
    </Footer>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.Login.isLogin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    user: () => {
      dispatch(action.login());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
