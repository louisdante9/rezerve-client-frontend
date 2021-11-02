export const initialState = {
  profile: null,
  favourites: [],
  favouritesError: "",
  error: "",
  payments: [],
  paymentError: "",
update: {}

};

 export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_PROFILE_SUCCESS": {
      return { ...state, profile: action.payload };
    }
    case "GET_PROFILE_ERROR": {
      return { ...state, error: action.payload };
    }
    case "GET_FAVOURITES_SUCCESS": {
      return { ...state, favourites: action.payload };
    }
    case "GET_FAVOURITES_ERROR": {
      return { ...state, favouritesError: action.payload };
    }
   case "GET_PAYMENTS_SUCCESS": {
     return {...state, payments: action.payload}
   }
   case "GET_PAYMENTS_ERROR": {
     return {...state, paymentError: action.payload}
   }
   case "USER_UPDATE_SUCCESS": {
     return {...state, update: action.payload.updatedUser }
   }
    
    default:
      return state;
  }
};

;

export const userUpdate = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_SUCCESS":
      return { loading: false, success: true };
   
    case "USER_UPDATE_RESET":
      return {};
    default:
      return state;
  }
};