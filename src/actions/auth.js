import axios from "axios";
import jwtDecode from 'jwt-decode';
// import swal from 'sweetalert';
import setAuthToken from "../utils/setAuthToken";

const API = "http://localhost:6000/v1";

function decode(token) {
    return jwtDecode(token);
  }

function registerToken({ token }) {
  window.localStorage.setItem("token", token);
  setAuthToken(token);
  return token;
}

export const registerUser = (user, history) => (dispatch) => {
  axios
    .post(`${API}/users/register`, user)
    .then((res) => history.push("/verifyToken"))
    .catch((err) => {
      dispatch({
        type: "USER_SIGNUP_ERRORS",
        payload: err.response.data,
      });
    });
};
