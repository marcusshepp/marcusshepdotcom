import React, { Component } from 'react'

import ajax from '../act/ajax';


export default class Body extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
        }
    }

    componentWillMount(){
        ajax("GET", "api/articles/")
        .then(function(articles){ 
            this.setState({ articles });
        }.bind(this), 
        function(error){
            console.log("REJECT");
            console.log(error); 
        });
    }

    render(){
        console.log(this.state);
        return (
            <div>
                { this.state.articles.map((article) => { 
                    let t = article.title;
                    return (
                     <div key={ t }>{ t }</div>
                     );
                }) }
            </div>        
        );
    }
}
