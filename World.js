import React from "react";
import MyButton from "./MyButton";

export default class World extends React.Component {
  render() {
    return(
      <>
        <h3>some text: {this.props.name}</h3>
        <MyButton />
      </>
    );
  }
}