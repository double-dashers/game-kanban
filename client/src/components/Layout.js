import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div style={{height:'8vh'}}>Header goes here</div>
      <div style={{height: '100vh'}}>Children container {children}</div>
    </div>
  );
};

export default Layout;
