import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import axios from 'axios';
import * as actions from './actions';
import style from './style.scss';

@connect(
	state => state,
	dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
class Login extends Component {
	state = {
		a: 0,
	}

	componentWillMount() {
		// console.log('1', this.node);
	}

	componentDidMount() {
		// console.log = e => { alert(e) };// eslint-disable-line
		// console.log('2', this.node);
		const thisDOM = ReactDOM.findDOMNode(this.node);// eslint-disable-line
		console.log(thisDOM);
		thisDOM.addEventListener('click', e => {
			console.log('11-------', e);
		});
	}

	componentWillReceiveProps() {
	}

	shouldComponentUpdate() {
		// console.log('3', this.node);
		return true;
	}

	componentWillUpdate() {
		// console.log('4', this.node);
	}

	componentDidUpdate() {
		// console.log('5', this.node);
	}

	componentWillUnmount() {
		// console.log('6', this.node);
	}

	go = e => {
		console.log('22-----', e);
		// e.stopImmediatePropagation();
		// const { router } = this.props;
		// router.push({
		// 	pathname: 'home',
		// 	query: {
		// 		a: 1,
		// 		b: 2,
		// 	},
		// });
		// axios.post('/amountInformation', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone',
		// })
		// 	.then(response => {
		// 		console.log(response);
		// 	}).catch(error => {
		// 		console.log(error);
		// 	});
		this.setState({
			a: 1,
		});
	}

	render() {
		const { a } = this.state;
		return (
			<div className={style.he}>
				<div>
					<Button type="primary" onClick={e => this.go(e)} ref={node => this.node = node}>Primary</Button>
					<Button>Defau</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">{a}</Button>
				</div>
			</div>
		);
	}
}

export default Login;
