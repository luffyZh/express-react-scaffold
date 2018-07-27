import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { HeaderMenu } from './constants/MenuTypes';
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
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKey: '/app',
      openKey: ''
    };
  }

  componentDidMount() {
    this.setState({ selectedKey: this.props.location.pathname });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname.indexOf('/app/newFeatures') > -1) {
      this.setState({ selectedKey: nextProps.location.pathname, openKey: 'react-new-features' });
    } else {
      this.setState({ selectedKey: nextProps.location.pathname, openKey: '' });
    }
  }

  onCollapse = (collapsed) => this.setState({ collapsed });

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };

  toggleMenu = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { match, location } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ background: '#fff' }}
        >
          <div className="logo" />
          <Menu
            theme="light"
            selectedKeys={[this.state.selectedKey]}
            openKeys={[this.state.openKey]}
            mode="inline"
            onClick={this.menuClick}
          >
            <Item key={'null'} style={{ margin: '0', padding: '0', height: '64px', textAlign: 'center', lineHeight: '64px', backgroundColor: '#00BFFF', cursor: 'default' }} disabled/>
            <Item key={`${match.url}`}>
              <Link to={`${match.url}`}><Icon type="home" /><span>首页</span></Link>
            </Item>
            <Item key={`${match.url}/userList`}>
              <Link to={`${match.url}/userList`}><Icon type="pie-chart" /><span>用户列表</span></Link>
            </Item>
            <SubMenu
              key="react-new-features"
              title={<span><Icon type="desktop" /><span>React16 新特性</span></span>}
              onTitleClick={() => { this.state.openKey === 'react-new-features' ? this.setState({ openKey: '' }) : this.setState({ openKey: 'react-new-features' }); }}
            >
              <Item key={`${match.url}/newFeatures/render`}>
                <Link to={`${match.url}/newFeatures/render`}>render</Link>
              </Item>
              <Item key={`${match.url}/newFeatures/fragment`}>
                <Link to={`${match.url}/newFeatures/fragment`}>Fragment</Link>
              </Item>
              <Item key={`${match.url}/newFeatures/portals`}>
                <Link to={`${match.url}/newFeatures/portals`}>Portals</Link>
              </Item>
              <Item key={`${match.url}/newFeatures/errorBoundary`}>
                <Link to={`${match.url}/newFeatures/errorBoundary`}>ErrorBoundary</Link>
              </Item>
              <Item key={`${match.url}/newFeatures/newLifeCircle`}>
                <Link to={`${match.url}/newFeatures/newLifeCircle`}>NewLifeCircle</Link>
              </Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.headerStyle}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleMenu}
            />
            <div className={styles.headerTitle}><span style={{ marginLeft: '-25px' }}>{HeaderMenu[location.pathname]}</span></div>
          </Header>
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
