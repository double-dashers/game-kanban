import React from "react";
import Navmenu from "./Navmenu";
import { Container } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    // display: "flex",
    // justifyContent: "center",
  },
});

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <Navmenu />
      <Container className={classes.container} fluid>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
