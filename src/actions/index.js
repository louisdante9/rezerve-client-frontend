import axios from "axios";
import jwtDecode from 'jwt-decode';
// import swal from 'sweetalert';
import setAuthToken from "../utils/setAuthToken";

// const API = 'https://rezerve.herokuapp.com';
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
      console.log(err.response)
      dispatch({ type: "USER_LOGIN_ERROR", payload: err.response.data });
    })
}

export function verifyUserRequest(activationCode, navigate) {
  return dispatch => axios.patch(`${API}/user/activate`, activationCode).then(res => {
    const token = registerToken(res.data);
    dispatch(setCurrentUser(decode(token)));
    navigate('/app/listings')
  }).catch(err => {
    dispatch({
      type: "VERIFICATION_FAILURE",
      payload: err.response.data
    });
  })
}

 const getApartmentsSuccess = listings =>
 ({ type: "GET_APARTMENTS_SUCCESS", payload: listings });

const getApartmentsError = data =>
 ({ type: "GET_APARTMENTS_ERROR", payload: data });

export const listingsRequest = () => dispatch => {
 axios.get(`${API}/apartment`)
   .then((response) => {
     dispatch(getApartmentsSuccess(response.data.apartments));
   })
   .catch((error) => {
     dispatch(getApartmentsError(error.response.data));
   });
}


export const singleListing = ({apartmentId, userId}) => dispatch => {
  axios.get(`${API}/apartment/${userId}/listing/${apartmentId}`)
    .then((response) => {
      dispatch({ type: "GET_APARTMENT_SUCCESS", payload: response.data.data });
    })
    .catch((error) => {
      dispatch ({ type: "GET_APARTMENTS_ERROR", payload: error.response.data });
    });
 }

export const delFavouriteRequest = ({apartmentId, userId}) => dispatch => {
 axios.delete(`${API}/favourite/${userId}/del/${apartmentId}`)
   .then((response) => {
     dispatch({type: "REMOVE_USER_FAVOURITE", payload: response.data.deletedFav });
   })
   .catch((error) => {
     dispatch("FAVOURITES_FAILURE");
   });
}
export const favouriteRequest = (obj) => dispatch => {
 axios.post(`${API}/favourite/add-favourite`, obj)
   .then((response) => {
     console.log(response, 'response')
     dispatch({type: "ADD_USER_FAVOURITE_SUCCCESS", payload: response.data.newFavourite });
   })
   .catch((error) => {
     dispatch("FAVOURITES_FAILURE");
   });
}
export const getFavouriteRequest = ({userId}) => dispatch => {
 axios.get(`${API}/favourite/${userId}`)
   .then((response) => {
     dispatch({type: "GET_USER_FAVOURITES_SUCCCESS", payload: response.data.favourites });
   })
   .catch((error) => {
     dispatch("FAVOURITES_FAILURE");
   });
}
export const checkAvailability = (obj) => dispatch => {
 axios.post(`${API}/booking/check`, obj)
   .then((response) => {
     console.log(response, 'response')
     dispatch({type: "CHECK_BOOKING_AVAILABILITY", payload: response.data });
   })
   .catch((error) => {
     dispatch("BOOKING_FAILURE");
   });
}
export const getAllAvailableBookingDate = ({apartmentId}) => dispatch => {
 axios.get(`${API}/booking/${apartmentId}`)
   .then((response) => {
     dispatch({type: "BOOKINGS_SUCCESSFUL", payload: response.data.bookings });
   })
   .catch((error) => {
     dispatch("BOOKING_FAILURE");
   });
}
export const createBooking = (obj) => dispatch => {
 axios.post(`${API}/booking`, obj)
   .then((response) => {
      console.log(response, 'response')
     dispatch({type: "BOOKING_SUCCESSFUL", payload: response.data.booking });
   })
   .catch((error) => {
     dispatch("BOOKING_FAILURE");
   });
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
}

