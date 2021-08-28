import axios from "axios";
import jwtDecode from 'jwt-decode';
// import swal from 'sweetalert';
import setAuthToken from "../utils/setAuthToken";

const API = "http://localhost:9000";


export function setCurrentUser(user) {
  return {
    type: "USER_AUTHENTICATED",
    user
  };
}


function decode(token) {
    return jwtDecode(token);
  }

function registerToken({ token }) {
  window.localStorage.setItem("token", token);
  setAuthToken(token);
  return token;
}

export const registerUser = (user, navigate) => (dispatch) => {
  axios
    .post(`${API}/user/register`, user)
    .then((res) => navigate('/verify-user'))
    .catch((err) => {
      dispatch({
        type: "USER_SIGNUP_ERRORS",
        payload: err.response.data,
      });
    });
};

export function signinRequest(userData, navigate) {
  return dispatch => axios.post(`${API}/user/login`, userData)
    .then(res => {
      const token = registerToken(res.data);
      dispatch(setCurrentUser(decode(token)));
      navigate('/app/listings');
    }).catch(err => {
      dispatch({ type: "USER_LOGIN_ERROR", payload: err.response.data });
    })
}

export function verifyUserRequest(activationCode, navigate) {
  return dispatch => axios.patch(`${API}/user/activate`, activationCode).then(res => {
    console.log(res.data, 'res')
    const token = registerToken(res.data);
    dispatch(setCurrentUser({ type: "VEIFICATION_SUCCESS", token }));
    navigate('/app/listings')
  }).catch(err => {
    console.log(err.response)

    // dispatch({
    //   type: "VERIFICATION_FAILURE",
    //   payload: err.response.data
    // });
  })
}
