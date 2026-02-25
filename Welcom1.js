import React from "react";

const Welcom = () => {
  {/* <>
    <h4>Greeting here</h4>
    <Welcome />
  </> */}
  return React.createElement(
    'div',
     {id: 'hello', className: 'dummyClass'}, 
      React.createElement(
        'h2',
        null,
        'welcom'
      )
    
  );
}


export default Welcom;
