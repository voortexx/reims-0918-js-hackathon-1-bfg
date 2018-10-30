import React from "react";
import { CardDeck, Button } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies }) => {
  return (
    <React.Fragment>
      <CardDeck className="justify-content-center">
        {myCandies.map(oneCandy => (
          <OneCandy oneCandy={oneCandy} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
