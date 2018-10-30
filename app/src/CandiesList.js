import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const CandiesList = ({ candies }) => {
  return (
    <div>
      <Card className="shadow">
        <CardImg src={candies.image_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{candies.product_name}</CardTitle>
          <CardText>{candies.brands}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandiesList;
