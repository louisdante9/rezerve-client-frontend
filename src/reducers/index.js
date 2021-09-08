import { combineReducers } from "redux";

import setCurrentUser from './setCurrentUser';
import getListings from './listings'
import favourite from './favourites'
import booking from './Bookings'

const rootReducer = combineReducers({
  setCurrentUser,
  getListings,
  favourite,
  booking
});

export default rootReducer;
