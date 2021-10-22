const initialState = {
    favourites: [],
    errors: {}
};
const Favourite = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER_FAVOURITE_SUCCCESS":
            const favouritesList = state.favourites;
            return {
                ...state, favourites: [...favouritesList, action.payload]
            };
        case "REMOVE_USER_FAVOURITE":
            const {payload} = action;
            const favList = state.favourites;
            const favIndex = findFavouriteIndex(favList, payload._id);
            return {
                ...state, favourites: [
                    ...favList.slice(0, favIndex),
                    ...favList.slice(favIndex + 1),
                  ]
            };
        case "GET_USER_FAVOURITES_SUCCCESS":
            return {
                ...state, favourites: [...action.payload.docs]
            };
        case "FAVOURITES_FAILURE":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};
const findFavouriteIndex = (items, id) => {
  return items.findIndex((p) => p._id === id);
};

export default Favourite;