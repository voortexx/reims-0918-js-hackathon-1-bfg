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
            <Col xs="2">
              <CardTitle>{props.adresseInfos.houseNumber}</CardTitle>
            </Col>
            <Col xs="5">
              <CardSubtitle>{props.adresseInfos.properties.name}</CardSubtitle>

              <CardText>
                {props.adresseInfos.properties.postcode}{" "}
                {props.adresseInfos.properties.city}
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Adresses;
