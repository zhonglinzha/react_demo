import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';


@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
)
class About extends Component {

    render(){
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
