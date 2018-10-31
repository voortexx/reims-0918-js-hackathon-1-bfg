import React from "react";
import Adresses from "./Adresses";
import CandiesList from "./CandiesList";
import { CardDeck, Button, Col, Row } from "reactstrap";

const AdressesListing = props => (
  <div>
    <Button className="chasseinit" onClick={() => props.backButton()}>
      Back
    </Button>
    <Row>
      <Col xs="10">
        <CardDeck>
          {props.adressesList.map(oneAdress => (
            <Adresses
              key={oneAdress.properties.id}
              selectCandy={props.selectCandy}
              adresseInfos={oneAdress}
            />
          ))}
        </CardDeck>
      </Col>
      <Col xs="2">
        <CandiesList keepMyBag={props.keepMyBag} myCandies={props.myCandies} />
      </Col>
    </Row>
  </div>
);

export default AdressesListing;
