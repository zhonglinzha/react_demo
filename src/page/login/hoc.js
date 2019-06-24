/* eslint-disable */
import React, {Component} from 'react';

const loading = WrappedComponent => class extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            b :4
        }
    }

    componentWillMount(){
        console.log('---------1',this.props);
    }

    componentDidMount(){
        console.log('---------2');

    }

    componentWillReceiveProps(){
        console.log('---------3');

    }

    

    componentWillUpdate(){
        console.log('---------4');

    }

    componentDidUpdate(){
        console.log('---------5');
    }

    componentWillUnmount(){
        console.log('---------6');
    }

    getChange = e => {
		this.setState({
			b : e.currentTarget.value
		});
	}

	render() {
        console.log('---------7');
		// if (!this.props) {
            return (
            <div>
				<input value={this.state.b} onChange={e=> this.getChange(e)}/>
				{/* <div>{this.state.b}</div> */}
                <WrappedComponent {...this.state}/>
            </div>);
		// }
		// return <wrappedComponent {...props} />;
	}
};

export default loading;
