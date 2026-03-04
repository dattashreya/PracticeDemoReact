import React, { Component } from 'react';

class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
  }
  render() {
    return(
      this.state.userLoggedIn ?
      <div>user greet true</div> :
      <div>user greet false</div>
    )
  }
}
export default UserGreet;
