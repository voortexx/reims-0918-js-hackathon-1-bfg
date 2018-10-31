import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const OneCandy = props => {
  return (
    <div>
      <Card>
        {props.oneCandy.image_url ? (
          <CardImg
            height="150px"
            top
            src={props.oneCandy.image_url}
            alt="Card image cap"
          />
        ) : (
          <i className="fas fa-ghost fa-3x pt-4" />
        )}
        <CardBody>
          <CardTitle>{props.oneCandy.product_name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default OneCandy;
