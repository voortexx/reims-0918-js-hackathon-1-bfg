import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} from "reactstrap";

const Adresses = props => {
  return (
    <div>
      <Card style={{ width: "450px", margin: "10px" }}>
        <CardBody>
          <Row>
            <CardTitle>{props.adresse.houseNumber}</CardTitle>
          </Row>
          <CardSubtitle>{props.adresse.properties.name}</CardSubtitle>
          <CardText>
            {props.adresse.properties.postcode}
            {props.adresse.properties.city}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Adresses;
