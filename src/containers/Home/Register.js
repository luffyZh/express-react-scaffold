import { connect } from 'react-redux';
import Register from '../../components/Login/Register';
import { USER_REGISTER, RESET_REGISTER_STATUS } from '../../constants/ActionTypes';

const mapStateToProps = state => ({
  registerMsg: state.home.register.registerMsg,
  registerResult: state.home.register.registerResult,
});

const mapDispatchToProps = dispatch => ({
  userRegister: ({ username, password, email }) => (
    dispatch({ type: USER_REGISTER, username, password, email })
  ),
  resetRegisterStatus: () => (
    dispatch({ type: RESET_REGISTER_STATUS })
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
