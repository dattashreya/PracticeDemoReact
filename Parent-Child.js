import React from 'react';
import Child from './Child';

// parent component
function Parent() {
  const parentData = 'parent data';
  const user = {
    id: 1,
    name: 'hello shreya',
  };
  return (
    <div>
      <Child message={parentData} userInfo={user} />
    </div>
  );
}
export default Parent;


// ------------------------------------ Child js -------------------------------
import React from 'react';

// child component
function Child({message, userInfo}) {
  return (
    <div>
      message:  {message}
      <br />
      userInfo: {userInfo.id} - {userInfo.name}
    </div>
  );
}
export default Child;
