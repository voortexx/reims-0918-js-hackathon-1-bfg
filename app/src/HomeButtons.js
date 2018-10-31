import React from "react";
import { Button, Row } from "reactstrap";

const HomeButtons = props => {
  return (
    <Row className="homenav justify-content-center">
      <Button
        className="mt-2"
        onClick={() => props.tabsOpeningFunction("adresse")}
        color="primary"
      >
        <i
          style={{ height: "150px", fontSize: "150px" }}
          className="d-block fas fa-map-marker-alt mb-3"
        />
        <div id="word">
          <div id="glitches">
            <span id="main">Adresses</span>
            <div id="letters">
              <span className="letter">A</span>
              <span className="letter">d</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
              <span className="letter">s</span>
              <span className="letter">s</span>
              <span className="letter">e</span>
              <span className="letter">s</span>
            </div>
          </div>
        </div>
      </Button>
      <Button
        className="m-2"
        onClick={() => props.tabsOpeningFunction("inventaire")}
        color="primary"
      >
        <i
          style={{ height: "150px", fontSize: "150px" }}
          className="d-block fas fa-shopping-bag mb-3"
        />
        <div id="word">
          <div id="glitches">
            <span id="main2">Inventory - {props.myCandies.length}</span>
            <div id="letters">
              <span className="letter">I</span>
              <span className="letter">n</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">y</span>
            </div>
          </div>
        </div>
      </Button>
    </Row>
  );
};

export default HomeButtons;
