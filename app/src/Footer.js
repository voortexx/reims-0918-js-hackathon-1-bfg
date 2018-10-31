import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <Container fluid>
    <Row>
      <Col>
        Made with <span className="pumpkin">🎃</span> by{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/fabien-raymond-41227114b/"
        >
          Fabien
        </a>{" "}
        -{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/benoît-niveau-a34ba9133/"
        >
          Benoît
        </a>{" "}
        -{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/gautier-simonin-63a191170/"
        >
          Gautier
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
