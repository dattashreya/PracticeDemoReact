import React, { Component } from 'react';
import './style.css';
import React, {  Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 0
    }
  }
  subsc() {
    this.setState((prevState) => ({
      message: prevState.message+1 
    }))
  }
  render() {
    return (
      <div>
        <h4>Count - {this.state.message}</h4>
        <button onClick={()=> this.subsc()}>click me</button>
      </div>
    );
  }
}


