const initialState = {
    bookings: [],
    bookingsLimit: 0,
    bookingsOffset:0,
    bookingsTotal:0,
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
        case "USER_BOOKINGS_SUCCESSFUL":
            return {
                ...state, bookings: [...action.payload.docs],
                bookingsLimit: action.payload.limit,
                bookingsOffset: action.payload.offset,
                bookingsTotal: action.payload.total,
            };
            case "USER_BOOKINGS_FAILURE":
                return{
                    errors: {...action.payload}
                }
        case "CHECK_BOOKING_AVAILABILITY":
            return {
                ...state, checks: [...action.payload.check], booked: action.payload.booked
            };
        case "BOOKINGS_FAILURE":
            return { errors: { ...action.payload } }
        default:
            return state;
    }
};


export default Booking;