import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import s from './index.module.css';

const arrowStr = '----->';

const MainPage = () => (
  <div className={s.container}>
    <Link to='/app/userList'><Button type="primary" ghost>用户列表</Button></Link>
    <div className={s.newFeatureContainer}>
      <div className={s.columnsCenter}>
        <Button type='dashed'>New Features</Button>
      </div>
      <div className={s.columnsCenter} style={{ margin: '0 10px' }}>{arrowStr}</div>
      <div className={s.columnsContainer}>
        <span>V16.0</span>
        <Link to='/app/newFeatures/render'><Button type="primary" ghost>Render</Button></Link>
        <Link to='/app/newFeatures/fragment'><Button type="danger" ghost>Fragment</Button></Link>
        <Link to='/app/newFeatures/portals'><Button type="primary" ghost>Portals</Button></Link>
        <Link to='/app/newFeatures/errorBoundary'><Button type="danger">ErrorBoundary</Button></Link>
        <span>V16.3</span>
        <Link to='/app/newFeatures/newLifeCircle'><Button type="primary">NewLifeCircle</Button></Link>
      </div>
    </div>
  </div>
);

export default MainPage;