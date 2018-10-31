import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const OneCandy = props => {
  return (
    <div>
      <Card>
        {props.oneCandy.image_url ? (
          <CardImg
            top
            width="30%"
            src={props.oneCandy.image_url}
            alt="Card image cap"
          />
        ) : (
          <i className="fas fa-ghost" />
        )}
        <CardBody>
          <CardTitle>{props.oneCandy.product_name}</CardTitle>
          <CardText>{props.oneCandy.brands}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default OneCandy;
