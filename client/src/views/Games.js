import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import GameCard from "../components/GameCard";
import API from "../util/API";

const useStyles = createUseStyles({
  columns: {
    margin: "2vw",
    display: "flex",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2vh",
    border: "solid red",
  },
});

const Games = () => {
  const classes = useStyles();
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getGames = async (name) => {
    const response = await API.findByName(name);
    setLoading(false);
    setGames(response.data.results);
  };
  const handleSearch = () => {
    setLoading(true);
    getGames(search);
  };

  let section;
  if (!loading && games.length === 0) {
    section = <Row className={classes.row}>Search for games</Row>;
  } else if (games.length > 0) {
    section = (
      <Row className={classes.row}>
        {games.map((game, index) => {
          return (
            <Col key={index} className={classes.columns} lg={3} xs={12}>
              <GameCard image={game.background_image} title={game.name} />
            </Col>
          );
        })}
      </Row>
    );
  } else {
    section = <div>Loading...</div>;
  }

  return (
    <>
      <Row className={classes.row}>
        <Col className={classes.columns} lg={3} xs={12}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </Col>
      </Row>
      {section}
    </>
  );
};

export default Games;
