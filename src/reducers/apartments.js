export const initialState = {
  apartments: [],
};

const apartments = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_APARTMENTS_ERROR":
    case "GET_APARTMENTS_SUCCESS": {
      return { ...state, apartments: action.payload };
    }

    default:
      return state;
  }
};

export default apartments;
