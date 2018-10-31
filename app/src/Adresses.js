import React from "react";
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
            <ModalHeader toggle={this.toggle} className="font">
              {this.props.adresseInfos.houseNumber}{" "}
              {this.props.adresseInfos.properties.label}
            </ModalHeader>
            <ModalBody className="font">
              <CardDeck>
                {this.props.adresseInfos.candiesHouse.map((oneCandy, id) => (
                  <Col xs="6" key={id}>
                    <Card>
                      {oneCandy.image_url ? (
                        <CardImg
                          top
                          width="30%"
                          src={oneCandy.image_url}
                          alt="Card image cap"
                        />
                      ) : (
                        <i className="text-center fas fa-ghost fa-5x p-5" />
                      )}
                      <CardBody>
                        <CardTitle className="text-truncate">
                          {oneCandy.product_name}
                        </CardTitle>
                        <Button
                          onClick={() => {
                            this.props.selectCandy(
                              this.props.adresseInfos.candiesHouse[0].id
                            );

                            this.toggle();
                          }}
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
              <Button className="font" color="secondary" onClick={this.toggle}>
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
