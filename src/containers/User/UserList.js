import { connect } from 'react-redux';
import UserList from '../../components/UserList';
import {
  FETCH_ALL_USER_LIST
} from '../../constants/ActionTypes';

const mapStateToProps = state => ({
  list: state.user.userList.list,
});

const mapDispatchToProps = dispatch => ({
  fetchUserList: () => (
    dispatch({ type: FETCH_ALL_USER_LIST })
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
