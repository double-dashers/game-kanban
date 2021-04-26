import { Navbar, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  links: {
    fontSize: "medium",
    color: "whitesmoke",
    margin: "10px",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
});

const Navmenu = () => {
  const classes = useStyles();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Game-Kanban</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink
          className={classes.links}
          to="/home"
          activeStyle={{ fontWeight: "bold" }}
        >
          Home
        </NavLink>
        <NavLink
          className={classes.links}
          to="/games"
          activeStyle={{ fontWeight: "bold" }}
        >
          Games
        </NavLink>
      </Nav>
      <Button variant="outline-info">User</Button>
    </Navbar>
  );
};

export default Navmenu;
