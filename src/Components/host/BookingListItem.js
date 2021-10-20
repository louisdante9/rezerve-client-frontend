import "./host.css";

function BookingListItem({
  apartment,
  customer: { firstname, lastname },
  startDate,
  endDate,
}) {
  return (
    <div className="booking-list-item">
      <div className="row-horizontal">
        <div className="table-cells table-cells-first">
          {/* <img
            className="apartment-img"
            src={apartment.img[0]}
            alt=""
          /> */}
        </div>
        <p className="table-cells">{apartment.apartmentName}</p>
        <p className="table-cells">{`${firstname} ${lastname}`}</p>
        <p className="table-cells">{startDate.substring(0, 10)}</p>
        <p className="table-cells">{endDate.substring(0, 10)}</p>
        <p className="table-cells">{apartment.price}</p>
      </div>
    </div>
  );
}

export default BookingListItem;
