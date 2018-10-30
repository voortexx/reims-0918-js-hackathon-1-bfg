import React from "react";
import { CardDeck, Button } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies, backButton }) => {
  return (
    <React.Fragment>
      <Button onClick={() => backButton()}>Retour</Button>
      <CardDeck>
        {myCandies.map(oneCandy => (
          <OneCandy oneCandy={oneCandy} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
