import React from "react";
import Navmenu from "./Navmenu";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navmenu />
      <Container fluid>{children}</Container>
    </div>
  );
};

export default Layout;
