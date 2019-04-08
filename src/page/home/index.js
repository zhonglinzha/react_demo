import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import style from './style.scss';

import { Button } from 'antd';

@connect(
    state => state,
    dispatch => ({actions: bindActionCreators(actions,dispatch)})
)
class Home extends Component {

    constructor(props){
        super(props);
        console.log(this);
    }

    onclick = ()=>{
        const { router } = this.props;
        router.push({
            pathname: 'about',
            query: {
                title:4,
                time:5,
                text:6
            },
        });
    }

    render(){
        return (
            <div>
            <h1 className={style.home}>Hom</h1>
            <Button type="primary" onClick ={this.onclick}>跳转</Button>
            </div>
        );
    }
}
export default Home;