/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
// import camelcase from 'camelcase';
// import VList from '../../source/List';
// import AutoSizer from '../../source/AutoSizer';
import { List as VList } from 'react-virtualized/dist/es/List';
import { AutoSizer } from 'react-virtualized/dist/es/AutoSizer';
import * as actions from './actions';
import style from './style.scss';
import Example from './hooks';
// import Test from './test';

// const Example = React.lazy(() => new Promise(resolve => {
// 	setTimeout(() => {
// 		resolve(import('./hooks'));
// 	}, 5000);
// }));

// const ctx = require.context('./', true, /mock\.js$/);
// ctx.keys().forEach(i => ctx(i));


@connect(
	state => state,
	dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 1,
			list: [],
		};
	}

	componentWillMount() {
		// console.log('1', this.node);
	}

	componentDidMount() {
		// console.log(this.node.getBoundingClientRect());
	}

	getNode = e =>{
		console.log(e.getBoundingClientRect());
	}

	// componentWillReceiveProps() {
	// }

	// shouldComponentUpdate() {
	// 	// console.log(nextProps, nextState);
	// 	return true;
	// }

	// componentWillUpdate() {
	// 	// console.log('4', this.node);
	// }

	// componentDidUpdate() {
	// 	// console.log('5', this.node);
	// }

	// componentWillUnmount() {
	// 	// console.log('6', this.node);
	// }

	getObjectURL = file => { 
		var url = null; 
		if (window.createObjcectURL != undefined) { 
			url = window.createOjcectURL(file); 
		} else if (window.URL != undefined) { 
			url = window.URL.createObjectURL(file); 
		} else if (window.webkitURL != undefined) { 
			url = window.webkitURL.createObjectURL(file); 
		} 
		return url; 
	}

	getFile = e => {
		var file = e.currentTarget.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onprogress = e => {
			console.log(e);
		}
		reader.onload = e => { 
			console.log(e);
		}
	}

	go = e => {
		console.log(this.state)
	// 	console.log(e.type);
	// 	// const { loginAction } = this.props.actions;// eslint-disable-line
	// 	// loginAction({login: '4'});
	// 	// this.forceUpdate();
	// 	// e.stopImmediatePropagation();
		// const { router } = this.props;
		// router.push({
		// 	pathname: 'home',
		// 	query: {
		// 		a: 1,
		// 		b: 2,
		// 	},
		// });
		// axios.post('/query', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone',
		// })
		// 	.then(response => {
		// 		console.log(response);
		// 	}).catch(error => {
		// 		console.log(error);
		// 	});
		// this.setState({
		// });
	}

	// getValue = e => {
	// 	this.setState({
	// 		a: e.target.value,
	// 	});
	// }

	renderItem = ({ index, key, style: _style }) => {

		return	(<div className={style['flex-layout']} key={key} style={_style}>
			{/* <div>{this.state.list[index].a}</div>
			<div>{this.state.list[index].b}</div>
			<div>{this.state.list[index].c}</div> */}
		</div>);

	}

	render() {
		// const { a, list } = this.state;
		// console.log(list);
		return (
			// <div className={style.he}>
			// 	<div>
			// 		<input value={a} onChange={e => this.getValue(e)} />
			// 		<Test ref={this.myRef} test={a} />
			// 		<Suspense fallback={<div>Loading...</div>}>
			// 			<Example />
			// 		</Suspense>
			// 		<Button>1</Button>
			// 		<Button type="dashed">{a}</Button>
			// 	</div>
			// </div>
		<React.Fragment>
					<div className={style.v}>123</div>
					<Example   test={this.state.a} />
					<Button type="primary" id='button' onClick={e => this.go(e)}>Primary</Button>
					<input type='file' onChange={e=> this.getFile(e)} ref={this.getNode}/>
				<AutoSizer disableHeight>
					{({ width }) => {
						// console.log(width);
						return (
							<VList
								width={width}
								height={1000}
								overscanRowCount={10}
								rowCount={10000}
								rowHeight={50}
								rowRenderer={this.renderItem}
							/>
						);
					}}
				</AutoSizer>
		 </React.Fragment>
		);
	}
}

export default Login;
