import React from 'react';
import { Button } from 'antd';
import EmptyData from 'uxcore-empty-data';
import './NotFound.css';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.onMainClick = this.onMainClick.bind(this);
  }
  onMainClick(e) {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="fillErrorDemo">
        <div className="errorLeft">
          <EmptyData style={{ width: '220px', height: '220px' }} />
        </div>
        <div className="errorRight">
          <div className="tips">
            <p className="tipsTitle">页面出错了</p>
            <p className="errorTips">
              您访问的页面不存在，请确认链接无误后再试。
            </p>
            <div className="errorButtons">
              <Button type="primary" onClick={this.onMainClick}>
                返回首页
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFound;
