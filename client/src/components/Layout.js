import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div>Header goes here</div>
      <div>Children container {children}</div>
    </div>
  );
};

export default Layout;
