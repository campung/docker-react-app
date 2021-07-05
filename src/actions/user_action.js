import axios from "axios";
import { AUTH_USER, LOGIN_STORE } from "./types";

export function loginUser(body) {
  const request = axios
    .post("http://localhost:3065/v1/stores/signin", body, {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: LOGIN_STORE,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .post("http://localhost:3065/v1/stores/auth", {
      withCredentials: true,
    })
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
