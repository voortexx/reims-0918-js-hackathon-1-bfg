import React from "react";
import { CardDeck } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies }) => {
  return (
    <React.Fragment>
      <CardDeck className="justify-content-center">
        {myCandies.map((oneCandy, index) => (
          <OneCandy oneCandy={oneCandy} key={index} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
