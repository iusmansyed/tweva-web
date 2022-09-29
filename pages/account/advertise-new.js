import React from "react";
import axios from "axios";
// reactstrap components
import ReactDatetime from "react-datetime";
import { useState, useEffect } from "react";
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
  ListGroup,
  ListGroupItem,
  Alert,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
// react plugin that creates an input with badges
import TagsInput from "components/TagsInput/TagsInput.js";
import { authService } from "../../services/auth.service";
function Elements() {
  const [isModalVisible, setModalVisible] = useState(false);

  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);
  const [form5, setForm5] = useState(false);
  const [form6, setForm6] = useState(false);
  const [form22, setForm22] = useState(false);

  const [tagsinput, setTagsinput] = React.useState([]);

  const [cTitle, setCTitle] = useState(null);
  const [cName, setCName] = useState(null);
  const [fName, setFName] = useState(null);
  const [cDesc, setCDesc] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [website, setWebsite] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [managerId, setManagerId] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);

  const setValidation1 = () => {
    if (
      cTitle !== null &&
      cName !== null &&
      email !== null &&
      website !== null &&
      industry !== null &&
      managerId !== null &&
      phone !== null &&
      cDesc !== null &&
      fName !== null
    ) {
      setForm1(false),
        setForm3(false),
        setForm4(false),
        setForm5(false),
        setForm6(false),
        setForm22(false),
        setForm2(true);
      setModalVisible(false);
    } else {
      setModalVisible(true);
      console.log("Please input all fields");
    }

    console.log(
      "Hey You Clicked me",
      cTitle,
      cName,
      email,
      website,
      industry,
      managerId,
      phone,
      cDesc,
      fName
    );
  };

  const setValidation2 = () => {
    if (address !== null && state !== null && city !== null && zip !== null) {
      setForm1(false),
        setForm3(false),
        setForm4(false),
        setForm5(true),
        setForm6(false),
        setForm22(false),
        setForm2(false);
      setModalVisible(false);
    } else {
      setModalVisible(true);
      console.log("Please input all fields");
    }

    console.log("Hey You Clicked me", city, state, zip, address);
  };

  const postFormData = async () => {
    try {
      let obj = {
        company_name: cName,
        industry: industry,
        email: email,
        company_slogan: cTitle,
        address: address,
        city: city,
        state: state,
        zip: zip,
        company_desc: cDesc,
        phone: phone,
        website: website,
        first_name: fName,
        manager_user_id: managerId,
      };
      console.log("object data===>", obj);
      const response = await axios.post(
        `https://xwno-wxts-vy3m.n7.xano.io/api:XdyLeOUS/create-trial-social-media`,
        obj
      );
      console.log("response: " + JSON.stringify(response.data));
      if (response?.data) {
        console.log("response of data===>", response.status);
      }
      if (response?.status == 200) {
        setForm1(false),
          setForm3(false),
          setForm4(false),
          setForm5(false),
          setForm6(true),
          setForm22(false),
          setForm2(false);
        setModalVisible(false);
      }
    } catch (err) {
      console.log("erro is as follows", err);
    }
  };

  return (
    <>
      <SimpleHeader name="" parentName="Tweva Social" />
      <Container className="mt--6">
        <Row className="justify-content-center">
          <Col xl="7">
            <div className="card-wrapper">
              {form1 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Title for your campaign</h3>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlTextarea1"
                          >
                            Campaign Title
                          </label>
                          <Input
                            id="exampleFormControlTextarea1"
                            rows="1"
                            type="textarea"
                            value={cTitle}
                            onChange={(text) => setCTitle(text.target.value)}
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
                            value={cName}
                            onChange={(text) => setCName(text.target.value)}
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
                            value={email}
                            onChange={(text) => setEmail(text.target.value)}
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
                            value={website}
                            onChange={(text) => setWebsite(text.target.value)}
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
                            value={industry}
                            onChange={(text) => setIndustry(text.target.value)}
                          />
                        </FormGroup>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlTextarea1"
                          >
                            Rep Name Manager_user_id
                          </label>
                          <Input
                            id="exampleFormControlTextarea1"
                            rows="1"
                            type="textarea"
                            value={managerId}
                            onChange={(text) => setManagerId(text.target.value)}
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
                            value={cDesc}
                            onChange={(text) => setCDesc(text.target.value)}
                          />
                        </FormGroup>

                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlTextarea1"
                          >
                            First Name
                          </label>
                          <Input
                            id="exampleFormControlTextarea1"
                            rows="1"
                            type="textarea"
                            value={fName}
                            onChange={(text) => setFName(text.target.value)}
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
                            value={phone}
                            onChange={(text) => setPhone(text.target.value)}
                          />
                        </FormGroup>

                        {/* <Card>
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
                        </Card> */}
                      </Form>
                      <Alert
                        color="danger"
                        isOpen={isModalVisible}
                        toggle={() => setModalVisible(false)}
                      >
                        Please input all fields
                      </Alert>

                      <Row>
                        {/* <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                          >
                            Back{" "}
                          </Button>
                        </Col> */}
                        {/* <Col>
                        </Col> */}
                        <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                            onClick={setValidation1}
                          >
                            Next{" "}
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </>
              ) : null}

              {form2 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Add / Select Media</h3>
                    </CardHeader>
                    <Card>
                      <CardHeader>
                        <h3 className="mb-0">Dropzone</h3>
                      </CardHeader>
                      <CardBody>
                        Make this a drop zone for multiple files
                        <div
                          className="dropzone dropzone-multiple"
                          id="dropzone-multiple"
                        >
                          <div className="fallback">
                            <div className="custom-file">
                              <input
                                className="custom-file-input"
                                id="customFileUploadMultiple"
                                multiple="multiple"
                                type="file"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFileUploadMultiple"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                          <ListGroup
                            className=" dz-preview dz-preview-multiple list-group-lg"
                            flush
                          >
                            <ListGroupItem className=" px-0">
                              <Row className=" align-items-center">
                                <Col className=" col-auto">
                                  <div className=" avatar">
                                    <img
                                      alt="..."
                                      className=" avatar-img rounded"
                                      data-dz-thumbnail
                                      src="..."
                                    />
                                  </div>
                                </Col>
                                <div className=" col ml--3">
                                  <h4 className=" mb-1" data-dz-name>
                                    ...
                                  </h4>
                                  <p
                                    className=" small text-muted mb-0"
                                    data-dz-size
                                  >
                                    ...
                                  </p>
                                </div>
                                <Col className=" col-auto">
                                  <Button
                                    size="sm"
                                    color="danger"
                                    data-dz-remove
                                  >
                                    <i className="fas fa-trash" />
                                  </Button>
                                </Col>
                              </Row>
                            </ListGroupItem>
                          </ListGroup>
                        </div>
                      </CardBody>
                    </Card>
                    <CardBody>
                      <Row>
                        <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                            onClick={() => {
                              setForm1(true),
                                setForm2(false),
                                setForm3(false),
                                setForm4(false),
                                setForm5(false),
                                setForm6(false),
                                setForm22(false);
                            }}
                          >
                            Back{" "}
                          </Button>
                        </Col>
                        <Col></Col>
                        <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                            onClick={() => {
                              setForm1(false),
                                setForm2(false),
                                setForm3(true),
                                setForm4(false),
                                setForm5(false),
                                setForm6(false),
                                setForm22(false);
                            }}
                          >
                            Next{" "}
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>{" "}
                </>
              ) : null}

              {form3 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Confirm Advertising Media</h3>
                    </CardHeader>
                    <CardBody>
                      <img src=""></img>
                      <Row>
                        This should show image or video
                        <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                            onClick={() => {
                              setForm1(false),
                                setForm2(true),
                                setForm3(false),
                                setForm4(false),
                                setForm5(false),
                                setForm6(false),
                                setForm22(false);
                            }}
                          >
                            Back{" "}
                          </Button>
                        </Col>
                        <Col></Col>
                        <Col>
                          <Button
                            color="primary"
                            size="lg"
                            type="button"
                            className="mt-3"
                            onClick={() => {
                              setForm1(false),
                                setForm2(false),
                                setForm3(false),
                                setForm4(false),
                                setForm5(false),
                                setForm6(false),
                                setForm22(true);
                            }}
                          >
                            Confirm{" "}
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </>
              ) : null}

              {form22 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Select Timing</h3>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <FormGroup>
                          <Input id="exampleFormControlSelect5" type="select">
                            <option>15 seconds</option>
                            <option>30 seconds</option>
                            <option>60 seconds</option>
                          </Input>
                        </FormGroup>

                        <Row>
                          <Col>
                            <Button
                              color="primary"
                              size="lg"
                              type="button"
                              className="mt-3"
                              onClick={() => {
                                setForm1(false),
                                  setForm2(false),
                                  setForm3(true),
                                  setForm4(false),
                                  setForm5(false),
                                  setForm6(false),
                                  setForm22(false);
                              }}
                            >
                              Back{" "}
                            </Button>
                          </Col>
                          <Col></Col>
                          <Col>
                            <Button
                              color="primary"
                              size="lg"
                              type="button"
                              className="mt-3"
                              onClick={() => {
                                setForm1(false),
                                  setForm2(false),
                                  setForm3(false),
                                  setForm4(true),
                                  setForm5(false),
                                  setForm6(false),
                                  setForm22(false);
                              }}
                            >
                              Done{" "}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </>
              ) : null}

              {form4 ? (
                <Card>
                  <CardHeader>
                    <h5 className="h3 mb-0">Locations</h5>
                  </CardHeader>

                  <CardBody>
                    <Form>
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
                          value={address}
                          onChange={(text) => setAddress(text.target.value)}
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
                          value={city}
                          onChange={(text) => setCity(text.target.value)}
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
                          value={state}
                          onChange={(text) => setState(text.target.value)}
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
                          value={zip}
                          onChange={(text) => setZip(text.target.value)}
                        />
                      </FormGroup>
                    </Form>
                    <Alert
                      color="danger"
                      isOpen={isModalVisible}
                      toggle={() => setModalVisible(false)}
                    >
                      Please input all location fields
                    </Alert>

                    <Row>
                      <Col>
                        <Button
                          color="primary"
                          size="lg"
                          type="button"
                          className="mt-3"
                          onClick={() => {
                            setForm1(false),
                              setForm3(false),
                              setForm4(false),
                              setForm5(false),
                              setForm6(false),
                              setForm22(true),
                              setForm2(false);
                            setModalVisible(false);
                          }}
                        >
                          Back{" "}
                        </Button>
                      </Col>
                      <Col></Col>

                      <Col>
                        <Button
                          color="primary"
                          size="lg"
                          type="button"
                          className="mt-3"
                          onClick={setValidation2}
                        >
                          Next{" "}
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              ) : null}

              {form5 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Confirm Campaign</h3>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row className="m-3">
                          Your campaign will cost around $2.35 a day
                          <div className=" custom-control custom-checkbox mb-3 mt-3">
                            <input
                              className=" custom-control-input"
                              id="customCheck1"
                              type="checkbox"
                            ></input>
                            <label
                              className=" custom-control-label"
                              htmlFor="customCheck1"
                            >
                              <span>I agree to the Terms & Conditions </span>
                            </label>
                          </div>
                        </Row>
                        <Row>
                          <Col>
                            <Button
                              color="primary"
                              size="lg"
                              type="button"
                              className="mt-3"
                              onClick={() => {
                                setForm1(false),
                                  setForm2(false),
                                  setForm3(false),
                                  setForm4(true),
                                  setForm5(false),
                                  setForm6(false),
                                  setForm22(false);
                              }}
                            >
                              Back{" "}
                            </Button>
                          </Col>
                          <Col></Col>
                          <Col>
                            <Button
                              color="primary"
                              size="lg"
                              type="button"
                              className="mt-3"
                              // onClick={() => {
                              //   setForm1(false),
                              //     setForm2(false),
                              //     setForm3(false),
                              //     setForm4(false),
                              //     setForm5(false),
                              //     setForm6(true),
                              //     setForm22(false);
                              // }}
                              onClick={postFormData}
                            >
                              Finish{" "}
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </>
              ) : null}

              {form6 ? (
                <>
                  <Card>
                    <CardHeader>
                      <h3 className="mb-0">Success!</h3>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>You have successfully activated the tweva tv.</Row>
                        <Row>
                          <Col></Col>

                          <Col>
                            <Button
                              color="primary"
                              size="lg"
                              type="button"
                              className="mt-3"
                            >
                              Done{" "}
                            </Button>
                          </Col>
                          <Col></Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Elements.layout = Admin;

export default Elements;
