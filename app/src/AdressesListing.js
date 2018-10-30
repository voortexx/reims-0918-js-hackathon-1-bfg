import React, { Component } from "react";
import Adresses from "./Adresses";
import { Container } from "reactstrap";

const AdressesListing = props => (
  <div>
    {props.adressesList.map(oneAdress => (
      <Adresses adresseInfos={oneAdress} />
    ))}
  </div>
);

export default AdressesListing;
