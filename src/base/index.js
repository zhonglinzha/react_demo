import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends Component {

    render(){
        return (
            <dev>
                <h1>React</h1>
            </dev>
        );
    }

}

render(<App/>,document.getElementById('root'));

