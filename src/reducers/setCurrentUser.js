import isEmpty from 'lodash/isEmpty';

export const initialState = {
  isAuthenticated: false,
  user: {}
};

const setCurrentUser = (state = initialState, action = {}) => {
  switch (action.type) {
      case "USER_AUTHENTICATED": {
        let { user } = action;

      return { ...state, isAuthenticated: !isEmpty(action.user), user, role: user?.role };
    }
    case "USER_SIGNUP_ERRORS":
      return action.payload;
    
    default: return state;

  }
};
export default setCurrentUser;
