import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
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

	go = () => {
		// const { router } = this.props;
		// router.push({
		// 	pathname: 'home',
		// 	query: {
		// 		a: 1,
		// 		b: 2,
		// 	},
		// });
		axios.post('/amountInformation', {
			firstName: 'Fred',
			lastName: 'Flintstone',
		})
			.then(response => {
				console.log(response);
			}).catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className={style.he}>
				<div>
					<Button type="primary" onClick={this.go}>Primary</Button>
					<Button>Defau</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">Danger</Button>
				</div>
			</div>
		);
	}
}

export default Login;
