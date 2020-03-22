import React from 'react';
import './select-box.css';

 

const SelectBox = ({id, values}) => {
    const elems = values.map((el,i) => {
        return (
            <option key={i}>{el}</option>
        )
    });
 
    return (
        <div className="select">
            <select>{elems}</select>
        </div>
    )
  
}

export default SelectBox;