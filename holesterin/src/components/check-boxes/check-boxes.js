import React  from 'react';
import  { calc }  from '../calculator/calculator';
import './check-boxes.css';


const CheckBoxes = ({id, values}) => {
    const elems = values.map((el,i) => {
        return (
            <label key={i} className="checkbox"><input onChange={() => calc({id, el}) } type="checkbox"/>{el}</label>
        )
    }); 
 
    return (
        <div>{elems}</div>
    )
  
}

export default CheckBoxes;