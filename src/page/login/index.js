import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as actions from './actions';
import style from './style.scss';

@connect(
	state => state,
	dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
class Login extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className={style.he}>
				<div>
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">Danger</Button>
				</div>
			</div>
		);
	}
}

export default Login;
