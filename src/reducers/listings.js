const initialState = {
    listings: [],
    ratingAvg: [],
    limit: 0,
    offSet:0,
    totalPage:0,
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
                ...state, 
                listings: [...action.payload.listings.docs], 
                limit: action.payload.listings.limit,
                offSet: action.payload.listings.offset,
                totalPage: action.payload.listings.total,
                 ratingAvg: [...action.payload.ratingAvg]
            };
        case "GET_APARTMENTS_ERROR":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};

export default getListings;