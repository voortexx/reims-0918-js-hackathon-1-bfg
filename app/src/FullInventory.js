import React from "react";
import { CardDeck, Button, Col } from "reactstrap";
import OneCandy from "./OneCandy";

const CandiesList = ({ fullBag, backButton }) => {
  return (
    <React.Fragment>
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
        <h2 style={{ color: "#fff" }}>Your Inventory is Empty</h2>
      )}
    </React.Fragment>
  );
};

export default CandiesList;
