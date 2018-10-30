import React, { Component } from "react";
import Adresses from "./Adresses";
import CandiesList from "./CandiesList"
import { Container, CardDeck, Button, Col, Row } from "reactstrap";

const AdressesListing = props => (
  <div>
    <Button onClick={() => props.backButton()}>Retour</Button>
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
    <CandiesList myCandies={props.myCandies}/>
    </Col>
    </Row>
  </div>
);

export default AdressesListing;
