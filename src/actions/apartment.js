import axios from "axios";
 const API = 'https://rezerve.herokuapp.com';
//const API = "http://localhost:9000";

export const getApartments = () => (dispatch) => {
  axios
    .get(`${API}/apartments`)
    .then(({ data: { apartments } }) => {
      dispatch({
        type: "GET_APARTMENTS_SUCCESS",
        payload: apartments,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_APARTMENTS_ERROR",
        payload: [],
      });
    });
};
