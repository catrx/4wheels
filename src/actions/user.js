import {axios} from './utils'
import { LOGIN_ERROR, LOGIN_USER, LOGOUT_USER } from "./types";

const jwtDecode = require("jwt-decode");

export const userLoginFetch = user => {
  return dispatch => {
    return axios
      .post("/auth", user)
      .then(resp => {
        if (resp) {
          const decodedUser = jwtDecode(resp.data.token);
          console.log("succes", decodedUser);
          localStorage.setItem("token", `Bearer ${resp.data.token}`);
          return dispatch(loginUser(decodedUser));
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

const loginUser = userObj => {
  localStorage.setItem("role", userObj.AUTHORITIES_KEY);
  return ({
    type: LOGIN_USER,
    user: {
      email: userObj.sub,
      role: userObj.AUTHORITIES_KEY
    }
  });
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER
    });
  };
};
