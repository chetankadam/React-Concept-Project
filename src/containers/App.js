import React, { Component } from 'react';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
  if(persons.length >= 1) {
    return true;
  } else {
    alert("List will be emplty! Are you sure ");
  }
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
    if(this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <StyleRoot>
      <div className="App">
      <Cockpit
        showPerson={this.state.showPerson}
        persons = {this.state.persons}
        clicked = {this.togglePersonHandler}
        />
        {persons}
      </div>
      </StyleRoot>
    );
  };
}

export default Radium(App);
