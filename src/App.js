import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name:'Chetan', age: 26 },
      { name:'Dharmil', age: 25 },
      { name:'Agnish', age: 21 }
    ],
    otherState: 'Cool yeah...',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    console.log("Event Object",this);
    this.setState({
      persons: [
        {name:newName, age: 26 },
        { name:'Dharmil', age: 25 },
        { name:'Agnish', age: 27 }
      ]
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:'Chetan', age: 26 },
        { name:event.target.value, age: 25 },
        { name:'Agnish', age: 27 }
      ]
    })
  };
  render() {
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name} age={person.age}
              />
            )
          })}
          {/* <Person click={this.switchNameHandler.bind(this,'Swheta')} name={this.state.person[0].name} age={this.state.person[0].age} >My Hobbies: Riding </Person>
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this,'Max..')}
            changed={this.nameChangeHandler}
          />
          <Person name={this.state.person[2].name} age={this.state.person[2].age}/> */}
        </div>
      );
    }
    return (
      <div className="App">
        <button onClick={this.togglePersonHandler }>Switch Name</button>
        {persons}
      </div>
    );
  };
}

export default App;
