import { combineReducers } from "redux";
import setCurrentUser from './setCurrentUser';
import getListings from './listings'
import favourite from './favourites'
import user from "./user";
import booking from './Bookings'


const rootReducer = combineReducers({
  setCurrentUser,
  getListings,
  favourite,
  user,
  booking
});

export default rootReducer;
