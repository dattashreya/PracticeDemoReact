import React from 'react';

// child component
function Person({ person }) {
  return (
    <div>
      <h3>firstName: {person.firstName}</h3>
      <h3>lastName: {person.lastName}</h3>
    </div>
  );
}
export default Person;
