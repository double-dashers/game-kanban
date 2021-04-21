import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  columns: {
    border: "solid red",
    margin: "2vw",
    height: "90vh",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2vh",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Row className={classes.row}>
      <Col className={classes.columns} lg={3} xs={12}>
        Backlog
      </Col>
      <Col className={classes.columns} lg={3} xs={12}>
        Playing
      </Col>
      <Col className={classes.columns} lg={3} xs={12}>
        Complete
      </Col>
    </Row>
  );
};

export default Home;
