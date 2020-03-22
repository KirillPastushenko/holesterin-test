import React from 'react';
import './radio-buttons.css';

const RadioButtons = ({id, values}) => {
    const elems = values.map((el,i) => {
        const name = 'answer-'+id;
        return (
            <label key={i} className="radio">
                <input type="radio" name={name}/> {el} 
            </label>
        )
    });
    return (
        <div className="control">{elems}</div>
    )
  
}

export default RadioButtons;