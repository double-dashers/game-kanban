import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import axios from "axios";

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
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=4b0b80a25416456b93cb6339ad40fefc&search=${encodeURI(
        name
      )}`
    );
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
              <Card>
                <Card.Img style={{height: '20vh'}} variant="top" src={game.background_image} />
                <Card.Body style={{overflow: 'auto', maxHeight: '35vh'}}>
                  <Card.Title>{game.name}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
