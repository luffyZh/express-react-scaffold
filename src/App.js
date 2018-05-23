import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
/* 此处注意，如果使用CSS Module，则必须命名css文件为*.module.css的形式 */
/* More detail can see from https://github.com/codebandits/react-app-rewire-css-modules */
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader} />
        <h1 className={styles.AppTitle}>Express-React-Scaffold</h1>
        <Link to='/userList'><Button type='primary'>用户列表</Button></Link>
      </div>
    );
  }
}

export default App;
