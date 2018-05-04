import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1 className="App-title">Express-React-Scaffold</h1>
        <Link to='/userList'><Button type='primary'>用户列表</Button></Link>
      </div>
    );
  }
}

export default App;
