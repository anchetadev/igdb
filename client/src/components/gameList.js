import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../styles/gameList.css"

export default class gameList extends Component {
  render() {
    const gameElems = this.props.stategames.map((game, index) => (
      // <Card className="bg-dark text-white">
      //   {/* <Card.Img alt="Card image" /> */}
      //   <Card.ImgOverlay>
      //     <Card.Title>{game.name}</Card.Title>
      //     <Card.Text>{game.summary}</Card.Text>
      //     <Card.Text>Rating: {Math.floor(game.rating)}</Card.Text>
      //   </Card.ImgOverlay>
      // </Card>
      
      <Card className="text-center" key = {index}>
        <Card.Header>{index +1}</Card.Header>
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>
            {game.summary}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Rating:{game.rating}</Card.Footer>
      </Card>
    ));
    return <div >{gameElems}</div>;
  }
}
