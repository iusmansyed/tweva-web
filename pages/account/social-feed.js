import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Media,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import CardsHeader from "components/Headers/CardsHeader.js";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

function Dashboard() {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
  };
  if (typeof window !== "undefined" && window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  return (
    <>
      <CardsHeader name="Default" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="7">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Latest Posts</h5>
              </CardHeader>
              <CardHeader className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/theme/team-1.jpg")}
                    />
                  </a>
                  <div className="mx-3">
                    <a
                      className="text-dark font-weight-600 text-sm"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      John Snow
                    </a>
                    <small className="d-block text-muted">3 days ago</small>
                  </div>
                </div>
                <div className="text-right ml-auto">
                  <Button
                    className="btn-icon"
                    color="primary"
                    size="sm"
                    type="button"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-fat-add" />
                    </span>
                    <span className="btn-inner--text">Follow</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <p className="mb-4">
                  Personal profiles are the perfect way for you to grab their
                  attention and persuade recruiters to continue reading your CV
                  because you’re telling them from the off exactly why they
                  should hire you.
                </p>
                <img
                  alt="..."
                  className="img-fluid rounded"
                  src={require("assets/img/theme/img-1-1000x600.jpg")}
                />
                <Row className="align-items-center my-3 pb-3 border-bottom">
                  <Col sm="6">
                    <div className="icon-actions">
                      <Button
                        color="primary"
                        size="sm"
                        type="button"
                        className="m-1"
                      >
                        ADD TO MY TWEVA TV
                      </Button>
                      <a
                        className="like active"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="ni ni-like-2" />
                        <span className="text-muted">150</span>
                      </a>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="ni ni-chat-round" />
                        <span className="text-muted">36</span>
                      </a>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="ni ni-curved-next" />
                        <span className="text-muted">12</span>
                      </a>
                    </div>
                  </Col>
                  <Col className="d-none d-sm-block" sm="6">
                    <div className="d-flex align-items-center justify-content-sm-end">
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip36177092"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip delay={0} target="tooltip36177092">
                          Jessica Rowland
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip857639221"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip857639221"
                        >
                          Audrey Love
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-xs rounded-circle"
                          href="#pablo"
                          id="tooltip260223080"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip260223080"
                        >
                          Michael Lewis
                        </UncontrolledTooltip>
                      </div>
                      <small className="pl-2 font-weight-bold">
                        and 30+ more
                      </small>
                    </div>
                  </Col>
                </Row>
                <Row></Row>

                <div className="mb-1">
                  <Media className="media-comment">
                    <img
                      alt="..."
                      className="avatar avatar-lg media-comment-avatar rounded-circle"
                      src={require("assets/img/theme/team-1.jpg")}
                    />
                    <Media>
                      <div className="media-comment-text">
                        <h6 className="h5 mt-0">Michael Lewis</h6>
                        <p className="text-sm lh-160">
                          Cras sit amet nibh libero nulla vel metus scelerisque
                          ante sollicitudin. Cras purus odio vestibulum in
                          vulputate viverra turpis.
                        </p>
                        <div className="icon-actions">
                          <a
                            className="like active"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="ni ni-like-2" />
                            <span className="text-muted">3 likes</span>
                          </a>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i className="ni ni-curved-next" />
                            <span className="text-muted">2 shares</span>
                          </a>
                        </div>
                      </div>
                    </Media>
                  </Media>
                  <Media className="media-comment">
                    <img
                      alt="..."
                      className="avatar avatar-lg media-comment-avatar rounded-circle"
                      src={require("assets/img/theme/team-2.jpg")}
                    />
                    <Media>
                      <div className="media-comment-text">
                        <h6 className="h5 mt-0">Jessica Stones</h6>
                        <p className="text-sm lh-160">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin. Cras purus odio,
                          vestibulum in vulputate at, tempus viverra turpis.
                        </p>
                        <div className="icon-actions">
                          <a
                            className="like active"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="ni ni-like-2" />
                            <span className="text-muted">10 likes</span>
                          </a>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <i className="ni ni-curved-next" />
                            <span className="text-muted">1 share</span>
                          </a>
                        </div>
                      </div>
                    </Media>
                  </Media>
                  <hr />
                  <Media className="align-items-center">
                    <img
                      alt="..."
                      className="avatar avatar-lg rounded-circle mr-4"
                      src={require("assets/img/theme/team-3.jpg")}
                    />
                    <Media body>
                      <Form>
                        <Input
                          placeholder="Write your comment"
                          rows="1"
                          type="textarea"
                        />
                      </Form>
                    </Media>
                  </Media>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card>
              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    Place for an advertisement put image here square
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Friends</h5>
              </CardHeader>

              <CardBody>
                <ListGroup className="list my--3" flush>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-1.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            John Michael
                          </a>
                        </h4>
                        <span className="text-success">●</span>{" "}
                        <small>Online</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-2.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Alex Smith
                          </a>
                        </h4>
                        <span className="text-warning">●</span>{" "}
                        <small>In a meeting</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-3.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Samantha Ivy
                          </a>
                        </h4>
                        <span className="text-danger">●</span>{" "}
                        <small>Offline</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="px-0">
                    <Row className="align-items-center">
                      <Col className="col-auto">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("assets/img/theme/team-4.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col ml--2">
                        <h4 className="mb-0">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            John Michael
                          </a>
                        </h4>
                        <span className="text-success">●</span>{" "}
                        <small>Online</small>
                      </div>
                      <Col className="col-auto">
                        <Button color="primary" size="sm" type="button">
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
