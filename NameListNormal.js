import React from 'react';

function NameList() {
  const names = ['shreya','datta'];
  return(
    <div>
      name list
      <h3>Name0 :{names[0]}</h3>
      <h3>Name1 :{names[1]}</h3>
    </div>
  );
}
export default NameList;

// -----------------------------


import React from 'react';

function NameList() {
  const names = ['shreya','datta'];
  return(
    <div>
      name list
      {
        names.map(name => <h3>{ name }</h3> )
      }
      <h3>Name0 :{names[0]}</h3>
      <h3>Name1 :{names[1]}</h3>
    </div>
  );
}
export default NameList;

//--------------------------------------------
import React from 'react';

function NameList() {
  const names = ['shreya','datta'];
  const nameList = names.map(name => <h3>{ name }</h3>)
  return(
    <div>
      {nameList}
      {names[0]}
    </div>
  );
}
export default NameList;

// ----------------------------------------
import React from 'react';

function NameList() {
  const names = [
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
  const nameList = names.map(p => <h3>{ p.firstName }</h3>)
  return(
    <div>
      {nameList}
    </div>
  );
}
export default NameList;