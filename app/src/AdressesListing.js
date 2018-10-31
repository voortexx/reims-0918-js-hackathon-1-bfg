import React from "react";
import Adresses from "./Adresses";
import CandiesList from "./CandiesList";
import { CardDeck, Button, Col, Row } from "reactstrap";

const AdressesListing = props => (
  <div>
    <Button className="chasseinit" onClick={() => props.backButton()}>
      Back
    </Button>
    <h3 className="playerName">{props.playerName}, be aware of the witch!</h3>
    <Row>
      <Col xs="10">
        <CardDeck>
          {props.adressesList.map(oneAdress => (
            <Adresses
              key={oneAdress.properties.id}
              selectCandy={props.selectCandy}
              adresseInfos={oneAdress}
              witchCall={props.witchCall}
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
