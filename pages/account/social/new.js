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
// react plugin that creates an input with badges
import TagsInput from "components/TagsInput/TagsInput.js";

function Elements() {
  const [tagsinput, setTagsinput] = React.useState([
    "Bucharest",
    "Cluj",
    "Iasi",
    "Timisoara",
    "Piatra Neamt",
  ]);

  const [View, setTestinput] = React.useState(["new", "success", "error"]);

  return (
    <>
      <SimpleHeader name="" parentName="Tweva Social" />
      <Container className="mt--6">
        <Row className="justify-content-center">
          <Col xl="7">
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Add new social media post</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Button
                      className="btn-icon-only"
                      color="facebook"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-facebook" />
                      </span>
                    </Button>
                    <Button
                      className="btn-icon-only"
                      color="twitter"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-twitter" />
                      </span>
                    </Button>
                    <Button
                      className="btn-google-plus btn-icon-only"
                      color="google"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-google-plus-g" />
                      </span>
                    </Button>
                    <Button
                      className="btn-instagram btn-icon-only"
                      color="default"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-instagram" />
                      </span>
                    </Button>
                    <Button
                      className="btn-icon-only"
                      color="pinterest"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-pinterest" />
                      </span>
                    </Button>
                    <Button
                      className="btn-icon-only"
                      color="youtube"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-youtube" />
                      </span>
                    </Button>
                    <Button
                      className="btn-vimeo btn-icon-only"
                      color="default"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-vimeo-v" />
                      </span>
                    </Button>
                    <Button
                      className="btn-slack btn-icon-only"
                      color="default"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-slack" />
                      </span>
                    </Button>
                    <Button
                      className="btn-icon-only"
                      color="dribbble"
                      type="button"
                    >
                      <span className="btn-inner--icon">
                        <i className="fab fa-dribbble" />
                      </span>
                    </Button>

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Post
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="5"
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
                    <Card>
                      <CardBody>
                        <Form>
                          <TagsInput
                            onlyUnique
                            className="bootstrap-tagsinput"
                            onChange={(value) => setTagsinput(value)}
                            value={tagsinput}
                            tagProps={{ className: "tag badge mr-1" }}
                            inputProps={{
                              className: "",
                              placeholder: "",
                            }}
                          />
                        </Form>
                      </CardBody>
                    </Card>
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
                    <Button
                      color="primary"
                      size="lg"
                      type="button"
                      className="mt-3"
                    >
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
