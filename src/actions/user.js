import axios from "axios";
import { LOGIN_ERROR, LOGIN_USER, LOGOUT_USER } from "./types";

const jwtDecode = require("jwt-decode");

export const userLoginFetch = user => {
  return dispatch => {
    return axios
      .post("http://localhost:8081/auth", user)
      .then(resp => {
        if (resp) {
          const decodedUser = jwtDecode(resp.data.token);
          console.log("succes", decodedUser);
          localStorage.setItem("token", resp.data.token);
          dispatch(loginUser(decodedUser));
        }
      })
      .catch(() => {
        return dispatch({
          type: LOGIN_ERROR,
          error: "mail ou mot de passe incorrect"
        });
      });
  };
};

const loginUser = userObj => ({
  type: LOGIN_USER,
  user: {
    email: userObj.sub,
    role: userObj.AUTHORITIES_KEY
  }
});

export const logoutUser = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER
    });
  };
};
