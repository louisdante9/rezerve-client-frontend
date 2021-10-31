import axios from "axios";
//  const API = 'https://rezerve.herokuapp.com';
const API = "http://localhost:9000";

const getAllBookingssSuccess = bookings =>
({ type: "GET_BOOKINGS_SUCCESS", payload: bookings });

const getAllBookingsError = data =>
({ type: "GET_BOOKINGS_ERROR", payload: data });

export const getAllBookingsAdmin = () => dispatch => {
axios.get(`${API}/booking`)
  .then((response) => {
    console.log(response.data.bookings, 'response')
    dispatch(getAllBookingssSuccess(response.data.bookings));
  })
  .catch((error) => {
    dispatch(getAllBookingsError(error.response.data));
  });
}
