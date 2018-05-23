import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './form.module.css';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { spinShow: 'none', buttonDisbled: false };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.postUserLogin(values);
        this.setState({ spinShow: 'flex', buttonDisbled: true });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginMsg === 'fail') {
      swal('用户名或密码错误', '', 'error')
        .then(() => {
          this.props.resetLoginStatus();
          this.setState({ spinShow: 'none', buttonDisbled: false });
        });
    }
    if (nextProps.loginMsg === 'success') {
      setTimeout(() => {
        this.props.history.push('/');
      }, 1000);
    }
  }

  forgetPassword = () => {
    swal('忘记密码？','忘了就忘了吧，暂时我也没办法帮你找回来！', 'info');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.formContainer}>
        <div style={{ display: this.state.spinShow }} className={styles.spinContainer}>
          <Spin size='large' />
        </div>
        <Card className={styles.cardStyle}>
         <h2 className={styles.formTitle}>JWT登录</h2>
         <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem style={{ marginTop: '-10px' }}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
          </FormItem>
          <FormItem style={{ marginTop: '-10px' }}>
            <Button className={styles.formButton} type="primary" htmlType="submit">
              登录
            </Button>
            <div className={styles.otherInfo}>
              <span><Link to='/register'>注册账号</Link></span>
              |
              <span onClick={this.forgetPassword}>忘记密码</span>
            </div>
          </FormItem>
         </Form>
        </Card>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);
export default LoginForm;