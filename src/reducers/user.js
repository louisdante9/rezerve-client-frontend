export const initialState = {
  profile: null,
  favourites: [],
  favouritesError: "",
  error: "",
  limit: 0,
    offSet:0,
    totalPage:0,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_PROFILE_SUCCESS": {
      return { ...state, profile: action.payload };
    }
    case "GET_PROFILE_ERROR": {
      return { ...state, error: action.payload };
    }
    case "GET_FAVOURITES_SUCCESS": {
      return { ...state, favourites: [...action.payload.docs],
        limit: action.payload.limit,
                offSet: action.payload.offset,
                totalPage: action.payload.total,};
    }
    case "GET_FAVOURITES_ERROR": {
      return { ...state, favouritesError: action.payload };
    }
    default:
      return state;
  }
};

export default user;
