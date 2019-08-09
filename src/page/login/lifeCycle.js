/* eslint-disable */

import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class LifeCycle extends Component {
	constructor(props) {
		super(props);
    }
    
    componentWillMount(){
        console.log('3--->',this.props.a)
    }

    componentDidMount(){
        console.log('4---->',this.props.a)
    }

    componentWillReceiveProps(){
        // console.log('3')
    }

    shouldComponentUpdate(){
        // console.log('4')
    }

    componentWillUpdate(){
        // console.log('5')
    }

    componentDidUpdate(){
        // console.log('6')
    }

    componentDidCatch(){
        // console.log('7')
    }

	render() {
        // console.log('8')
		return (
			<div>
                123{this.props.a}
                {this.props.children}
			</div>
		);
	}
}

export default LifeCycle;
