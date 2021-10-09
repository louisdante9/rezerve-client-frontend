import BookingListItem from "./BookingListItem";
import "./host.css";
const Bookings = ({ firstname, bookings }) => (
  <>
    <div className="row">
      <div className="col-12 mb-6">
        <h2 className="mb-0">{`${firstname
          .toLowerCase()
          .slice(0, 1)
          .toUpperCase()}${firstname.toLowerCase().slice(1)} bookings`}</h2>
      </div>
      <div className="booking-list">
        <div className="table-rows">
          <div className="table-cells table-cells-first"></div>
          <div className="table-cells">Name</div>
          <div className="table-cells">Customer</div>
          <div className="table-cells">Start Date</div>
          <div className="table-cells">End Date</div>
          <div className="table-cells">Price</div>
        </div>
        {bookings.map(({ _id, apartmentId, userId, startDate, endDate }) => (
          <BookingListItem
            key={_id}
            apartment={apartmentId}
            customer={userId}
            startDate={startDate}
            endDate={endDate}
          />
        ))}
      </div>
      <div className="col-12 mt-8">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item me-2">
              <a className="page-link rounded-2" href="#" aria-label="Previous">
                <span aria-hidden="true">
                  <i className="mdi mdi-chevron-left lh-1"></i>
                </span>
              </a>
            </li>
            <li className="page-item me-2 active">
              <a className="page-link rounded-2  " href="#">
                1
              </a>
            </li>
            <li className="page-item me-2">
              <a className="page-link rounded-2" href="#">
                2
              </a>
            </li>
            <li className="page-item me-2">
              <a className="page-link rounded-2" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link rounded-2" href="#" aria-label="Next">
                <span aria-hidden="true">
                  <i className="mdi mdi-chevron-right lh-1"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);
export default Bookings;
