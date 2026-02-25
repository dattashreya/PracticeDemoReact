import React from "react";

export default class World extends React.Component {
  render() {
    return(
    <>
      <h3>hello world </h3>
      <span>
        Prop name - {this.props.name}
      </span>
    </>);
  }
}