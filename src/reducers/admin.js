const initialState = {
    bookings: [],
    
};
const admin = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOOKING_SUCCESS":
            return {
                ...state, property: { ...action.payload }
            };
        case "GET_BOOKINGS_SUCCESS":
            return {
                ...state, 
                bookings: [...action.payload.bookings], 
            };
        case "GET_BOOKINGS_ERROR":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};

export default admin;