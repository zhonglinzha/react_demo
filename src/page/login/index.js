/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
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
import { LazyImage } from "react-lazy-images";

import TestHoc from './testHoc';


const img = require('@img/img.jpg');

import LifeCycle from './lifeCycle';


// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';


const req = require('./mock');


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
		// console.log(Test.n);
		let arr = [];
		for(let i=0; i < 100 ; i++){
			arr.push(i);
		}
		this.state = {
			t : 1,
			arr,
		}

		// console.log(React.isValidElement(<Test />));
	}
	go1 = () => {
		// var myWorker = new tworker();
		// myWorker.postMessage(10000);
		// myWorker.onmessage = e => {
		// 	console.log(e);
		// }
	}

	go = () => {

		this.setState({
			t : 2
		});
		console.log(this.state.t);
		return;
		// this.sleep(10000);
		// console.log('1111111')
		const { router } = this.props;
		router.push({
			pathname: 'home',
			query: {
				a: 1,
				b: 2,
			},
		});
		// NProgress.start();
		// axios.post('/amountInformation', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone',
		// })
		// 	.then(response => {
		// 		console.log(response);
		// 		// NProgress.done();
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

	componentWillMount(){
        console.log('1')
    }

	componentDidMount(){
		console.log('2')	
		// console.log(ReactDOM.findDOMNode(this.node));
		// NProgress.start();

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
				<LifeCycle  a='t1' />
				<TestHoc test={123}/>
				<LifeCycle  a='t2' />
					<Button type="primary" onClick={this.go} id='t' ref={node => this.node = node}>Primary</Button>
					<Button onClick={this.go1} >Defau</Button>
					{
						
						this.state.arr.map(i=>(
							<div>
							{/* <img  height={200} width={200} src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"/> */}
							<LazyImage
								src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
								alt=""
								placeholder={({ imageProps, ref }) => {
									return <img ref={ref} src={img} alt='' height={200} width={200}/>;
								}}
								actual={({ imageProps }) => <img {...imageProps} height={200} width={200}/>}
							/>
							</div>
						))
					}
					{/* <LazyLoad height={200} width={200}>
						<img height={200} width={200} src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
					</LazyLoad> */}
					<LazyImage
						src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
						alt=""
						placeholder={({ imageProps, ref }) => {
							return <img ref={ref} src={img} alt='' height={200} width={200}/>;
						}}
						actual={({ imageProps }) => <img {...imageProps} height={200} width={200}/>}
					/>
					<LazyImage
						src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg"
						alt=""
						placeholder={({ imageProps, ref }) => {
							return <img ref={ref} src={img} alt='' height={200} width={200}/>;
						}}
						actual={({ imageProps }) => <img {...imageProps} height={200} width={200}/>}
					/>
					
					
				</div>
			</div>
		);
	}
}

export default Login;
