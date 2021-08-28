import axios from "axios";

const API = "http://localhost:9000";

export const getApartments = () => (dispatch) => {
  axios
    .get(`${API}/apartments`)
    .then(({ data: { apartments } }) => {
      console.log("res", apartments);
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
