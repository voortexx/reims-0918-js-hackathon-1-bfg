import React from "react";
import { CardDeck, Button } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies, backButton }) => {
  return (
    <React.Fragment>
      <CardDeck className="justify-content-center">
        {myCandies.map((oneCandy, index) => (
          <OneCandy key={oneCandy[0].id + index} oneCandy={oneCandy} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
