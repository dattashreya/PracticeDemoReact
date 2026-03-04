import React from 'react';
import Person from './Person'

// parent component
function NameList() {
  const persons = [
    {
      firstName: 'shreya',
      lastName: 'datta',
      age: 10,
      Loc: 'Konnagar'
    },
    {
      firstName: 'shree',
      lastName: 'datta',
      age: 20,
      Loc: 'Konnagar'
    }
  ];
  const nameList = persons.map(person => <Person person={person} />)
  return(
    <div>
      {nameList}
    </div>
  );
}
export default NameList;