import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AiOutlineCheckSquare } from "react-icons/ai";
import { convertNumToCurrency } from '../utils'
import postImg from '../Assets/images/post-single-img.jpg'
import { favouriteRequest, getFavouriteRequest, delFavouriteRequest, singleListing } from '../actions'


function ListSingle(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.setCurrentUser)
  const { favourites } = useSelector((state) => state.favourite)
  const { property } = useSelector((state) => state.getListings)

  useEffect(() => {
    dispatch(getFavouriteRequest({ userId: user.id }))
    dispatch(singleListing({ apartmentId: id, userId: user.id }))
  }, []);


  const handleFavourite = () => {
    favourites.find(f => f.apartment === id)
      ? dispatch(delFavouriteRequest({ apartmentId: id, userId: user.id }))
      : dispatch(favouriteRequest({ apartmentId: id, userId: user.id }))
  }
  console.log(property, 'property')
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
                    <span className={property.favourited ? "mdi mdi-heart me-1 text-danger" : "mdi mdi-heart me-1"}></span>Save
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
                        {property?.apartment?.amenities.split(',').slice(0,4).map((amenity)=>(
                          <li className="list-item">
                          <AiOutlineCheckSquare />
                          {amenity}
                        </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-unstyled">
                      {property?.apartment?.amenities.split(',').slice(4, ).map((amenity)=>(
                          <li className="list-item">
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
                        <div className="col-md-4">
                          <a
                            href="/assets/images/gallery-zoom-img-1.jpg"
                            title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                          >
                            <img
                              src={p}
                              className="img-fluid rounded-3 mb-4"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              style={{ height: '121px', width: '100%' }}
                            />
                          </a>
                        </div>
                      )) : (
                        <div className="card-body p-4">
                          <h4 className="mb-1">No Photo available</h4>
                        </div>
                      )
                      }
                      {/* <div className="col-md-4">
                        <a
                          href="/assets/images/gallery-zoom-img-1.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="/assets/images/gallery-img-1.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="/assets/images/gallery-zoom-img-2.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="/assets/images/gallery-img-2.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="/assets/images/gallery-zoom-img-3.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="/assets/images/gallery-img-3.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="/assets/images/gallery-zoom-img-4.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="/assets/images/gallery-img-4.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="/assets/images/gallery-zoom-img-3.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="/assets/images/gallery-img-3.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a href="/assets/images/gallery-zoom-img-2.jpg">
                          <img
                            src="/assets/images/gallery-img-2.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div> */}
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
                  <div id="detailMap" className="listing-map"></div>
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
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Your Stay</label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="dateSelect"
                              placeholder="Select Date"
                              aria-label="Recipient's username"
                            />
                            <span className="input-group-text bg-transparent">
                              <i className="mdi mdi-calendar-month-outline"></i>
                            </span>
                          </div>
                        </div>
                        <select className="select2">
                          <option>Guest</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <div className="mt-3 d-grid">
                          <button className="btn btn-primary" type="button">
                            Check Availability
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <div className="card mb-4">
                  <div className="card-body p-4">
                    <h5 className="mb-0">
                      Hosted by
                      <span className="mdi mdi-medal text-primary float-right"></span>
                    </h5>
                    <div className="text-center mt-4">
                      <img
                        src="/assets/images/avatar-3.jpg "
                        alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                        className="rounded-circle avatar avatar-lg mb-2"
                      />
                      <h5 className="mb-0">Juana Henry</h5>
                      <small>joined in january 2017</small>
                      <p className="mb-0 mx-5 mt-3">
                        Duis varius finibus felis, a tincidunt sedmauris varius
                        eudeunc aliquet ipsum odio id luctus quam dapibus sem.
                      </p>
                    </div>
                  </div>
                  <div className="border-top card-body p-4 text-center">
                    <p className="mb-0">
                      Response rate: <span className="text-primary">100%</span>
                    </p>
                    <p>
                      Response time:
                      <span className="text-primary">within an hour</span>
                    </p>
                    <div className="d-grid mx-8">
                      <a href="#" className="btn btn-dark">
                        Contact Host
                      </a>
                    </div>
                  </div>
                </div> */}
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
