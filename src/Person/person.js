import React from 'react';
import './Person.css';
import Radium from 'radium';


const person = (props) => {
  const rnd = Math.random();
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  };
  if(rnd >= 0.7 ) {
    throw new Error('Something went wrong');
  }

  return (
    <div className="personWrapper" style= {style}>
      <p onClick={props.click}> Hieee I am the {props.name} and {props.age} year old </p>
      <p> {props.children} </p>
      <input type="text"
        onChange={props.changed}
        value={props.name}/>
    </div>
  );
}

export default Radium(person);