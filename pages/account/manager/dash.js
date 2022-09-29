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
      <CardsHeader name="Manager - Apopka" parentName="Dashboards" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="8">
            <Card>
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-light text-uppercase ls-1 mb-1"></h6>
                    <h5 className="h3 mb-0">Monthly Revenue</h5>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem className="mr-2 mr-md-0">
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    id="chart-sales-dark"
                    className="chart-canvas"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1"></h6>
                    <h5 className="h3 mb-0">Total Accounts</h5>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                    className="chart-canvas"
                    id="chart-bars"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">New Leads</h5>
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
                          Contact
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
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Questions</h5>
              </CardHeader>

              <CardBody className="p-0">
                <ListGroup data-toggle="checklist" flush>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-success checklist-item-checked">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">Call with Dave</h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-success">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="chk-todo-task-1"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-1"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-warning">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">Lunch meeting</h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-warning">
                          <input
                            className="custom-control-input"
                            id="chk-todo-task-2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-2"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-info">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">
                          Argon Dashboard Launch
                        </h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-info">
                          <input
                            className="custom-control-input"
                            id="chk-todo-task-3"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-3"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                    <div className="checklist-item checklist-item-danger checklist-item-checked">
                      <div className="checklist-info">
                        <h5 className="checklist-title mb-0">
                          Winter Hackaton
                        </h5>
                        <small>10:30 AM</small>
                      </div>
                      <div>
                        <div className="custom-control custom-checkbox custom-checkbox-danger">
                          <input
                            className="custom-control-input"
                            defaultChecked
                            id="chk-todo-task-4"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="chk-todo-task-4"
                          />
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <CardHeader>
                <h5 className="h3 mb-0">Your Stats</h5>
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
                            src={require("assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Approving Posts within 12 hours</h5>
                        <div className="d-flex align-items-center">
                          <span className="completion mr-2">60%</span>
                          <div>
                            <Progress max="100" value="60" color="warning" />
                          </div>
                        </div>
                        <Progress
                          className="progress-xs mb-0"
                          color="orange"
                          max="100"
                          value="60"
                        />
                      </div>
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
                            src={require("assets/img/theme/angular.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Answering Live Chats</h5>
                        <div className="d-flex align-items-center">
                          <span className="completion mr-2">60%</span>
                        </div>
                        <Progress
                          className="progress-xs mb-0"
                          color="success"
                          max="100"
                          value="100"
                        />
                      </div>
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
                            src={require("assets/img/theme/sketch.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Adding Missing Media</h5>
                        <div className="d-flex align-items-center">
                          <span className="completion mr-2">60%</span>
                        </div>
                        <Progress
                          className="progress-xs mb-0"
                          color="danger"
                          max="100"
                          value="72"
                        />
                      </div>
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
                            src={require("assets/img/theme/react.jpg")}
                          />
                        </a>
                      </Col>
                      <div className="col">
                        <h5>Converting New Leads to Customers</h5>
                        <Progress
                          className="progress-xs mb-0"
                          color="info"
                          max="100"
                          value="90"
                        />
                      </div>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="12">
            <Row>
              <div className="col">
                <Card>
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Customers / Leads 30 Day Preview</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th className="sort" data-sort="name" scope="col">
                          Project
                        </th>
                        <th className="sort" data-sort="budget" scope="col">
                          Budget
                        </th>
                        <th className="sort" data-sort="status" scope="col">
                          Status
                        </th>
                        <th scope="col">Users</th>
                        <th className="sort" data-sort="completion" scope="col">
                          Completion
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/bootstrap.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Argon Design System
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$2500 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-warning" />
                            <span className="status">pending</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip792717700"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792717700"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip654289872"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip654289872"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip409131762"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip409131762"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip50788433"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip50788433"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">60%</span>
                            <div>
                              <Progress max="100" value="60" color="warning" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/angular.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$1800 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip545726644"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip545726644"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip823332447"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip823332447"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip354076640"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip354076640"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip625572621"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip625572621"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <Progress max="100" value="100" color="success" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/sketch.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Black Dashboard
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$3150 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-danger" />
                            <span className="status">delayed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip927457712"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip927457712"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip959509788"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip959509788"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip239649821"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip239649821"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip908443321"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip908443321"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">72%</span>
                            <div>
                              <Progress max="100" value="72" color="danger" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/react.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                React Material Dashboard
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$4400 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-info" />
                            <span className="status">on schedule</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip817843622"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip817843622"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip885824111"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip885824111"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip426851535"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip426851535"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip913358720"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip913358720"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">90%</span>
                            <div>
                              <Progress max="100" value="90" color="info" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/vue.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Vue Paper UI Kit PRO
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$2200 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip460474820"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip460474820"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip979995688"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip979995688"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip732882700"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip732882700"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip242724387"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip242724387"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <Progress max="100" value="100" color="success" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/bootstrap.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Argon Design System
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$2500 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-warning" />
                            <span className="status">pending</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip318080952"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip318080952"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip221723068"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip221723068"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip138748612"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip138748612"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip431342349"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip431342349"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">60%</span>
                            <div>
                              <Progress max="100" value="60" color="warning" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/angular.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$1800 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip384464413"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip384464413"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip828512937"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip828512937"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip409745485"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip409745485"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip262162858"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip262162858"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <Progress max="100" value="100" color="success" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/sketch.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Black Dashboard
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$3150 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-danger" />
                            <span className="status">delayed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip711925042"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip711925042"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip664693924"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip664693924"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip582913491"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip582913491"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip699784330"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip699784330"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">72%</span>
                            <div>
                              <Progress max="100" value="72" color="danger" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/angular.jpg")}
                              />
                            </a>
                            <Media>
                              <span className="name mb-0 text-sm">
                                Angular Now UI Kit PRO
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td className="budget">$1800 USD</td>
                        <td>
                          <Badge className="badge-dot mr-4" color="">
                            <i className="bg-success" />
                            <span className="status">completed</span>
                          </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip912421317"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip912421317"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip912012329"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip912012329"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip366509724"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip366509724"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip569311457"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip569311457"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">100%</span>
                            <div>
                              <Progress max="100" value="100" color="success" />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              color=""
                              size="sm"
                              className="btn-icon-only text-light"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
