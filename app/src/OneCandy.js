import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const OneCandy = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="30%"
          src={props.oneCandy[0].image_url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.oneCandy[0].product_name}</CardTitle>
          <CardText>{props.oneCandy[0].brands}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default OneCandy;
