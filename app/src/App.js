import React, { Component } from "react";
import { Container } from "reactstrap";

import HomeButtons from "./HomeButtons";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <HomeButtons />
        </Container>
      </div>
    );
  }
}

export default App;
