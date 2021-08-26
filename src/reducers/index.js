import { combineReducers } from 'redux';

import setCurrentUser from './setCurrentUser';

const rootReducer = combineReducers({
  setCurrentUser,
});

export default rootReducer;
