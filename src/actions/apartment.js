import axios from "axios";

const API = "http://localhost:9000";

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

/**
 *
 * @desc createProperty
 * @param {any} tokenGET_ADMIN_TRANS_SUCCESS
 * @returns {void}
 */

export const createProperty = (propertyData) => (dispatch) => {
  return axios.post(`${API}/apartment`, propertyData).then(({ data }) => {
    dispatch({ type: "CREATE_APARTMENT_SUCCESS", payload: data.apartmemt });
    return data;
  });
};

/**
 *
 * @desc updateProperty
 * @param {any} token
 * @returns {void}
 */
const updatePropertySuccess = (property) => ({
  type: "UPDATE_PROPERTY_SUCCESS",
  payload: property,
});

export const updateProperty = (id, propertyObj) => (dispatch) => {
  return axios.put(`${API}/apartment/${id}/`, propertyObj).then((response) => {
    dispatch(updatePropertySuccess(response.data.updatedApartment));
    return response.data.updatedApartment;
  });
};
/**
 *
 * @desc this function returns list of transactions
 * @param {any} token
 * @returns {void}
 */

export const deleteProperty = (id) => (dispatch) => {
  return axios
    .delete(`${API}/apartment/${id}/`)

    .then((response) => {
      dispatch(
        updatePropertySuccess({
          type: "DELETE_PROPERTY_SUCCESS",
          payload: response.data.delApartment,
        })
      );
      return response.data.delApartment;
    });
};
