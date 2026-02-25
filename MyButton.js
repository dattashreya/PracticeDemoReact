import React from 'react';

const user = {
  name: 'Shreya Datta',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 70,
};
export default class MyButton extends React.Component {
  render() {
    return (
      <>
        <>
          <h1>{user.name}</h1>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
            }}
          />
        </>
      </>
    );
  }
}
