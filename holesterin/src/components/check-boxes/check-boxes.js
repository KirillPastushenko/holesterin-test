import React  from 'react';
import './check-boxes.css';


const CheckBoxes = ({id, values}) => {
    const elems = values.map((el,i) => {
        return (
     
            <label key={i} className="checkbox"><input type="checkbox"/>{el}</label>
        )
    }); 
 
    return (
        <div>{elems}</div>
        
    )
  
}

export default CheckBoxes;