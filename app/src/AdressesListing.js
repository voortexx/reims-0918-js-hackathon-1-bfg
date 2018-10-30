import React, { Component } from "react";
import Adresses from "./Adresses";
import { Container, CardDeck, Button } from "reactstrap";

const AdressesListing = props => (
  <div>
    <Button onClick={() => props.backButton()}>Retour</Button>
    <CardDeck>
      {props.adressesList.map(oneAdress => (
        <Adresses
          key={oneAdress.properties.id}
          selectCandy={props.selectCandy}
          adresseInfos={oneAdress}
        />
      ))}
    </CardDeck>
  </div>
);

export default AdressesListing;
