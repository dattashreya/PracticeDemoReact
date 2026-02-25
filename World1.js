import React, { Component } from "react";
import MyButton from "./MyButton";
import Greet from "./comps/Greet";
import Welcom from "./comps/Welcom";

// in Class component, 'this' keyword is YES used
export default class World extends Component {
  render() {
    return(
      <div>
        <h3>some text: {this.props.name}</h3>
        {/* <MyButton />
        <Greet /> */}
        <Welcom name="Shree" lastName="Roy">
          <p>some message</p>
        </Welcom>
        <Welcom name="Shreya" lastName="Datta"> 
          <button>Click me</button>
        </Welcom>
        <Welcom name="Shree" lastName="Roy"/>
      </div>
    );
  }
}
