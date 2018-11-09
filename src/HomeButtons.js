import React from "react";
import { Button, Row } from "reactstrap";
import { Spring } from "react-spring";

const HomeButtons = props => {
  return (
    <Row className="homenav justify-content-center">
      <Spring
        from={{ opacity: 0, transform: "translate3d(-150px,0,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        {styles => (
          <Button
            style={styles}
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
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(-150px,0,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        delay={200}
      >
        {styles => (
          <Button
            style={styles}
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
                <span id="main2">Inventory</span>
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
        )}
      </Spring>
    </Row>
  );
};

export default HomeButtons;
