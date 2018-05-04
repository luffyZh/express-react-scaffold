import React, { Component } from 'react';
import { Table } from 'antd';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { userList: this.props.list };
  }

  componentDidMount() {
    this.props.fetchAllUserList();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ userList: nextProps.list });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.userList !== nextState.userList; 
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }];
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>用户列表页</h1>
        <div style={{ width: '50%', margin: '10px auto' }}>
          <Table
            dataSource={this.state.userList}
            columns={columns}
            rowKey={record => record._id}
          />
        </div>
      </div>
    );
  }
}
export default UserList;