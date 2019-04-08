import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import style from './style.scss';


@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
)
class Login extends Component {

    constructor(props){
        super(props);
        console.log(this);
        
    }

    toHome = () => {
        const { router } = this.props;
        const { loginAction } = this.props.actions;

            loginAction({login: 4});
        
        router.push({
            pathname: 'home',
            query: {
                title:1,
                time:2,
                text:3
            },
        });
    }

    render(){

        const { login } = this.props.loginReducer; 

        return (
            <div>
                <h1 className={style.title}>{login}</h1>
                <div onClick={this.toHome}>跳转</div>

            </div>
        );
    }
}

export default Login;

    
