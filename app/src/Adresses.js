import React from "react";

import oneCandy from "./OneCandy";
import {
  Card,
  CardDeck,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg
} from "reactstrap";

class Adresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      visited: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      visited: true
    });
  }
  render() {
    return (
      <Col xs="4" className="mb-3">
        <Card>
          <CardBody>
            <Row>
              <Col xs="4">
                <CardTitle>{this.props.adresseInfos.houseNumber}</CardTitle>
              </Col>
              <Col xs="8">
                <CardSubtitle>
                  {this.props.adresseInfos.properties.name}
                </CardSubtitle>

                <CardText>
                  {this.props.adresseInfos.properties.postcode}{" "}
                  {this.props.adresseInfos.properties.city}
                </CardText>
              </Col>
              <Col xs="5">
                {!this.state.visited ? (
                  <Button onClick={this.toggle} style={{ width: "100px" }}>
                    Visit It !
                  </Button>
                ) : (
                  <h5>Already Visit</h5>
                )}
              </Col>
            </Row>
          </CardBody>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              {this.props.adresseInfos.properties.label}
            </ModalHeader>
            <ModalBody>
              <CardDeck>
                {this.props.adresseInfos.candiesHouse.map(oneCandy => (
                  <Col xs="6" key={oneCandy.id}>
                    <Card>
                      <CardImg
                        top
                        height="200px"
                        src={oneCandy.image_url}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle className="text-truncate">
                          {oneCandy.product_name}
                        </CardTitle>
                        <Button
                          onClick={() =>
                            this.props.selectCandy(
                              this.props.adresseInfos.candiesHouse[0].id
                            )
                          }
                        >
                          Choisir ce bonbon
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </CardDeck>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Fermer
              </Button>
            </ModalFooter>
          </Modal>
        </Card>
      </Col>
    );
  }
}

export default Adresses;
