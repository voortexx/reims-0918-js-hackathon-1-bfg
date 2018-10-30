import React from "react";
import { Button, Row } from "reactstrap";

const HomeButtons = props => {
  return (
    <Row>
      <Button
        onClick={() => props.tabsOpeningFunction("adresse")}
        color="primary"
      >
        Adresses
      </Button>

      <Button
        onClick={() => props.tabsOpeningFunction("inventaire")}
        color="primary"
      >
        Inventaire
      </Button>
    </Row>
  );
};

export default HomeButtons;
