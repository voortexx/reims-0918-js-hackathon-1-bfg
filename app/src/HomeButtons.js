import React from "react";
import { Button, Row } from "reactstrap";

const HomeButtons = props => {
  return (
    <Row>
      <Button onClick={() => props.tabsOpeningFunction("adresse")}
      color="primary">
        <div id="word">
          <div id="glitches">
            <span id="main">Adresses</span>
            <div id="letters">
              <span class="letter">A</span>
              <span class="letter">d</span>
              <span class="letter">r</span>
              <span class="letter">e</span>
              <span class="letter">s</span>
              <span class="letter">s</span>
              <span class="letter">e</span>
              <span class="letter">s</span>
            </div>
          </div>
        </div>
      </Button>

      <Button onClick={() => props.tabsOpeningFunction("inventaire")} 
      color="primary">
        <div id="word">
          <div id="glitches">
            <span id="main">Inventory</span>
            <div id="letters">
              <span class="letter">I</span>
              <span class="letter">n</span>
              <span class="letter">v</span>
              <span class="letter">e</span>
              <span class="letter">n</span>
              <span class="letter">t</span>
              <span class="letter">o</span>
              <span class="letter">r</span>
              <span class="letter">y</span>
            </div>
          </div>
        </div>
      </Button>
    </Row>
  );
};

export default HomeButtons;
