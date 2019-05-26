import React, { Component } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './form.module.css';

const FormItem = Form.Item;

class NormalRegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.postUserRegister(values);
      } else {
        if (err.username) {
          swal(`${err.username.errors[0].message}`, '', 'error');
        } else if (err.email) {
          swal(`${err.email.errors[0].message}`, '', 'error');
        } else if (err.password) {
          swal(`${err.password.errors[0].message}`, '', 'error');
        }
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerResult) {
      swal('注册成功', '', 'success').then(() => {
        setTimeout(() => {
          this.props.history.push('/login');
        }, 600);
      });
    } else {
      if (nextProps.registerMsg !== '') {
        this.props.resetRegisterStatus();
        swal(`${nextProps.registerMsg}`, '', 'error');
      }
    }
  }

  changePasswordType = e => {
    const formObj = this.props.form.getFieldsValue();
    if (formObj.username === '' || formObj.email === '') {
      e.target.type = 'text';
    } else {
      e.target.type = 'password';
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.formContainer}>
        <Card className={styles.cardStyle}>
          <h2 className={styles.formTitle}>JWT注册</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: '输入的邮箱信息不合法！'
                  },
                  {
                    required: true,
                    message: '请输入你的邮箱!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="text"
                  placeholder="邮箱"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="密码"
                  onFocus={this.changePasswordType}
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                className={styles.formButton}
                type="primary"
                htmlType="submit"
              >
                注册
              </Button>
              <div className={styles.otherInfo}>
                <span>
                  <Link to="/login">已有账号，返回登录</Link>
                </span>
              </div>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const RegisterForm = Form.create()(NormalRegisterForm);
export default RegisterForm;
