import React from "react";
import { CardDeck, Button, Col } from "reactstrap";
import OneCandy from "./OneCandy";
import { Spring } from "react-spring";
const CandiesList = ({ fullBag, backButton }) => {
  return (
    <Spring
      from={{ opacity: 0, transform: "translate3d(-40px,0,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
    >
      {props => (
        <div style={props}>
          <Button className="chasseinit" onClick={() => backButton()}>
            Back
          </Button>
          {fullBag.length > 0 ? (
            fullBag.map((oneBag, index) => (
              <div key={index}>
                {" "}
                <h2>{index + 1}</h2>
                <h3 style={{ color: "#fff" }}>Items Session</h3>
                <CardDeck
                  style={{
                    borderBottom: "1px solid #a2ff21",
                    paddingBottom: "25px",
                    marginTop: "25px"
                  }}
                >
                  {oneBag.map((item, index) => (
                    <Col xs="3">
                      <OneCandy key={index} oneCandy={item} />
                    </Col>
                  ))}
                </CardDeck>
              </div>
            ))
          ) : (
            <h2 className="mt-3" style={{ color: "#fff" }}>
              Your Inventory is Empty
            </h2>
          )}
        </div>
      )}
    </Spring>
  );
};

export default CandiesList;
