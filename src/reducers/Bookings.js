const initialState = {
    bookings: [],
    homeOwnerBookings: [],
    checks: [],
    errors: {}
};
const Booking = (state = initialState, action) => {
    switch (action.type) {
        case "BOOKING_SUCCESSFUL":
            return {
                ...state, booking: { ...action.payload }
            };
        case "BOOKINGS_SUCCESSFUL":
            return {
                ...state, bookings: [...action.payload]
            };
        case "BOOKINGS_OWNER_SUCCESSFUL":
            return {
                ...state, homeOwnerBookings: [...action.payload]
            };
        case "CHECK_BOOKING_AVAILABILITY":
            return {
                ...state, checks: [...action.payload.check], booked: action.payload.booked
            };
        case "BOOKINGS_FAILURE":
        case "BOOKINGS_OWNER_FAILURE":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};


export default Booking;
