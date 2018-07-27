import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

class UserList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    fetchUserList: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = { userList: this.props.list };
  }

  componentDidMount() {
    this.props.fetchUserList();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      <div style={{ width: '60%' }}>
        <h1 style={{ textAlign: 'center' }}>用户列表页</h1>
        <div style={{ width: '100%', margin: '10px auto' }}>
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