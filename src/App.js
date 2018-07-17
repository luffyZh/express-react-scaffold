import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import MainPage from './components/home/MainPage';
import UserList from './containers/User/UserList';
// 新特性
import NewFeatures from './components/new-features/index';
/* 此处注意，如果使用CSS Module，则必须命名css文件为*.module.css的形式 */
/* More detail can see from https://github.com/codebandits/react-app-rewire-css-modules */
import styles from './App.module.css';



const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKey: '/app'
    };
  }

  componentDidMount() {
    this.setState({ selectedKey: this.props.location.pathname });
  }

  onCollapse = (collapsed) => this.setState({ collapsed });

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };

  render() {
    const { match } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            selectedKeys={[this.state.selectedKey]}
            mode="inline"
            onClick={this.menuClick}
          >
            <Item key={`${match.url}`}>
              <Link to={`${match.url}`}><Icon type="home" /><span>首页</span></Link>
            </Item>
            <Item key={`${match.url}/userList`}>
              <Link to={`${match.url}/userList`}><Icon type="pie-chart" /><span>用户列表</span></Link>
            </Item>
            <SubMenu
              key="react-new-features"
              title={<span><Icon type="desktop" /><span>React16 新特性</span></span>}
            >
              <Item key={`${match.url}/newFeatures/render`}>
                <Link to={`${match.url}/newFeatures/render`}>render</Link>
              </Item>
              <Item key={`${match.url}/newFeatures/fragment`}>
                <Link to={`${match.url}/newFeatures/fragment`}>Fragment</Link>
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, height: '46px' }} />
          <Content className={styles.contentContainer}>
            <Switch>
              <Route exact path={'/app'} component={MainPage} />
              <Route exact path={'/app/userList'} component={UserList} />
              <Route exact path={'/app/newFeatures/:type'} component={NewFeatures} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            @author luffyZhou
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
