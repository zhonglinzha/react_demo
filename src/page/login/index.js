import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { Button, Menu, Dropdown, Icon } from "antd";


const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
      </Menu.Item>
    </Menu>
  );


@connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)
class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  toHome = () => {
    const { router } = this.props;
    const { loginAction } = this.props.actions;

    loginAction({ login: 4 });

    // router.push({
    //   pathname: "home",
    //   query: {
    //     title: 1,
    //     time: 2,
    //     text: 3
    //   }
    // });
  };

  render() {
    const { login } = this.props.loginReducer;

    return (
      <div>
        <h1>{login}</h1>
        <div onClick={this.toHome}>跳11sssssaaa转</div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default Login;
