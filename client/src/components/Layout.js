import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      <Container>
        <div style={{ flexGrow: 1 }}>
          <Grid
            style={{ height: "100vh", border: "solid red" }}
            container
            spacing={3}
          >
            <Grid item xs={12}>{children}</Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
