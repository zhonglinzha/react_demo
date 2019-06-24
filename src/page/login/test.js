import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class Test extends PureComponent {
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

	componentWillReceiveProps(a) {
		console.log('4-----Test', a);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(nextProps, nextState);
	// 	return true;
	// }

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
		const { test } = this.props;
		return (
			<div>{test}</div>
		);
	}
}

export default Test;
