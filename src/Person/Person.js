import React from 'react';
import './Person.css';

const person = (props) => {
  
    return (
    <div className="Person">
      <p onClick={props.click}>i'm a {props.name} an i'm {props.age} years old </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}/>
    </div>
    )
};

export default person;