import React, { useDebugValue } from "react";
import AuthHeader from "components/Headers/AuthHeader.js";

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
// import Auth from "layouts/Auth.js";
// // core components
// import AuthHeader from "components/Headers/AuthHeader.js";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { authService } from "../../services/api.js";

function Terms() {
//   const [focusedEmail, setfocusedEmail] = React.useState(false);
//   const [focusedPassword, setfocusedPassword] = React.useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   let router = useRouter();
//   const signIn = async () => {
//     let userDetails = {
//       email,
//       password,
//     };
//     const res = await authService.signin(userDetails);
//     console.log(res);
//     let token = res?.data?.authToken;
//     if (token) {
//       localStorage.setItem("token", token);
//       // localStorage.setItem('modal', false)
//       localStorage.setItem("setModal", true);
//       router.push("account/dashboard");

//       return;
//     }
//     alert("invalid credential");

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

  return (
    <>
      <AuthHeader
        title="Terms and Conditions"
        // lead="Use these awesome forms to login or create new account in your project for free."
      />
    </>
  );
}

export default Terms;
