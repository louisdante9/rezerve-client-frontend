import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AmentiesListItems from "./AmentiesListItems";
import AddressListItem from "./AddressListItem";
import { AiOutlineCheckSquare } from "react-icons/ai";
import ListingItem from './ListingItem'
import {
  convertNumToCurrency,
  privacyType,
  propertyType,
  propertyTypeGroup,
} from "../../utils";

import {
  singleListing,
  // getAllAvailableBookingDate
} from "../../actions";

import "./host.css";

function ListingsListItem() {
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.setCurrentUser);
  const { property } = useSelector((state) => state.getListings);
  const [toggle, setToggle] = useState(false)

  console.log(property, 'property')
  useEffect(() => {
    dispatch(singleListing({ apartmentId: id, userId: user.id }));
    // dispatch(getAllAvailableBookingDate({apartmentId: id}))
  }, []);
  const handleEditToggle = () => {
    console.log('hello there')
    setToggle(!toggle)
  }

  console.log(property, 'property')

  return (
    <div>
      <div className='container mt-5'>
        {/* <div
          className='py-22 position-relative rounded-3'
          style={{
            background: `url(${
              property?.apartment?.img[0] ||
              "/assets/images/post-single-img.jpg"
            }) no-repeat center center`,
          }}>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-12'>
              <div className='position-absolute bottom-0 mb-5 ms-5'>
                <div>
                  <div
                    onClick={handleFavourite}
                    style={{ marginRight: "10px" }}
                    className='btn btn-white btn-sm'>
                    <span
                      className={
                        favourites.find(
                          (f) => f.apartment?._id || f.apartment === id
                        )
                          ? "mdi mdi-heart me-1 text-danger"
                          : "mdi mdi-heart me-1"
                      }></span>
                    Save
                  </div>
                  <a href='#gallery' className='btn btn-white btn-sm'>
                    View Photos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className='py-6'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-8 col-md-12 col-12'>
              <div className='card mb-4'>
                <div className='card-body p-4'>
                  <h3 className='mb-2'>Listing basics</h3>
                </div>
                <ListingItem
                  title='Listing title'
                  subTitle='Your listing title should highlight what makes your place
                  special.'
                  item={property?.apartment?.propertyName}
                />
                <ListingItem
                  title='Listing group'
                  subTitle='Give guests a sense of what it’s like to stay at your place, including why they’ll love staying there.'
                  type='dropdown'
                  option={propertyTypeGroup}
                  item={property?.apartment?.propertyGroup}
                />
                <ListingItem
                  title='Property type'
                  subTitle='Which of these best describes your place?'
                  type='dropdown'
                  option={propertyType}
                  item={property?.apartment?.propertyType}
                />
                <ListingItem
                  title='Listing type'
                  subTitle='What kind of space will guests have?'
                  type='dropdown'
                  option={privacyType}
                  item={property?.apartment?.privacyType}
                />

                <ListingItem
                  title='Listing description'
                  subTitle='Give guests a sense of what it’s like to stay at your place, including why they’ll love staying there.'
                  item={property?.apartment?.description}
                />
                <ListingItem
                  title='Number of guests'
                  subTitle=''
                  itemTitle='Guests'
                  type='number'
                  item={property?.apartment?.noOfguest}
                />
              </div>

              <div className='card mb-4'>
                <AmentiesListItems property={property} title="Amenities" type="amenities"/>
              </div>
              <AddressListItem property={property}/>
              <div className='card mb-4'>
                <div className='card-body p-4'>
                  <h4>Pricing and rooms</h4>
                </div>
                <ListingItem
                  title='Pricing'
                  subTitle=''
                  itemTitle='Standard price'
                  item={property?.apartment?.pricePerNight}
                />
                <ListingItem
                  title='Number of bedrooms'
                  subTitle=''
                  itemTitle='Bedrooms'
                  type='number'
                  item={property?.apartment?.noOfRooms}
                />
                <ListingItem
                  title='Number of bathrooms'
                  subTitle=''
                  itemTitle='Bathrooms'
                  type='number'
                  item={property?.apartment?.noOfBaths}
                />
                {/* <div className='card-body p-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='mb-2'>Rooms and spaces</h5>
                    <div className='editBtn'>Edit</div>
                  </div>
                </div> */}
              </div>
              {/* <div className="card mb-4">
                <div className="card-body p-4">
                  <h4>Reviews</h4>
                  <div className="row border-bottom mb-5 pb-5 mt-3">
                    <div className="col-md-2">
                      <div className="text-lg-center">
                        <h2 className="display-5 fw-bold mb-0 lh-1">3.8</h2>
                        <p className="mb-0">Reviews</p>
                        <p>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Atmosphere</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="review-list-value">0.5</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Security</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="review-list-value">0.5</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Location</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star-outline text-primary"></span>
                          <span>4.0</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Facilities</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star-half text-primary"></span>
                          <span>4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Staff</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span>0.5</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Cleanliness</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span>0.5</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <span>Value of money</span>
                        </div>
                        <div>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star text-primary"></span>
                          <span className="mdi mdi-star-outline text-primary"></span>
                          <span>4.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="row">
                        <div className="col-md-3">
                          <div>
                            <img
                              src="../assets/images/avatar-3.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-md avatar rounded-circle mb-3"
                            />
                            <h5 className="mb-n1">James Duncan</h5>
                            <small>30 May, 2021</small>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div>
                            <h5 className="fw-bold mb-2">
                              It was absolutely lovely.
                            </h5>
                            <p>
                              Suspendisse potenti. Pellentesque sed elit a augue
                              condimentum varius. Integer porttitor neque quis
                              velit tempor malesuada ersusvelit. Fusce vitae
                              nulla at magna hendrerit rint metus.
                            </p>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-3">
                          <div>
                            <img
                              src="../assets/images/avatar-2.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-md avatar rounded-circle mb-3"
                            />
                            <h5 className="mb-n1">Sameera Badami</h5>
                            <small>30 May, 2021</small>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div>
                            <h5 className="fw-bold mb-2">
                              Superb Place htmlFor stay
                            </h5>
                            <p>
                              The place is too good, the staff was very
                              cooperative &responsive at any given time. What I
                              appreciate the most is they arranged our stay in
                              these times of crisis by doing their best in all
                              manner. We are very grateful to them htmlFor that.
                            </p>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                            <span className="mdi mdi-star text-primary"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-3">Leave Your Review</h4>
                  <form className="row">
                    <div className="mb-3 col-6">
                      <label htmlFor="reviewtitle" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="reviewname"
                        aria-describedby="reviewname"
                        placeholder="John Deo"
                        required=""
                      />
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="reviewemail" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="reviewemail"
                        aria-describedby="reviewemail"
                        placeholder="Enter email"
                        required=""
                      />
                    </div>
                    <div className="mb-3 col-12">
                      <label htmlFor="reviewtitle" className="form-label">
                        Review Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="reviewtitle"
                        aria-describedby="reviewtitle"
                        placeholder="Write Review Title"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <h5>Reviews</h5>
                    </div>
                    <div className="col-md-5 review-total mb-2">
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Atmosphere</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar1"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Security</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar2"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Location</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar3"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Facilities</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar4"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="offset-md-1 col-md-5 review-total">
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Staff</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar5"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Cleanliness</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar6"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-sm">
                        <div>
                          <span>Value of money</span>
                        </div>
                        <div>
                          <span
                            id="ratingstar7"
                            className="rating-star-img"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 col-12 mt-3">
                      <label htmlFor="reviewdescription" className="form-label">
                        Write Your Experience
                      </label>
                      <textarea
                        className="form-control"
                        id="reviewdescription"
                        rows="3"
                      ></textarea>
                    </div>
                    <div
                      className="
                        d-lg-flex
                        justify-content-between
                        align-items-center
                      "
                    >
                      <button type="submit" className="btn btn-primary">
                        Submit Review
                      </button>
                      <small className="ms-2">
                        <span className="text-danger">*</span> Required Filed
                      </small>
                    </div>
                  </form>
                </div>
              </div> */}
              <div className='card mb-4' id='gallery'>
                <div className='card-body p-4'>
                  <h4 className='mb-4'>Gallery</h4>
                  <div className='zoom-gallery'>
                    <div className='row'>
                      {property?.apartment?.img.length ? (
                        property?.apartment?.img.map((p) => (
                          <div className='col-md-4' key={p}>
                            {/* <Zoom
                              zoomMargin={40}
                              style={{
                                outline: "none",
                              }}>
                              <img
                                src={p}
                                className='img-fluid rounded-3 mb-4'
                                alt='Rentkit Directory & Listing Bootstrap 5 Theme'
                                style={{ height: "121px", width: "250px" }}
                              />
                            </Zoom> */}
                          </div>
                        ))
                      ) : (
                        <div className='card-body p-4'>
                          <h4 className='mb-1'>No Photo available</h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-12'>
              <div>
                <div className='card mb-4'>
                  <div className='card-body p-4'>
                    <div className='d-flex align-items-center mb-3'>
                      <h3 className='fw-bold'>
                        {convertNumToCurrency(
                          property?.apartment?.pricePerNight
                        )}
                      </h3>
                      <small className='text-muted ms-2'>/ night</small>
                    </div>
                    <div>
                      <div>
                        <div className='mb-3'>
                          <label className='form-label'>Your Stay</label>
                          <div className='input-group mb-3'>
                            {/* <DateRange
                              editableDateInputs={false}
                              onChange={(item) => setState([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={state}
                              minDate={new Date()}
                              staticRanges={[]}
                              inputRanges={[]}
                              rangeColors={["#6c4af2"]}
                              //  disabledDates={[ new Date(), new Date('2021/09/07') ]}
                            /> */}
                          </div>
                        </div>
                        {/* {error && (
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {error}
                          </span>
                        )} */}
                        {/* <div className='mt-3 d-grid'>
                          {checkedIn ? (
                            <button
                              className='btn btn-primary'
                              type='submit'
                              onClick={handleNavigate}>
                              Check Again
                            </button>
                          ) : (
                            <button
                              className='btn btn-primary'
                              type='submit'
                              onClick={handleSubmit}>
                              Check{loading ? "ing" : ""} Availability
                            </button>
                          )}
                          {checkedIn && (
                            <button
                              style={{ marginTop: "5px" }}
                              className='btn btn-primary'
                              onClick={() => {
                                initializePayment(onSuccess, onClose);
                                // handleFlutterPayment({
                                //   callback: (response) => {
                                //     if(response.status === 'successful'){
                                //       console.log('got here', id, user.id, state, response.transaction_id)
                                //       dispatch(createBooking({
                                //         apartmentId: id,
                                //         userId: user.id,
                                //         startDate: moment(state.startDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                                //         endDate: moment(state.endDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                                //         transactionId: response.transaction_id
                                //          trxref
                                //       }))
                                //     }
                                //     closePaymentModal() // this will close the modal programmatically
                                //   },
                                //   onClose: () => { },
                                // });
                              }}>
                              <i className='mdi mdi-lock me-2'></i>Book Now
                            </button>
                          )}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* {checks.length > 0 && (
                  <div className='card mb-4'>
                    <h5 className='mb-0' style={{ padding: "10px" }}>
                      Booked Dates
                      <span className='mdi mdi-medal text-primary float-right'></span>
                    </h5>
                    <div className='border-top card-body p-4 text-center'>
                      {checks.map((check) => (
                        <p className='mb-0' key={check._id}>
                          <span className='text-primary'>
                            {moment(check?.startDate).format("YYYY-MM-DD")}
                          </span>
                          to{" "}
                          <span className='text-primary'>
                            {moment(check?.endDate).format("YYYY-MM-DD")}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
              <div className='d-grid'>
                <a href='#' className='btn btn-light mb-4'>
                  <i className='mdi mdi-flag-variant-outline me-1'></i>Report
                  this listing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingsListItem;
