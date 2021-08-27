import isEmpty from 'lodash/isEmpty';

export const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

const setCurrentUser = (state = initialState, action = {}) => {
  switch (action.type) {
      case "USER_AUTHENTICATED": {
        let { user } = action;

      return { ...state, isAuthenticated: !isEmpty(action.user), user, role: user?.role };
    }
    case "USER_SIGNUP_ERRORS":
      return {errors: {...action.payload }}
    case "USER_LOGIN_ERROR":
      return {errors: {...action.payload }}
    
    default: return state;

  }
};
export default setCurrentUser;
