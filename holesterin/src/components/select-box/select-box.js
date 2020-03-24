import React from 'react';
import  { calc }   from '../calculator/calculator';
import './select-box.css';

 

const SelectBox = ({id, values}) => {
    const elems = values.map((el,i) => {
        return (
            <option onClick={() => calc({id, el}) } key={i}>{el}</option>
        )
    });
 
    return (
        <div className="select">
            <select>{elems}</select>
        </div>
    )
  
}

export default SelectBox;