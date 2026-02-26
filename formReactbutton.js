import React, { Component } from 'react';
import './style.css';
import React, {  Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Form yet to be submitted'
    }
  }
  subsc() {
    this.setState({
      message: ' thank you Form submitted'
    })
  }
  render() {
    return (
      <div>
        <form action="">
          <h3>Form</h3>
          <div>
          <label htmlFor="">user ID</label>
          <input type="text" /> </div>
          <div><label htmlFor="">password</label>
          <input type="password" /> </div>
        </form>
        <h4>{this.state.message}</h4>
        <button onClick={()=> this.subsc()}>click me</button>
      </div>
    );
  }
}


