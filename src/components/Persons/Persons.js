import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside the constructor');
  }

  componentWillMount() {
    console.log('[Persons.js] inside the componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside the componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside the componentWillReciveProps()',nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside the shouldComponentUpdate()',nextProps, '|----->',nextState);
    return nextProps.persons !== this.props.persons;
  }


  render() {
    console.log('[Persons.js] inside the render()');
    return this.props.persons.map((person,index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click = {() => this.props.clicked(index)}
        changed = {(event) => {this.props.changed(event,index)}}/>
      });
  }
}

export default Persons;