import { combineReducers } from "redux";

import setCurrentUser from './setCurrentUser';
import getListings from './listings'
import favourite from './favourites'

const rootReducer = combineReducers({
  setCurrentUser,
  getListings,
  favourite
});

export default rootReducer;
