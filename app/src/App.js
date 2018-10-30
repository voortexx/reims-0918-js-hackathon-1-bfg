import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import getRandomNumber from "./getRandomNumber";

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
        <p>Test</p>
      </div>
    );
  }
}

export default App;
