import React, {Component} from 'react';
import './Person.css';
import Radium from 'radium';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside the constructor');
  }

  componentWillMount() {
    console.log('[Person.js] inside the componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside the componentDidMount()');
  }

  render() {
  console.log('[Person.js] inside the Render()');
  return (
    <div className="personWrapper" style= {style}>
      <p onClick={this.props.click}> Hieee I am the {this.props.name} and {this.props.age} year old </p>
      <p> {this.props.children} </p>
      <input type="text"
        onChange={this.props.changed}
        value={this.props.name}/>
    </div>
    )}
  }

  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
}

export default Radium(Person);