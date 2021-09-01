import { combineReducers } from "redux";
import setCurrentUser from './setCurrentUser';
import getListings from './listings'
import favourite from './favourites'
import user from "./user";
import apartments from "./apartments";

const rootReducer = combineReducers({
  setCurrentUser,
  getListings,
  favourite,
  apartments,
  user
});

export default rootReducer;
