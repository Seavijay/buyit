//import '../../css/common.css'
import {  Steps  } from 'antd'
import React from 'react'

const { Step } = Steps;

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Steps
          type="navigation"
          size="big"
          className="site-navigation-steps"
        >
          <Step
            title="Step 1"
            subTitle=""
            status="finish"
            description="手机验证号"
          />
          <Step
            title="Step 2"
            subTitle=""
            status="process"
            description="填写个人信息"
          />
          <Step
            title="Step 3"
            subTitle=""
            status="wait"
            description="注册成功"
          />
        </Steps>
      </div>
    );
  }
}

export default SignUp




//export default () => <div className="signUp">sign up</div>
