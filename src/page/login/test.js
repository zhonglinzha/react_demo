import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		console.log('1-----Test');
	}

	componentWillMount() {
		console.log('2-----Test');
	}

	componentDidMount() {
		console.log('3-----Test');
	}

	componentWillReceiveProps() {
		console.log('4-----Test');
	}

	shouldComponentUpdate() {
		console.log('5-----Test');
		return true;
	}

	componentWillUpdate() {
		console.log('6-----Test');
	}

	componentDidUpdate() {
		console.log('7-----Test');
	}

	componentWillUnmount() {
		console.log('8-----Test');
	}

	render() {
		console.log('9-----Test');
		return (
			<div>Test</div>
		);
	}
}

export default Test;
