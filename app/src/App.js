import React, { Component } from "react";
import { Container } from "reactstrap";

import HomeButtons from "./HomeButtons";
import Header from "./Header";
import Footer from "./Footer";
import getRandomNumber from "./getRandomNumber";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresses: [],
      candiesList: [],
      adressesAndCandies: [],
      myCandies: []
    };
  }

  componentDidMount() {
    this.callApiAdresses();
    this.callApiCandies();
  }

  callApiAdresses() {
    fetch(
      `https://api-adresse.data.gouv.fr/search/?q=Reims&type=street&postcode=51100&lat=49.257087&lon=4.019713&limit=20`
    )
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        data.used = false;
        this.setState({
          adresses: { data }
        });
      });
  }

  callApiCandies() {
    fetch(`https://fr-en.openfoodfacts.org/category/candies.json`)
      .then(results => results.json()) // conversion du résultat en JSON
      .then(data => {
        data.used = false;
        this.setState({
          candiesList: { data }
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <HomeButtons />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
