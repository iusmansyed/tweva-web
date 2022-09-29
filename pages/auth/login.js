import React, { useDebugValue } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
} from "reactstrap";
// layout for this page
// import Dayone from "../account/secmodal/dayone.js";
import Auth from "layouts/Auth.js";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { authService } from "../../services/api.js";

function Login() {
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let router = useRouter();
  const signIn = async () => {
    let userDetails = {
      email,
      password,
    };
    const res = await authService.signin(userDetails);
    console.log(res);
    let token = res?.data?.authToken;

    if (token) {
      localStorage.setItem("token", token);
      // localStorage.setItem('modal', false)  
      localStorage.setItem('setStorageModal', true)
      router.push("account/dashboard");
      return;
    }
    alert("invalid credential");

    // await axios.post('https://xwno-wxts-vy3m.n7.xano.io/api:CWypaRG1/auth/login', userDetails)
    //   .then((res) => {
    //     if (res?.status == 200) {
    //       localStorage.setItem("authToken", res?.data?.authToken)

    //       alert("Login successfully")
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("err", err)
    //   })
  };





  return (
    <>
      <AuthHeader
        title="Welcome!"
        lead="Use these awesome forms to login or create new account in your project for free."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-3">
                  <small>Sign in with</small>
                </div>

                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    {/*<a href="../account/dashboard.js">*/}
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={signIn}
                    >
                      Sign in
                    </Button>
                    {/*</a>*/}
                  </div>
                </Form>
                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-bold"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <small>Forgot password?</small>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a className="text-bold" href="../auth/register">
                      <small>Create new account</small>
                    </a>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                {/* fdfd */}
                <Col lg="12" md="5" className="pb-1 ">
                  <div className="btn-wrapper text-center  d-flex flex-wrap justifiy-content-center">
                    <Button
                      className="btn-neutral btn-icon  mt-2 ml-auto mr-auto mb-auto"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/github.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon  mt-2 ml-auto mr-auto mb-auto "
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/google.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Facebook</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon    mt-2 ml-auto mr-auto mb-auto"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/google.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Linkedin</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon  mt-2 ml-auto mr-auto mb-auto "
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon  mr-1">
                        <img
                          alt="..."
                          src={require("assets/img/icons/common/google.svg")}
                        />
                      </span>
                      <span className="btn-inner--text">Twitter</span>
                    </Button>
                  </div>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Login.layout = Auth;

export default Login;
