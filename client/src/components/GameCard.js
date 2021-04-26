import React from "react";
import { Card } from "react-bootstrap";

const GameCard = (props) => {
  const { image, title, description } = props;
  return (
    <Card>
      <Card.Img style={{ height: "20vh" }} variant="top" src={image} />
      <Card.Body style={{ overflow: "auto", maxHeight: "35vh" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. This is a
          wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer. This is a
          wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer. This is a
          wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
