import React from 'react';
import './input-text.css';

const InputText = ({ed}) => {
    return (
        <div className="field">
            <div className="control">
                <input className="input is-medium" type="text" placeholder=""/>
                <span>{ed}</span>
            </div>
        </div>
    )
}
export default InputText;
