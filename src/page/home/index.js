import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';


@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
)
class Home extends Component {

    constructor(props){
        super(props);
        console.log(this.props.location.query);
    }

    render(){
        return (
            <div>
                <h1>Hom</h1>
            </div>
        );
    }
}
export default Home;