import React, { Component } from 'react';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id:0, name:'Chetan', age: 26 },
      {id:1, name:'Dharmil', age: 25 },
      {id:2, name:'Agnish', age: 21 }
    ],
    otherState: 'Cool yeah...',
    showPerson: false
  }

 deletePersonHandler = (personIndex) => {
  //  This will splice the object and copy the data in new object. (One way)
    // const persons = this.state.persons.splice();
  // Or

  const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({ persons : persons })
 };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  nameChangeHandler = (event,id) => {
    console.log("Event-->",event);
    console.log("ID-->",id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons =  [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});

  };
  render() {
    let persons = null;
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
    if(this.state.showPerson) {
      persons = (
        <div>
          {/* {this.state.persons.map((person,index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click = {() => this.deletePersonHandler(index)}
                changed = {(event) => {this.nameChangeHandler(event,index)}}/> );
          })} */}
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h3>
          _________________ Wellcome To React App _________________
        </h3>
        <p className={classes.join(' ')}>
          This Is Workingggg haaaaaa !
        </p>
        <button
          onClick={this.togglePersonHandler }
          style={style}
        > Switch Name</button>
        {persons}
      </div>
      </StyleRoot>
    );
  };
}

export default Radium(App);
