import axios from "axios";
//  const API = 'https://rezerve.herokuapp.com';
const API = "http://localhost:9000";

export const getHomeOwnerBookings = (homeOwnerId) => async (dispatch) => {
    try {
      const {
        data: { bookings },
        status,
      } = await axios.get(`${API}/booking/home/${homeOwnerId}`);
      if (status === 200) {
        dispatch({
          type: "BOOKINGS_OWNER_SUCCESSFUL",
          payload: bookings,
        });
      }
    } catch (error) {
      if (error.response.data) {
        dispatch({
          type: "GET_OWNER_BOOKINGS_ERROR",
          payload: error.response.data.message,
        });
      }
    }
  };