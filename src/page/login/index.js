import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
// import camelcase from 'camelcase';
import * as actions from './actions';
import style from './style.scss';

// import Example from './hooks';
import Test from './test';

const Example = React.lazy(() => new Promise(resolve => {
	setTimeout(() => {
		resolve(import('./hooks'));
	}, 5000);
}));

const ctx = require.context('./', true, /mock\.js$/);
ctx.keys().forEach(i => ctx(i));


@connect(
	state => state,
	dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
class Login extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();

		const {Provider, Consumer } = React.createContext(null);
		console.log(Provider);
		console.log(Consumer);
	}

	componentWillMount() {
		// console.log('1', this.node);
	}

	componentDidMount() {
		console.log(this.myRef.current);
		// console.log = e => { alert(e) };// eslint-disable-line
		console.log('2', this.node);
		const thisDOM = ReactDOM.findDOMNode(this.node);// eslint-disable-line
		console.log('---->', thisDOM);
		// console.log(thisDOM);
		thisDOM.addEventListener('click', e => {
			console.log('11-------', e);
		});
		console.log('------>', document.getElementById('button'));
	}

	componentWillReceiveProps() {
	}

	shouldComponentUpdate() {
		// console.log('3', this.node);
		console.log('---------??');
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

	go = () => {
		console.log('22-----', this);
		// const { loginAction } = this.props.actions;// eslint-disable-line
		// loginAction({login: '4'});
		// this.forceUpdate();
		// e.stopImmediatePropagation();
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
		// this.setState({
		// });
	}

	render() {
		// const { login } = this.props
		return (
			<div className={style.he}>
				<div>
					<Test ref={this.myRef} />
					<Suspense fallback={<div>Loading...</div>}>
						<Example />
					</Suspense>
					<Button type="primary" id='button' onClick={e => this.go(e)} ref={node => this.node = node}>Primary</Button>
					<Button>1</Button>
					<Button type="dashed">Dashed</Button>
				</div>
			</div>
		);
	}
}

export default Login;
