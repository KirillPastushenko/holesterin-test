import React from 'react';
import { calc } from '../calculator/calculator';
import './radio-buttons.css';



const RadioButtons = ({id, values, child}) => {
    const elems = values.map((el,i) => {
        const name = 'answer-'+id;
        return (
            <label key={i} className="radio">
                <input type="radio" onChange={() => calc({id, el}) } name={name}/> {el} 
            </label>
        )
    });
    return (
        <div className="control">{elems}</div>
    )
}

 
 
  export default RadioButtons;