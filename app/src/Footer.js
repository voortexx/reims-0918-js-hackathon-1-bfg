import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <Container fluid>
    <Row className="background">
      <Col sm="6">
        <img className="img" src="" alt="pumpkin" />
      </Col>
      <Col className="text-right wilders" sm="6">
        Made with <span className="heart">❤</span> by{" "}
        <a
          className="test"
          href="https://www.linkedin.com/in/fabien-raymond-41227114b/"
        >
          Fabien
        </a>{" "}
        -{" "}
        <a
          className="test"
          href="https://www.linkedin.com/in/benoît-niveau-a34ba9133/"
        >
          Benoît
        </a>{" "}
        -{" "}
        <a
          className="test"
          href="https://www.linkedin.com/in/gautier-simonin-63a191170/"
        >
          Gautier
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
