import React from 'react';
import Aux from '../../hoc/Aux';
import Radium from 'radium';

const cockpit = (props) => {
  const classes = [];
  const style = {
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid #cfcfcf',
    padding: '10px',
    cursor:'pointer',
    outline: 'none',
    marginTop: '10px',
    ':hover' : {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }
    if(props.showPerson) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }

  if(props.persons.length <= 2) {
    classes.push('red');
  }

  if(props.persons.length <= 1) {
    classes.push('bold');
  }

  return(
    <Aux>
      <h2>{props.title}</h2>
      <h3>_________________ Wellcome To React App _________________</h3>
      <p className={classes.join(' ')}>This Is Workingggg haaaaaa !</p>
      <button
        onClick={props.clicked }
        style={style}> Switch Name</button>
    </Aux>
    // <Text>This is some text</Text>
  );
}

export default Radium(cockpit);