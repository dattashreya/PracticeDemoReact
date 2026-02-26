import React, { Component } from 'react';
import '../style.css';

export default class EventBinding extends Component {
  eventBinding() {
    console.log('event bind  click', this);
  }
  render() {
    return (
      <div>
        <button onClick={this.eventBinding.bind(this)}>event bind click</button>
      </div>
    );
  }
}
