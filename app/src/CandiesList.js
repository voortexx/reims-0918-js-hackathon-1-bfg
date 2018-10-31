import React from "react";
import { CardDeck, Button } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies, keepMyBag }) => {
  return (
    <React.Fragment>
      {myCandies.length > 0 && (
        <React.Fragment>
          <h2>Bag Items: {myCandies.length}</h2>
          <Button className="chasseinit bag" onClick={() => keepMyBag()}>
            Keep my Bag
          </Button>
        </React.Fragment>
      )}
      <CardDeck className="justify-content-center">
        {myCandies.map((oneCandy, index) => (
          <OneCandy key={index} oneCandy={oneCandy} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
