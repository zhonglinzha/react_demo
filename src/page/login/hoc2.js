import React from 'react';

const HOC = WrappedComponent => class extends WrappedComponent {
	constructor(props) {
		super(props);
		this.state = {
			b: 4,
		};
	}

	componentWillMount() {
		// console.log('---------1-----', this.props);
		this.props.test = 0;
	}

	componentDidMount() {
		console.log('---------2');
	}

	componentWillReceiveProps() {
		console.log('---------3');
	}

	componentWillUpdate() {
		console.log('---------4');
	}

	componentDidUpdate() {
		console.log('---------5');
	}

	componentWillUnmount() {
		console.log('---------6');
	}

	render() {
		const elementsTree = super.render();
		return elementsTree;
	}
};

export default HOC;
