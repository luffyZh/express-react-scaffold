import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import {
  USER_LOGIN,
  RESET_LOGIN_STATUS
} from '../../constants/ActionTypes';

const mapStateToProps = state => ({
  loginMsg: state.home.login.loginMsg,
  status: state.home.login.status,
});

const mapDispatchToProps = dispatch => ({
  userLogin: ({ username, password }) => (
    dispatch({ type: USER_LOGIN, username, password })
  ),
  resetLoginStatus: () => (
    dispatch({ type: RESET_LOGIN_STATUS })
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
