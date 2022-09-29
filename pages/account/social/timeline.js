import React from "react";
import Modal_SocialNewPost from "../../../components/Modals/social-new-post";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Timeline() {
  return (
    <>
      <SimpleHeader name="Timeline" parentName="Pages" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Timeline</h3>
              </CardHeader>

              <CardBody>
                <Modal_SocialNewPost />

                <div
                  className="timeline timeline-one-side"
                  data-timeline-axis-style="dashed"
                  data-timeline-content="axis"
                >
                  <div className="timeline-block">
                    <span className="timeline-step badge-success">
                      <i className="ni ni-bell-55" />
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 className="mt-3 mb-0">New message</h5>
                      <p className="text-sm mt-1 mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div className="mt-3">
                        <Badge color="success" pill>
                          design
                        </Badge>
                        <Badge color="success" pill>
                          system
                        </Badge>
                        <Badge color="success" pill>
                          creative
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-danger">
                      <i className="ni ni-html5" />
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 className="mt-3 mb-0">Product issue</h5>
                      <p className="text-sm mt-1 mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div className="mt-3">
                        <Badge color="danger" pill>
                          design
                        </Badge>
                        <Badge color="danger" pill>
                          system
                        </Badge>
                        <Badge color="danger" pill>
                          creative
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-info">
                      <i className="ni ni-like-2" />
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 className="mt-3 mb-0">New likes</h5>
                      <p className="text-sm mt-1 mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div className="mt-3">
                        <Badge color="info" pill>
                          design
                        </Badge>
                        <Badge color="info" pill>
                          system
                        </Badge>
                        <Badge color="info" pill>
                          creative
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-success">
                      <i className="ni ni-bell-55" />
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 className="mt-3 mb-0">New message</h5>
                      <p className="text-sm mt-1 mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div className="mt-3">
                        <Badge color="success" pill>
                          design
                        </Badge>
                        <Badge color="success" pill>
                          system
                        </Badge>
                        <Badge color="success" pill>
                          creative
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-danger">
                      <i className="ni ni-html5" />
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">
                        10:30 AM
                      </small>
                      <h5 className="mt-3 mb-0">Product issue</h5>
                      <p className="text-sm mt-1 mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <div className="mt-3">
                        <Badge color="danger" pill>
                          design
                        </Badge>
                        <Badge color="danger" pill>
                          system
                        </Badge>
                        <Badge color="danger" pill>
                          creative
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Timeline.layout = Admin;

export default Timeline;
