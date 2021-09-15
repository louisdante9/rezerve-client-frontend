import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Zoom from 'react-medium-image-zoom'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-medium-image-zoom/dist/styles.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { usePaystackPayment } from 'react-paystack';
import { convertNumToCurrency } from '../utils'
import 'leaflet/dist/leaflet.css';
import { createBooking } from '../actions'


import {
  favouriteRequest,
  getFavouriteRequest,
  delFavouriteRequest,
  singleListing,
  checkAvailability,
  // getAllAvailableBookingDate
} from '../actions'


function ListSingle(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.setCurrentUser)
  const { favourites } = useSelector((state) => state.favourite)
  const { property } = useSelector((state) => state.getListings)
  // const { bookings } = useSelector((state) => state.booking)
  const { checks, booked } = useSelector((state) => state.booking)
  const [loading, setLoading] = useState(false);
  const [checkedIn, setcheckedIn] = useState(false);
  const [error, setError] = useState('');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const config = {
    reference: (new Date()).getTime().toString(),
    email: user?.email,
    amount: property?.apartment?.pricePerNight,
    publicKey: process.env.REACT_APP_PK_PUBLIC_KEY,
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    if (reference.status === 'success') {
      console.log('got here', id, user.id, state, reference.trxref)
      dispatch(createBooking({
        apartmentId: id,
        userId: user.id,
        startDate: moment(state.startDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
        endDate: moment(state.endDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
        amount: property?.apartment?.pricePerNight,
        transactionId: reference.trxref
      }))
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  // const config = {
  //   public_key: process.env.REACT_APP_PUBLIC_KEY,
  //   tx_ref: Date.now(),
  //   amount: property?.apartment?.pricePerNight,
  //   currency: 'NGN',
  //   payment_options: 'card',
  //   customer: {
  //     email: user?.email,
  //     name: `${user?.firstname} ${user?.lastname}`,
  //   },
  //   meta: {
  //     x_action: "LISTING_PAYMENT",
  //     x_apartment_id: property?.apartment?._id,
  //     x_user_id: user?.id,
  //     x_start_date: state.startDate,
  //     x_end_date: state.endDate 
  //   },
  //   customizations: {
  //     title: 'my Payment Title',
  //     description: 'Payment for items in cart',
  //     logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  //   },
  // };
  // const handleFlutterPayment = useFlutterwave(config);
  const initializePayment = usePaystackPayment(config);


  console.log(property, 'property')
  const { handleSubmit } = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setLoading(!loading);
      setcheckedIn(false);
      setError('');
      const { startDate, endDate } = state[0]
      if (!endDate) {
        return setError('A date range is required ')
      }
      let start = moment(startDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toISOString()
      let end = moment(endDate).utc(1).set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toISOString()
      console.log(start, end)
      dispatch(checkAvailability({
        startDate: start,
        endDate: end,
        apartmentId: property?.apartment?._id
      }));
    },
  });

  useEffect(() => {
    dispatch(getFavouriteRequest({ userId: user.id }))
    dispatch(singleListing({ apartmentId: id, userId: user.id }))
    // dispatch(getAllAvailableBookingDate({apartmentId: id}))
  }, []);

  useEffect(() => {
    if (booked !== undefined && !booked) {
      setcheckedIn(!booked)
    }
  }, [booked])

  const handleFavourite = () => {
    favourites.find(f => f.apartment?._id || f.apartment === id)
      ? dispatch(delFavouriteRequest({ apartmentId: id, userId: user.id }))
      : dispatch(favouriteRequest({ apartmentId: id, userId: user.id }))
  }
  return (
    <div>
      <div className="container mt-5">
        <div
          className="py-22 position-relative rounded-3"
          style={{
            background:
              `url(${property?.apartment?.img[0] || '/assets/images/post-single-img.jpg'}) no-repeat center center`,
          }}
        >
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="position-absolute bottom-0 mb-5 ms-5">
                <div>
                  <div
                    onClick={handleFavourite}
                    style={{ marginRight: '10px' }}
                    className="btn btn-white btn-sm">
                    <span className={favourites.find(f => f.apartment?._id || f.apartment === id) ? "mdi mdi-heart me-1 text-danger" : "mdi mdi-heart me-1"}></span>Save
                  </div>
                  <a href="#gallery" className="btn btn-white btn-sm">
                    View Photos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h2 className="mb-2">
                    {property?.apartment?.propertyName}
                  </h2>
                  <p className="mb-4 fs-6">{property?.apartment?.address}, {property?.apartment?.state}</p>
                  <div className="text-sm">
                    <span className="me-2">
                      <i className="mdi mdi-account text-primary"></i>
                      <span className="ms-2">{property?.apartment?.noOfguest} Guest</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-home text-primary"></i>
                      <span className="ms-2">{property?.apartment?.noOfRooms}  Bedroom</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-bed-empty text-primary"></i>
                      <span className="ms-2">{property?.apartment?.noOfRooms}  Bed</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-scale-bathroom text-primary"></i>
                      <span className="ms-2">{property?.apartment?.noOfBaths} Bath</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4>Overview</h4>
                  <p>
                    {property?.apartment?.description}
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-3">Amenities</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-unstyled">
                        {property?.apartment?.amenities.split(',').slice(0, 4).map((amenity) => (
                          <li className="list-item" key={amenity}>
                            <AiOutlineCheckSquare />{" "}
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-unstyled">
                        {property?.apartment?.amenities.split(',').slice(4,).map((amenity) => (
                          <li className="list-item" key={amenity}>
                            <AiOutlineCheckSquare />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
              <div className="card mb-4" id="gallery">
                <div className="card-body p-4">
                  <h4 className="mb-4">Gallery</h4>
                  <div className="zoom-gallery">
                    <div className="row">
                      {property?.apartment?.img.length ? property?.apartment?.img.map((p) => (
                        <div className="col-md-4" key={p}>
                          <Zoom
                            zoomMargin={40}
                          >
                            <img
                              src={p}
                              className="img-fluid rounded-3 mb-4"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              style={{ height: '121px', width: '100%' }}
                            />
                          </Zoom>
                        </div>
                      )) : (
                        <div className="card-body p-4">
                          <h4 className="mb-1">No Photo available</h4>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-1">Location</h4>
                  <p>
                    {`${property?.apartment?.propertyName} ${property?.apartment?.propertyType} at located in 
                    ${property?.apartment?.address}, ${property?.apartment?.city}, ${property?.apartment?.state}`}
                  </p>
                  {/* <div id="detailMap" className="listing-map"></div> */}
                  {property?.apartment?.latitude
                    && property?.apartment?.longitude
                    && (<MapContainer center={[property?.apartment?.latitude, property?.apartment?.longitude]} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[property?.apartment?.latitude, property?.apartment?.longitude]}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                        <Popup>
                          This is your destination.
                          {/* <br /> Easily customizable. */}
                        </Popup>
                      </Marker>
                    </MapContainer>)}
                </div>
              </div>
              <div className="card mb-4" id="faq">
                <div className="card-body p-4">
                  <h4 className="mb-2">House rules</h4>
                  <li>
                    Check-in: After 12:00 pm.
                  </li>
                  <li>
                    No smoking
                  </li>
                  <li>
                    No pets
                  </li>
                  <li>
                    No parties or events
                  </li>
                  <div className="mb-3">
                    <h4 className="mb-1">
                      Health & safety
                    </h4>
                    <p>
                      Committed to Rezerve's enhanced cleaning process. Show more
                      Rezerve's social distancing and other COVID-19-related guidelines apply
                      Carbon monoxide alarm not reported Show more
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div>
                <div className="card mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <h3 className="fw-bold">{convertNumToCurrency(property?.apartment?.pricePerNight)}</h3>
                      <small className="text-muted ms-2">/ night</small>
                    </div>
                    <div>
                      <div>
                        <div className="mb-3">
                          <label className="form-label">Your Stay</label>
                          <div className="input-group mb-3">
                            <DateRange
                              editableDateInputs={false}
                              onChange={(item) => setState([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={state}
                              minDate={new Date()}
                              staticRanges={[]}
                              inputRanges={[]}
                              rangeColors={['#6c4af2']}
                            //  disabledDates={[ new Date(), new Date('2021/09/07') ]}
                            />
                          </div>
                        </div>
                        {error && <span style={{ color: 'red', fontSize: '15px' }}>{error}</span>}
                        <div className="mt-3 d-grid">
                          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                            Check{loading ? "ing" : ""} Availability
                          </button>
                          {checkedIn && (<button
                            style={{ marginTop: '5px' }}
                            className="btn btn-primary"
                            onClick={() => {
                              initializePayment(onSuccess, onClose)
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
                            <i className="mdi mdi-lock me-2"></i>Book Now
                          </button>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {checks.length > 0 && (<div className="card mb-4">
                  <h5 className="mb-0" style={{ padding: '10px' }}>
                    Booked Dates
                    <span
                      className="mdi mdi-medal text-primary float-right"
                    ></span>
                  </h5>
                  <div className="border-top card-body p-4 text-center">
                    {checks.map((check) => (
                      <p className="mb-0" key={check._id}>
                        <span className="text-primary">{moment(check?.startDate).format('YYYY-MM-DD')}</span>
                        to <span className="text-primary">{moment(check?.endDate).format('YYYY-MM-DD')}</span>
                      </p>
                    ))
                    }
                  </div>
                </div>)}
              </div>
              <div className="d-grid">
                <a href="#" className="btn btn-light mb-4">
                  <i className="mdi mdi-flag-variant-outline me-1"></i>Report
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

export default ListSingle;
