import axios from "axios";
const API = 'https://rezerve.herokuapp.com';
// const API = "http://localhost:9000";

export const getProfile = (userId) => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`${API}/user/get-user/${userId}`);
    if (status === 200) {
      dispatch({
        type: "GET_PROFILE_SUCCESS",
        payload: data.user,
      });
    }
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: "GET_PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  }
};

export const getFavourites = (userId) => async (dispatch) => {
  try {
    const { data, status } = await axios.get(`${API}/favourite/${userId}`);
    if (status === 200) {
      dispatch({
        type: "GET_FAVOURITES_SUCCESS",
        payload: data.favourites,
      });
    }
  } catch (error) {
    if (error.response.data) {
      dispatch({
        type: "GET_FAVOURITES_ERROR",
        payload: error.response.data.message,
      });
    }
  }
};
