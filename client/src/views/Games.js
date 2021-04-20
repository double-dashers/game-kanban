import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import axios from "axios";

const useStyles = createUseStyles({
  columns: {
    margin: "2vw",
    height: "90vh",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "2vh",
  },
});

const Games = () => {
  const classes = useStyles();
  const [games, setGames] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState([]);

  const getGames = async (name) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=4b0b80a25416456b93cb6339ad40fefc&search=${encodeURI(
        name
      )}`
    );

    setGames(response.data.results);
    setLoading(false);
  };
  const handleSearch = () => {
    setLoading(true);
    setTimeout(10000, getGames(search));
  };

  let section;
  if (!games) {
    section = <div>Search for games</div>;
  } else if (loading) {
    section = <div>Loading...</div>;
  } else {
    section = (
      <Row className={classes.row} lg={3} xs={12}>
        {games.map((game, index) => {
          return (
            <Col key={index} className={classes.columns} lg={3} xs={12}>
              <Card>
                <Card.Img variant="top" src={game.background_image} />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <>
      <Row lg={3} xs={12}>
        <Col lg={3} xs={12}>
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
