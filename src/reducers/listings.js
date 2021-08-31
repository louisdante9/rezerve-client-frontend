const initialState = {
    listings: [],
    ratingAvg: [],
    property: {},
    errors: {}
};
const getListings = (state = initialState, action) => {
    switch (action.type) {
        case "GET_APARTMENT_SUCCESS":
            return {
                ...state, property: { ...action.payload }
            };
        case "GET_APARTMENTS_SUCCESS":
            return {
                ...state, listings: [...action.payload.listings], ratingAvg: [...action.payload.ratingAvg]
            };
        case "GET_APARTMENTS_ERROR":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};

export default getListings;