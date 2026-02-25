import React from "react";
import MyButton from "./MyButton";
import {Greet} from "./comps/Greet";

export default class World extends React.Component {
  render() {
    return(
      <>
        <h3>some text: {this.props.name}</h3>
        <MyButton />
        <Greet />
      </>
    );
  }
}
