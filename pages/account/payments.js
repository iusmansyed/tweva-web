import React from "react";
// we'll use this to import an use the vector map plugin
import dynamic from "next/dynamic";
// nodejs library that concatenates classes
import classnames from "classnames";
// used to get the current date
import moment from "moment";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
// react plugin for creating vector maps
const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false }
);
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import CardsHeader from "components/Headers/CardsHeader.js";

import { widgetEvents } from "variables/general.js";

let calendar;

let mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function Widgets() {
  const [nameOnCard, setnameOnCard] = React.useState(false);
  const [cardNumber, setcardNumber] = React.useState(false);
  const [date, setdate] = React.useState(false);
  const [ccv, setccv] = React.useState(false);
  const widgetCalendarRef = React.useRef(null);

  return (
    <>
      <CardsHeader name="Payments" parentName="Widgets" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="4">
            <Card className="bg-gradient-primary">
              <CardBody>
                <Row className="justify-content-between align-items-center">
                  <div className="col">
                    <img
                      alt="..."
                      src={require("assets/img/icons/cards/mastercard.png")}
                    />
                  </div>
                  <Col className="col-auto">
                    <div className="d-flex align-items-center">
                      <small className="text-white font-weight-bold mr-3">
                        Make default
                      </small>
                      <div>
                        <label className="custom-toggle custom-toggle-white">
                          <input defaultChecked type="checkbox" />
                          <span
                            className="custom-toggle-slider rounded-circle"
                            data-label-off="No"
                            data-label-on="Yes"
                          />
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Form className="form-primary" role="form">
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-alternative mb-3", {
                          focused: nameOnCard,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name on card"
                          type="text"
                          onFocus={(e) => setnameOnCard(true)}
                          onBlur={(e) => setnameOnCard(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup
                        className={classnames("input-group-alternative mb-3", {
                          focused: cardNumber,
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-credit-card" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Card number"
                          type="text"
                          onFocus={(e) => setcardNumber(true)}
                          onBlur={(e) => setcardNumber(false)}
                        />
                      </InputGroup>
                    </FormGroup>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames(
                              "input-group-alternative mb-3",
                              {
                                focused: date,
                              }
                            )}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="MM/YY"
                              type="text"
                              onFocus={(e) => setdate(true)}
                              onBlur={(e) => setdate(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <InputGroup
                            className={classnames("input-group-alternative", {
                              focused: ccv,
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="CCV"
                              type="text"
                              onFocus={(e) => setccv(true)}
                              onBlur={(e) => setccv(false)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button block color="info" type="button">
                      Save new card
                    </Button>
                  </Form>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="bg-gradient-primary">
              <CardBody>
                <Row className="justify-content-between align-items-center">
                  <div className="col">
                    <img
                      alt="..."
                      src={require("assets/img/icons/cards/visa.png")}
                    />
                  </div>
                  <Col className="col-auto">
                    <Badge className="badge-lg" color="success">
                      Active
                    </Badge>
                  </Col>
                </Row>
                <div className="my-4">
                  <span className="h6 surtitle text-light">Card number</span>
                  <div className="card-serial-number h1 text-white">
                    <div>4358</div>
                    <div>7421</div>
                    <div>9256</div>
                    <div>6682</div>
                  </div>
                </div>
                <Row>
                  <div className="col">
                    <span className="h6 surtitle text-light">Name</span>
                    <span className="d-block h3 text-white">John Snow</span>
                  </div>
                  <div className="col">
                    <span className="h6 surtitle text-light">Expiry date</span>
                    <span className="d-block h3 text-white">11/23</span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Widgets.layout = Admin;

export default Widgets;
