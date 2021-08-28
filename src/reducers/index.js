import { combineReducers } from "redux";

import setCurrentUser from "./setCurrentUser";
import apartments from "./apartments";

const rootReducer = combineReducers({
  setCurrentUser,
  apartments,
});

export default rootReducer;
