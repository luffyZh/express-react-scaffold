import { connect } from 'react-redux';
import Register from '../../components/Login/Register';
import {
  postUserRegister,
  resetRegisterStatus,
} from '../../redux/actions/Home';

const mapStateToProps = state => ({
  registerMsg: state.home.register.registerMsg,
  registerResult: state.home.register.registerResult,
});

const mapDispatchToProps = dispatch => ({
  postUserRegister(postData) {
    dispatch(postUserRegister(postData));
  },
  resetRegisterStatus() {
    dispatch(resetRegisterStatus());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
