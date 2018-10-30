import React from "react";
import { Button, Row } from "reactstrap";

const HomeButtons = props => {
  return (
    <Row>
      <Button
        onClick={() => props.tabsOpeningFunction("adresse")}
        color="primary"
      >
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
        onClick={() => props.tabsOpeningFunction("inventaire")}
        color="primary"
      >
        {" "}
        <div id="word">
          <div id="glitches">
            <span id="main">Inventory</span>
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
