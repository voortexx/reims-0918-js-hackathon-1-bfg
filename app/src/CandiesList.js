import React from "react";
import { CardDeck } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ myCandies }) => {
  return (
    <React.Fragment>
      <CardDeck className="justify-content-center">
<<<<<<< HEAD
        {myCandies.map(oneCandy => (
          <OneCandy oneCandy={oneCandy} key={
            oneCandy.id}/>
=======
        {myCandies.map((oneCandy, index) => (
          <OneCandy key={oneCandy[0].id + index} oneCandy={oneCandy} />
>>>>>>> 463414fdb7f5ebfed88a62bf82f917c809ea7c9a
        ))}
      </CardDeck>
    </React.Fragment>
  );
};

export default CandiesList;
