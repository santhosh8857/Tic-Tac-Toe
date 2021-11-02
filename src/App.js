import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import "./App.css";
import Icons from "./components/Icons";

// array for the cards with empty string
// fill function will automatically add the required data in the all indexes
const itemArray = new Array(9).fill("empty");

const App = () => {
  // endMessage
  const [endMessage, setEndMessage] = useState("");
  // to check(toggle) the cross
  const [isCross, setIsCross] = useState(false);

  const checkWinner = () => {
    // checking the empty, if all the blocks are not empty then the game will be draw
    if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setEndMessage("DRAW");
    } else if (
      // checking the row 1
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setEndMessage(`${itemArray[0]} wins the game`);
    } else if (
      // checking the row 2
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setEndMessage(`${itemArray[3]} wins the game`);
    } else if (
      // checking the row 3
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setEndMessage(`${itemArray[6]} wins the game`);
    } else if (
      // checking the column 1
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setEndMessage(`${itemArray[0]} wins the game`);
    } else if (
      // checking the column 2
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setEndMessage(`${itemArray[1]} wins the game`);
    } else if (
      // checking the column 3
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setEndMessage(`${itemArray[2]} wins the game`);
    } else if (
      // checking the diagonal 1
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setEndMessage(`${itemArray[0]} wins the game`);
    } else if (
      // checking the diagonal 2
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setEndMessage(`${itemArray[2]} wins the game`);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>TIC TAC TOE Game</h1>
          <div className="grid">
            {itemArray.map((item, key) => {
              return (
                <Card key={key}>
                  <CardBody>
                    <Icons item={item} />
                  </CardBody>
                </Card>
              );
            })}
            {checkWinner()}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
