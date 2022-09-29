import { API } from "./api";
import axios from "axios";
const signin = (data) =>
  API.post("auth/login", data).then(
    (res) => res,
    (err) => err
  );
const signup = (data) =>
  API.post("auth/signup", data).then(
    (res) => res,
    (err) => err
  );

const getInterest = () =>
  axios.get("https://xwno-wxts-vy3m.n7.xano.io/api:CWypaRG1/interests").then(
    (res) => res,
    (err) => err
  );

export const authService = {
  signin,
  signup,
  getInterest,

};
