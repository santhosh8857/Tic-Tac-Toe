import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import "./App.css";
import Icons from "./components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  //function to update the icon based on the card click
  const changeItem = (itemNumber) => {
    // ending the game and allowing the players to click further
    if (endMessage) {
      return toast({ endMessage }, { type: "success" });
    }

    // checking the card, if it is empty then change to cross or circle
    // if it is not empty then we need to provide the tostify (Already filled)
    if (itemArray[itemNumber] === "empty") {
      // initially the isCross will be false(means the player 1 will be take the circle)
      // if the iscross is false assign circle else cross
      itemArray[itemNumber] = isCross ? "cross" : "circle";

      // setting it to true so that the player 2 will take the cross (to toggle b/w the players)
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }
    // whenever the change is happening calling this function to check the winner
    checkWinner();
  };
  return (
    <Container>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <h1 className="text-white text-center">TIC TAC TOE Game</h1>

          {/* Showing the status */}
          {endMessage ? (
            <h1 className="text-white text-center">{endMessage}</h1>
          ) : (
            <h1 className="text-white text-center">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}

          <div className="grid">
            {itemArray.map((item, key) => {
              return (
                // On clicking the card then it need to trigger the changeItem event to change the icon of the card displayed
                <Card
                  key={key}
                  onClick={() => {
                    changeItem(key);
                  }}
                >
                  <CardBody>
                    <Icons item={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
