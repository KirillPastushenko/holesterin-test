import React, {Component} from 'react';
import './input-text.css';

export default class InputText extends Component {
    render(){
        return (
            <div className="field">
                <div className="control">
                    <input className="input is-medium" type="text" placeholder=""/>
                </div>
            </div>
        )
    }
}

