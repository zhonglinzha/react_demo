import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class Login extends Component {

    constructor(props){
        super(props);
        console.log(this);
        
    }

    toHome = () => {
        const { router } = this.props;
        const { loginAction } = this.props.actions;

            loginAction({login: 4});
        
        // router.push({
        //     pathname: 'home',
        //     query: {
        //         title:1,
        //         time:2,
        //         text:3
        //     },
        // });
    }

    render(){

        const { login } = this.props.loginReducer; 

        return (
            <div>
                <h1>{login}</h1>
                <div onClick={this.toHome}>跳转</div>

            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
  )(Login)

    
