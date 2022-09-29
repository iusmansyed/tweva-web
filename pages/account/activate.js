import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Elements() {
  return (
    <>
      <SimpleHeader name="Activate Device" parentName="My Tweva" />
      <Container className="mt--6" xl="4">
        <Row>
          <Col lg="12">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Step 1</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Activation Code
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="X.X.X.X.X"
                        type="text"
                      />
                    </FormGroup>

                    <Button color="primary" size="lg" type="button">
                      Next
                    </Button>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Step 2</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Title
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlInput1"
                      >
                        Location
                      </label>
                      <Input
                        id="exampleFormControlInput1"
                        placeholder="Front, Middle or Back of Room"
                        type="text"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Description
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="3"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect3"
                      >
                        Open Hours
                      </label>
                      <Input id="exampleFormControlSelect3" type="select">
                        <option>8am</option>
                        <option>9pm</option>
                        <option>10pm</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <Button color="primary" size="lg" type="button">
                      Next
                    </Button>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Success!</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>You have successfully activated the tweva tv.</Row>
                    <Button color="primary" size="lg" type="button">
                      Done
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Elements.layout = Admin;

export default Elements;
