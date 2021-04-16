import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <div>
        Container {children}
      </div>
    </div>
  );
};

export default Layout;
