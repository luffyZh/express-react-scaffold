import { connect } from 'react-redux';
import UserList from '../components/UserList';
import {
  fetchAllUserList
} from '../redux/actions/User';

const mapStateToProps = state => ({
  list: state.user.userList.list,
});

const mapDispatchToProps = dispatch => ({
  fetchAllUserList() {
    dispatch(fetchAllUserList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
