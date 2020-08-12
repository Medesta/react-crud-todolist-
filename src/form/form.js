import React from 'react';
import './form.css';


const form = (props) => {
    return (
        <div>
            <div>
                <input value={props.Name}  name="Name" onChange={props.onChange} type="text" />
            </div>
            <div>
                <input value={props.date} name="Date" onChange={props.onChange} type="text" disabled/>
            </div>
            <div>
                <textarea value={props.des} name="description" onChange={props.onChange} rows="3">
                
                </textarea>
            </div>
        </div>
    )
}
export default form;

