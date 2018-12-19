import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  return (
    <div className="personWrapper">
      <p onClick={props.click}> Hieee I am the {props.name} and {props.age} year old </p>
      <p> {props.children} </p>
      <input type="text"
        onChange={props.changed}
        value={props.name}/>
    </div>
  );
}

export default Radium(person);