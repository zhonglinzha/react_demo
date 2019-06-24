/* eslint-disable */
import React, {Component} from 'react';
import HOC from './hoc2';

class Page1 extends Component{
	state = {
		a : 1,
	}

	getChange = e => {

		this.setState({
			a : e.currentTarget.value
		});
		this.props.test = 9;
	}

  render() {

		console.log(this.props)
	return (
			<div>
				<input value={this.state.a} onChange={e=> this.getChange(e)}/>
				<div>{this.props.test}</div>
		</div>)
  }
}

export default Page1;