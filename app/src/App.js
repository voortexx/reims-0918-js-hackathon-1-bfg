import React, { Component, Fragment } from "react";
import { Container, Button } from "reactstrap";

import HomeButtons from "./HomeButtons";
import Header from "./Header";
import Footer from "./Footer";
import getRandomNumber from "./getRandomNumber";
import FullInventory from "./FullInventory";
import AdressesListing from "./AdressesListing";
import witch from "./img/witch.gif";
import { Spring } from "react-spring";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresses: [],
      candiesList: [],
      adressesAndCandies: [],
      myCandies: [],
      huntingOpen: false,
      adresseOpen: false,
      myCandiesOpen: false,
      fullBag: [],
      witchPower: 0,
      witchCall: false,
      playerName: ""
    };
    this.tabsOpeningSystem = this.tabsOpeningSystem.bind(this);
    this.selectCandy = this.selectCandy.bind(this);
    this.backButton = this.backButton.bind(this);
    this.keepMyBag = this.keepMyBag.bind(this);
    this.witchCall = this.witchCall.bind(this);
    this.onPressEnterNicknameChecked = this.onPressEnterNicknameChecked.bind(
      this
    );
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
    const adressesAndCandies = listAdresses.map(oneAdress => {
      const listNumberRandom = [];
      const candiesHouse = [];
      for (let j = 5; j > 0; j--) {
        const randomN = getRandomNumber(20);
        if (!listNumberRandom.includes(randomN)) {
          listNumberRandom.push(randomN);
          let oneCandy = this.state.candiesList.data.products[randomN];
          candiesHouse.push({ ...oneCandy });
        } else j++;
      }
      return { ...oneAdress, candiesHouse };
    });
    this.setState({
      huntingOpen: true,
      adressesAndCandies
    });
  }

  tabsOpeningSystem(tabName) {
    tabName === "adresse"
      ? this.setState({
          adresseOpen: true,
          myCandiesOpen: false
        })
      : this.setState({
          adresseOpen: false,
          myCandiesOpen: true
        });
  }

  selectCandy(id) {
    let newCandy = this.state.candiesList.data.products.find(product => {
      if (product.id === id) {
        return product;
      }
    });
    this.setState({
      myCandies: [...this.state.myCandies, newCandy],
      witchPower: this.state.witchPower + 1
    });
  }

  backButton() {
    this.setState({
      adresseOpen: false,
      myCandiesOpen: false,
      witchCall: false
    });
  }

  keepMyBag() {
    let newBag = this.state.myCandies;
    this.setState({
      adresseOpen: false,
      myCandies: [],
      witchPower: 0,
      fullBag: [...this.state.fullBag, newBag]
    });
  }

  witchCall() {
    const randomN = getRandomNumber(12);
    const witchPower = this.state.witchPower;
    const result = randomN - witchPower;
    if (result < 0) {
      this.setState({
        witchCall: true,
        adresseOpen: false,
        myCandies: [],
        witchPower: 0
      });
    }
  }

  handleChangePlayerName(e) {
    this.setState({
      playerName: e.target.value
    });
  }

  onPressEnterNicknameChecked(event) {
    if (event.charCode === 13 && this.state.playerName.length > 2) {
      this.setState({ huntingOpen: true });
      this.candiesAttribution();
    }
  }

  render() {
    return (
      <div className="App font">
        <Header />
        <Container fluid>
          {!this.state.witchCall ? (
            !this.state.huntingOpen ? (
              <Fragment>
                <Spring
                  from={{ opacity: 0, transform: "translate3d(0,-40px,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                >
                  {props => (
                    <div style={props} className="form-group">
                      <input
                        type="text"
                        onChange={e => this.handleChangePlayerName(e)}
                        onKeyPress={event =>
                          this.onPressEnterNicknameChecked(event)
                        }
                        value={this.state.playerName}
                        placeholder="Your nickname"
                      />
                    </div>
                  )}
                </Spring>
                <br />
                {this.state.playerName.length > 2 && (
                  <Spring
                    from={{ opacity: 0, transform: "translate3d(-40px,0,0)" }}
                    to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  >
                    {props => (
                      <Button
                        style={props}
                        className="chasseinit"
                        onClick={() => this.candiesAttribution()}
                      >
                        Let's Hunt
                      </Button>
                    )}
                  </Spring>
                )}
              </Fragment>
            ) : (
              !this.state.adresseOpen &&
              (!this.state.myCandiesOpen && (
                <HomeButtons
                  tabsOpeningFunction={this.tabsOpeningSystem}
                  myCandies={this.state.myCandies}
                />
              ))
            )
          ) : (
            <Fragment>
              <h2>A Witch stole all your bag!</h2>
              <img src={witch} alt="witch" />
              <br />
              <Button
                className="chasseinit mt-3"
                onClick={() => this.backButton()}
              >
                Retry
              </Button>
            </Fragment>
          )}
          {this.state.adresseOpen && (
            <AdressesListing
              witchCall={this.witchCall}
              playerName={this.state.playerName}
              backButton={this.backButton}
              selectCandy={this.selectCandy}
              adressesList={this.state.adressesAndCandies}
              myCandies={this.state.myCandies}
              keepMyBag={this.keepMyBag}
            />
          )}
          {this.state.myCandiesOpen && (
            <FullInventory
              fullBag={this.state.fullBag}
              backButton={this.backButton}
            />
          )}
        </Container>
        <footer className="footer w-100">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
