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
                  <h3 className="mb-0">
                    Invite Company for 5 Free Social Posts
                  </h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Company Contact First / Last Name
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Company Name
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Company Description
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Company Slogan
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Address
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        City
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        State
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Zip
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Phone
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Email
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Website
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Industry
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlTextarea1"
                      >
                        Manager_user_id
                      </label>
                      <Input
                        id="exampleFormControlTextarea1"
                        rows="1"
                        type="textarea"
                      />
                    </FormGroup>

                    <Card>
                      <label className="p-3">Keywords</label>
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
                    <CardBody>
                      <Button color="primary" size="lg" type="button">
                        Submit & Start Free Trial
                      </Button>
                    </CardBody>
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
