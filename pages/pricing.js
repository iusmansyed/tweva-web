import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";

function Pricing() {
  return (
    <>
      <AuthHeader title="Choose the best plan for your business" lead="" />
      <Container className="mt--8 pb-1">
        <Row className="justify-content-center">
          <Col lg="12">
            <div className="pricing card-group flex-column flex-md-row mb-3">
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-info py-3 mb-0">
                    Learn More
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-4">
                  <div className="display-2">$0</div>
                  <span className="text-muted">Free for life</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">Earn Rewards</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">
                            Post to the tweva network
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">Gain Local Exposure</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="info" type="button">
                    Join Free
                  </Button>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-pricing bg-gradient-success zoom-in shadow-lg rounded border-0 text-center mb-3">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-white py-3 mb-0">
                    Most Popular
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-4">
                  <div className="display-1 text-white">$89</div>
                  <span className="text-white">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3 text-white">
                            Advertise on 10 local tvs
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3 text-white">
                            About 250 commercials
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3 text-white">
                            3 social posts a week
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3 text-white">
                            Weekly Reporting
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-muted">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3 text-white">
                            Social Media Calendar
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="secondary" type="button">
                    Sign Up Now
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact sales
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-info py-3 mb-0">
                    Social / TV Growth
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-4">
                  <div className="display-2">$189</div>
                  <span className="text-muted">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3">Ads on 20 tvs</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3">Working materi</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-3">2GB cloud storage</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="info" type="button">
                    Start free trial
                  </Button>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
              <Card className="card-pricing border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-info py-3 mb-0">
                    Small Business Growth
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-">
                  <div className="display-2">$449</div>
                  <span className="text-muted">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-terminal" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">Complete documentation</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-pen-fancy" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-gradient-info shadow rounded-circle text-white">
                            <i className="fas fa-hdd" />
                          </div>
                        </div>
                        <div>
                          <span className="pl-2">2GB cloud storage</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="info" type="button">
                    Start free trial
                  </Button>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-lg-center px-3 mt-5">
          <div>
            <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-building text-primary" />
            </div>
          </div>
          <Col lg="6">
            <p className="text-white">
              <strong>The Arctic Ocean</strong> freezes every winter and much of
              the sea-ice then thaws every summer, and that process will
              continue whatever.
            </p>
          </Col>
        </div>
        <Row className="row-grid justify-content-center">
          <Col lg="10">
            <Table className="table-dark mt-5" responsive>
              <thead>
                <tr>
                  <th className="px-0 bg-transparent" scope="col">
                    <span className="text-light font-weight-700">Features</span>
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    Free For Life
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    Most Popular
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    3 Pack
                  </th>
                  <th className="text-center bg-transparent" scope="col">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-0">IMAP/POP Support</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Email Forwarding</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Active Sync</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Multiple domain hosting</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <span className="text-sm text-light">
                      Limited to 1 domain only
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm text-light">Limited to only</span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm text-light">Limited only</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-0">Additional storage upgrade</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                </tr>
                <tr>
                  <td className="px-0">30MB Attachment Limit</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Password protected / Expiry links</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
                <tr>
                  <td className="px-0">Unlimited Custom Apps</td>
                  <td className="text-center">
                    <i className="fas fa-check text-success" />
                  </td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Pricing.layout = Auth;

export default Pricing;
