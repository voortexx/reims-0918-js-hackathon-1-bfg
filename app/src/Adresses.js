import React from "react";
import Huntmodal from "./HuntModal";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import HuntModal from "./HuntModal";

const Adresses = props => {
  return (
    <div>
      <Card style={{ width: "450px", margin: "10px" }}>
        <CardBody>
          <Row>
            <Col xs="2">
              <CardTitle>{props.adresse.houseNumber}</CardTitle>
            </Col>
            <Col xs="5">
              <CardSubtitle>{props.adresse.properties.name}</CardSubtitle>

              <CardText>
                {props.adresse.properties.postcode}{" "}
                {props.adresse.properties.city}
              </CardText>
            </Col>
            <Col xs="5">
              <HuntModal classname="" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Adresses;
