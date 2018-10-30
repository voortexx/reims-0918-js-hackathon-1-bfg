import React, { Component } from "react";
import { Container, Button } from "reactstrap";

import HomeButtons from "./HomeButtons";
import Header from "./Header";
import Footer from "./Footer";
import Adresses from "./Adresses";
import getRandomNumber from "./getRandomNumber";
import CandiesList from "./CandiesList";
import AdressesListing from "./AdressesListing";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresses: [],
      candiesList: [],
      adressesAndCandies: [],
      myCandies: [],
      huntingOpen: false
    };
  }

  componentDidMount() {
    this.callApiAdresses();
    this.callApiCandies();
  }

  callApiAdresses() {
    for (let i = 0; i < 20; i++) {
      fetch(
        `https://api-adresse.data.gouv.fr/search/?q=Reims&postcode=51100&limit=20`
      )
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          data.features.map(
            singleData => (
              (singleData.candiesHouse = []),
              (singleData.houseNumber = getRandomNumber(100))
            )
          );
          this.setState({
            adresses: { data }
          });
        });
    }
  }

  callApiCandies() {
    fetch(`https://fr-en.openfoodfacts.org/category/candies.json`)
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        this.setState({
          candiesList: { data }
        });
      });
  }

  candiesAttribution() {
    const listAdresses = this.state.adresses.data.features;
    listAdresses.map(oneAdress => {
      const candiesHouse = [];
      for (let j = 5; j > 0; j--) {
        const randomN = getRandomNumber(20);
        let oneCandy = this.state.candiesList.data.products[randomN];
        candiesHouse.push({ ...oneCandy });
      }
      oneAdress.candiesHouse = candiesHouse;
    });
    this.setState({
      huntingOpen: true,
      adressesAndCandies: listAdresses
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          {!this.state.huntingOpen ? (
            <Button onClick={() => this.candiesAttribution()}>
              Lancer la chasse
            </Button>
          ) : (
            <HomeButtons />
          )}
        </Container>
        {this.state.huntingOpen && (
          <AdressesListing adressesList={this.state.adresses.data.features} />
        )}
        {this.state.huntingOpen && (
          <CandiesList candies={this.state.candiesList.data.products[0]} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
