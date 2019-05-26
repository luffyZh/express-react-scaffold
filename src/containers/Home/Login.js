import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { postUserLogin, resetLoginStatus } from '../../redux/actions/Home';

const mapStateToProps = state => ({
  loginMsg: state.home.login.loginMsg,
  status: state.home.login.status
});

const mapDispatchToProps = dispatch => ({
  postUserLogin(postData) {
    dispatch(postUserLogin(postData));
  },
  resetLoginStatus() {
    dispatch(resetLoginStatus());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
