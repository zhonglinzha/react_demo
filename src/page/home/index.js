import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Button } from "antd";
import style from './style.scss';

@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
)
class Home extends Component {

    constructor(props){
        super(props);
        console.log(this.props.location.query);
    };

    go = ()=>{

        this.props.router.push({
            pathname: "about",
            query: {
              title: 1,
              time: 2,
              text: 3
            }
          });
    };

    render(){
        return (
            <div>
                <h1>Hom</h1>
                <div>
          <Button type="primary" onClick={this.go} >Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
            </div>
        );
    }
}
export default Home;