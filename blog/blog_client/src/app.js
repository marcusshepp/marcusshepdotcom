import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import Body from './components/body';
import ajax from './act/ajax';

class Blog extends Component {
    render(){
        ajax("GET", "api/articles/");
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

render(<Blog />, document.getElementById("app"));
