import React from "react";
import Adresses from "./Adresses";
import CandiesList from "./CandiesList";
import { CardDeck, Button, Col, Row } from "reactstrap";
import { Spring } from "react-spring";

const AdressesListing = props => (
  <div>
    <Button className="chasseinit" onClick={() => props.backButton()}>
      Back
    </Button>
    <h3 className="playerName">{props.playerName}, be aware of the witch!</h3>
    <Row>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        {styles => (
          <Col style={styles} xs="10">
            <CardDeck>
              {props.adressesList.map(oneAdress => (
                <Adresses
                  key={oneAdress.properties.id}
                  selectCandy={props.selectCandy}
                  adresseInfos={oneAdress}
                  witchCall={props.witchCall}
                />
              ))}
            </CardDeck>
          </Col>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        {styles => (
          <Col style={styles} xs="2">
            <CandiesList
              keepMyBag={props.keepMyBag}
              myCandies={props.myCandies}
            />
          </Col>
        )}
      </Spring>
    </Row>
  </div>
);

export default AdressesListing;
