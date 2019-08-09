import React, { Component } from 'react';
// import Hoc from './hoc';


// @Hoc
class TestHoc extends Component {


    componentWillMount(){
        console.log('5')
    }

    componentDidMount(){
        console.log('6')
    }

    render(){
        return (<div>123</div>)
    }


}

export default TestHoc;