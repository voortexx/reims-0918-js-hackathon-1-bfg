import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button
} from "reactstrap";

const Adresses = props => {
  return (
    <Col xs="4" className="mb-3">
      <Card>
        <CardBody>
          <Row>
            <Col xs="4">
              <CardTitle>{props.adresseInfos.houseNumber}</CardTitle>
            </Col>
            <Col xs="8">
              <CardSubtitle>{props.adresseInfos.properties.name}</CardSubtitle>

              <CardText>
                {props.adresseInfos.properties.postcode}{" "}
                {props.adresseInfos.properties.city}
              </CardText>
            </Col>
            <Col xs="5">
              <Button style={{ width: "100px" }}>Visit It !</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Adresses;
