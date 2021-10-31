import { combineReducers } from "redux";
import setCurrentUser from './setCurrentUser';
import getListings from './listings';
import favourite from './favourites';
import {user, userUpdate} from "./user";
import apartments from "./apartments";
import booking from './Bookings';


const rootReducer = combineReducers({
  setCurrentUser,
  getListings,
  favourite,
  apartments,
  user,
  booking,
  userUpdate

});

export default rootReducer;
