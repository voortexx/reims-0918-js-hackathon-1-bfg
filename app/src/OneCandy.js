import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const OneCandy = props => {
  return (
    <div>
      <Card>
        {props.oneCandy[0].image_url ? (
          <div style={{ overflow: "hidden", maxHeight: "200px" }}>
            <CardImg
              className="img-fluid"
              height="150px"
              top
              src={props.oneCandy[0].image_url}
              alt="Card image cap"
            />
          </div>
        ) : (
          <i className="fas fa-ghost fa-3x pt-4" />
        )}
        <CardBody>
          <CardTitle>{props.oneCandy[0].product_name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default OneCandy;
