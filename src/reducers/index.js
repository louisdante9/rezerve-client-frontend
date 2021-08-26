import { combineReducers } from "redux";

const rootReducer = combineReducers({
  sample: (state = {}, action) => {
    switch (action.type) {
      case "GET_USER_SUCCESS":
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
});

export default rootReducer;
