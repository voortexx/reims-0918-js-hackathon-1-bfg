import React from "react";
import { CardDeck } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies }) => {
  return (
    <React.Fragment>
      {myCandies.length > 0 && <h2>Bag Items: {myCandies.length}</h2>}
      <CardDeck className="justify-content-center">
        {myCandies.map((oneCandy, index) => (
          <OneCandy key={index} oneCandy={oneCandy} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
