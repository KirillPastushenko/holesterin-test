import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/header';
import Questions from '../questions/questions';


export default class App extends Component{
    render(){
        return (
            <div className="content is-medium"> 
                <div className="container">
                    <Header/>
                    <Questions/>
                </div>
            </div> 
        )
    } 
}  