import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import Body from './components/body';
import ajax from './act/ajax';


class Blog extends Component {
    render(){
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

render(<Blog />, document.getElementById("app"));
