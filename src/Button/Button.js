import React from 'react';
import './button.css';

const Button = (props) =>{
    return(
        <button type="button" onClick={props.onClick} >
            {props.name}
        </button>
    )
}
 export default Button;