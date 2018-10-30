import React, { Component } from "react";
import Adresses from "./Adresses";
import { Container, CardDeck } from "reactstrap";

const AdressesListing = props => (
  <div>
    <CardDeck>
      {props.adressesList.map(oneAdress => (
        <Adresses key={oneAdress.properties.id} adresseInfos={oneAdress} />
      ))}
    </CardDeck>
  </div>
);

export default AdressesListing;
