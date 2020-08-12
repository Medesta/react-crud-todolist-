import React from 'react';
import './card.css';
import moment from 'moment';

const Card = (props) =>{
    return(
           <div id={props.id } className="card">
               <div>
                    <p>Task name : {props.Name}</p>
                    <p>Date: {moment(props.Date).format("DD-MM-YYYY hh:mm a")}</p>
                    <p>Description: {props.Des}</p>
               </div>
               <div className="buttons">
                    <button onClick={props.onClick}>Edit</button>
                    <button onClick={props.onDel}>Del</button>
               </div>
           </div> 
    )
}
export default Card