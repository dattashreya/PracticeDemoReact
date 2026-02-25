import React from 'react';

const Layout = ({ children, name, lastName }) => {
  console.log(children);

  return <div className="wrapper">
    <div>
      {name} - {lastName}
    </div>

    <div>
      {children}
    </div>

  </div>;
};

export default Layout;
