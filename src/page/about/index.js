import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class About extends Component {

    render(){
        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
  )(About)
