/* eslint-disable */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import axios from 'axios';
import * as actions from './actions';
import style from './style.scss';
import Test from './test';
import { array, func } from 'prop-types';

import tworker from './t.worker';

import LazyLoad from 'react-lazy-load';

// const req = require('./mock');


const files = require.context('../home',false,/style\.scss/);
// console.dir(files)
files.keys().forEach(i=>{
	// console.dir(i)
	console.dir(files(i));
})



@connect(
	state => state,
	dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)
class Login extends Component {
	constructor(props) {
		super(props);
		console.log(Test.n);
		let arr = [];
		for(let i=0; i < 100 ; i++){
			arr.push(i);
		}
		this.state = {
			t : 1,
			arr,
		}

		console.log(React.isValidElement(<Test />));
	}
	go1 = () => {
		// var myWorker = new tworker();
		// myWorker.postMessage(10000);
		// myWorker.onmessage = e => {
		// 	console.log(e);
		// }
	}

	go = () => {

		// this.sleep(10000);
		console.log('1111111')
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
	}
	componentWillReceiveProps() {
		// console.log("---sss--------");
	}

	t = () => {
		let count = 1;
		let getTime = Date;
		let startTime = getTime.now();
		setInterval(() => {
		console.log(`第${count}次开始 ${getTime.now() - startTime}`); // 显示开始时间
		this.sleep(10000); // 程序滞留500ms
		//   console.log(`第${count}次结束 ${getTime.now() - startTime}`); // 显示结束时间
		count += 1;
		}, 1000); // 300ms间隔
	} 

	sleep  = time => {
		let startTime = Date.now();
		while (Date.now() - startTime < time) {}
	  }

	fd = (fn,wait) => {
		var timer;
		return function(){
			if(timer) clearTimeout(timer);
			var ctx = this;
			var arg = arguments[0];
			timer = setTimeout(function(){
				fn.call(ctx,arg);
			},wait);
		}
	}

	jl = (fn,wait) => {
		var timer;
		return function(){
			if(timer) return;
			var ctx = this;
			var arg = arguments[0];
			timer = setTimeout(function(){
				fn.call(ctx,arg);
				timer = null;
			},wait);


		}
	}



	componentDidMount(){

		// document.addEventListener('scroll',this.jl(function(e){
		// 	console.log(e);
		// 	console.log(this);
		// },1000))

		document.getElementById('t').addEventListener('click',this.fd(function(e){
			console.log(this);

		},1000))
		// this.t();
	}

	render() {
		return (
			<div className={style.he}>
				<div>
					<Button type="primary" onClick={this.go} id='t' >Primary</Button>
					<Button onClick={this.go1} >Defau</Button>
					
					{
						
						this.state.arr.map(i=><Button type="dashed" key={i} >Dashed</Button>)
					}
					<LazyLoad height={762} offsetVertical={300}>
						<img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
					</LazyLoad>
					<div className="filler" />
					<LazyLoad height={683} offsetTop={200}>
						<img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
					</LazyLoad>
					<div className="filler" />
					<LazyLoad height={480} offsetHorizontal={50}>
						<img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
					</LazyLoad>
					<div className="filler" />
					<LazyLoad height={720} onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
						<img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
					</LazyLoad>
				</div>
			</div>
		);
	}
}

export default Login;
