import React from 'react';
import Person from './Person.css'
const person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}> Hieee I am the {props.name} and {props.age} year old </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.value}/>
    </div>
  );
}

export default person;