import React from "react";

function ListSingle(props) {
  return (
    <div>
      <div className="container mt-5">
        <div
          className="py-22 position-relative rounded-3"
          style={{
            background:
              "url(../assets/images/post-single-img.jpg) no-repeat center center",
          }}
        >
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="position-absolute bottom-0 mb-5 ms-5">
                <div>
                  <a href="/" className="btn btn-white btn-sm">
                    <span className="mdi mdi-heart me-1 text-danger"></span>Save
                  </a>
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
                    Modern & flexible home for one day outing
                  </h2>
                  <p className="mb-4 fs-6">Ahmedabad, Gujarat,India</p>
                  <div className="text-sm">
                    <span className="me-2">
                      <i className="mdi mdi-account text-primary"></i>
                      <span className="ms-2">4 Guest</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-home text-primary"></i>
                      <span className="ms-2">3 Bedroom</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-bed-empty text-primary"></i>
                      <span className="ms-2">3 Bed</span>
                    </span>
                    <span className="me-2">
                      <i className="mdi mdi-scale-bathroom text-primary"></i>
                      <span className="ms-2">3 Bath</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4>Overview</h4>
                  <p>
                    Convallis nulla felis id lacus. Nam lectus duiultricies ac
                    augue ultrices mattis pellentesque one neqpulvinar quam
                    turpissit amet suscipit turpis elementum in.auris laoreet
                    porttitor lacus non rhoncusulla congue augue at sagittis
                    volutpat, arcu ipsum prpurus.Praesent dictum, arcu eu
                    convallis accumsan, neque turpis convallis elit, nec lacinia
                    neque tortor id mauris.
                  </p>
                  <p className="mb-0">
                    Phasellus eu leo rhoncus, cursus erat id, volutpat nisl.
                    Proin sed laoreet felis. Aenean sollicitudin dictum augue,
                    non scelerisque nulla cursus vitae. Mauris molestie, tellus
                    sed vehicula ultricies, ex arcu semper nibh, eu malesuada
                    turpis metus a orci. Pellentesque consequat, tortor sit amet
                    hendrerit ornare, mi erat ultricies eros, placerat auctor
                    lacus erat a tortorefficitur non. Maecenas a molestie lorem.
                  </p>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-3">Amenities</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-unstyled">
                        <li className="list-item">
                          <span className="mdi mdi-air-conditioner me-2 text-dark fs-5"></span>
                          Air conditioning
                        </li>
                        <li className="list-item">
                          <span
                            className="
                              mdi mdi-television-classic
                              me-2
                              text-dark
                              fs-5
                            "
                          ></span>
                          TV
                        </li>
                        <li className="list-item">
                          <span
                            className="
                              mdi mdi-car-brake-parking
                              me-2
                              text-dark
                              fs-5
                            "
                          ></span>
                          Free parking on premises
                        </li>
                        <li className="list-item">
                          <span className="mdi mdi-pool me-2 text-dark fs-5"></span>
                          Pool
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-unstyled">
                        <li className="list-item">
                          <span
                            className="
                              mdi mdi-thermometer-lines
                              me-2
                              text-dark
                              fs-5
                            "
                          ></span>
                          Heating
                        </li>
                        <li className="list-item">
                          <span className="mdi mdi-toilet me-2 text-dark fs-5"></span>
                          Toiletteries
                        </li>
                        <li className="list-item">
                          <span className="mdi mdi-television me-2 text-dark fs-5"></span>
                          Desk for work
                        </li>
                        <li className="list-item">
                          <span className="mdi mdi-washing-machine me-2 text-dark fs-5"></span>
                          Washing machine
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
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
                              Superb Place for stay
                            </h5>
                            <p>
                              The place is too good, the staff was very
                              cooperative &responsive at any given time. What I
                              appreciate the most is they arranged our stay in
                              these times of crisis by doing their best in all
                              manner. We are very grateful to them for that.
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
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-3">Leave Your Review</h4>
                  <form className="row">
                    <div className="mb-3 col-6">
                      <label for="reviewtitle" className="form-label">
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
                      <label for="reviewemail" className="form-label">
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
                      <label for="reviewtitle" className="form-label">
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
                      <label for="reviewdescription" className="form-label">
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
              </div>
              <div className="card mb-4" id="gallery">
                <div className="card-body p-4">
                  <h4 className="mb-4">Gallery</h4>
                  <div className="zoom-gallery">
                    <div className="row">
                      <div className="col-md-4">
                        <a
                          href="../assets/images/gallery-zoom-img-1.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="../assets/images/gallery-img-1.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="../assets/images/gallery-zoom-img-2.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="../assets/images/gallery-img-2.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="../assets/images/gallery-zoom-img-3.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="../assets/images/gallery-img-3.jpg"
                            className="img-fluid rounded-3 mb-4"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="../assets/images/gallery-zoom-img-4.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="../assets/images/gallery-img-4.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a
                          href="../assets/images/gallery-zoom-img-3.jpg"
                          title="Gallery Image Rentkit Directory Bootstrap 5 Template"
                        >
                          <img
                            src="../assets/images/gallery-img-3.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                      <div className="col-md-4">
                        <a href="../assets/images/gallery-zoom-img-2.jpg">
                          <img
                            src="../assets/images/gallery-img-2.jpg"
                            className="img-fluid rounded-3 mb-4 mb-lg-0"
                            alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-3">Video</h4>
                  <div
                    className="
                      d-flex
                      justify-content-center
                      position-relative
                      rounded
                      py-16
                      border-white border
                      rounded-lg
                    "
                    style={{
                      backgroundImage: "url(../assets/images/featured-img.jpg)",
                    }}
                  >
                    <a
                      className="
                        popup-youtube
                        icon-shape
                        rounded-circle
                        icon-xl
                        text-decoration-none
                        bg-white
                        fs-3
                      "
                      href="https://www.youtube.com/watch?v=nb9gtT-BqRc"
                    >
                      <i className="mdi mdi-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h4 className="mb-1">Location</h4>
                  <p>
                    Juana Henery’s place is located in Ahemedabad, Gujarat,
                    India
                  </p>
                  <div id="detailMap" className="listing-map"></div>
                </div>
              </div>
              <div className="card mb-4" id="faq">
                <div className="card-body p-4">
                  <h4 className="mb-2">Frequently Ask Question</h4>
                  <p>
                    Juana Henery’s place is located in Ahemedabad, Gujarat,
                    India
                  </p>
                  <div className="mb-3">
                    <h5 className="mb-1">
                      Q. How manyhasellus velfelism pcommodo lacus?
                    </h5>
                    <p>
                      Suspendisse et risus non metus tincidunt aliquam. Aliquam
                      ornare pellentesque eros necesdere fermentum. Aenean sit
                      amet tellus nec ante dapibus congue at eget leo.
                    </p>
                  </div>
                  <div className="mb-3">
                    <h5 className="mb-1">
                      Q. Is there ferum efficitur feliendulla viverante sit ame?
                    </h5>
                    <p>
                      Phasellus vel felis fringilla pretium purus ucommodo
                      lacuhasellus laoreet imperdiet arcuatesd posuere. Nunc
                      posuere semper velit posuere sodales fringilla pretium.
                    </p>
                  </div>
                  <div className="mb-0">
                    <h5 className="mb-1">
                      Q. Why estibulum tristiqueorcid lobortis tincidun?
                    </h5>
                    <p>
                      Aliquam efficitur dolor interdum porttitor ultricieaecenas
                      pretium volutpat commodtid dictum ipsumliquam scelerisque
                      fermentum elitvel volutpat quam.
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
                      <h3 className="fw-bold">$120</h3>
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
                <div className="card mb-4">
                  <div className="card-body p-4">
                    <h5 className="mb-0">
                      Hosted by
                      <span className="mdi mdi-medal text-primary float-right"></span>
                    </h5>
                    <div className="text-center mt-4">
                      <img
                        src="../assets/images/avatar-3.jpg "
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
                </div>
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
      <div className="pb-lg-12 pb-7 bg-white" id="similarspace">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="mb-8 text-center">
                <h2 className="mb-0">Similar Places to Stay</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="mb-4 mb-lg-0">
                <div className="position-relative">
                  <div
                    id="listcarouselTwo"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-bs-target="#listcarouselTwo"
                        data-bs-slide-to="0"
                        className="active rounded-circle"
                      ></li>
                      <li
                        data-bs-target="#listcarouselTwo"
                        data-bs-slide-to="1"
                        className="rounded-circle"
                      ></li>
                      <li
                        data-bs-target="#listcarouselTwo"
                        data-bs-slide-to="2"
                        className="rounded-circle"
                      ></li>
                    </ol>
                    <div className="carousel-inner rounded-3">
                      <div className="carousel-item active">
                        <img
                          src="../assets/images/listing-img-4.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../assets/images/listing-img-5.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../assets/images/listing-img-6.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#listcarouselTwo"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i
                        className="
                          mdi mdi-chevron-left
                          icon-shape icon-xs
                          bg-white
                          rounded-circle
                          fs-4
                        "
                      ></i>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#listcarouselTwo"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i
                        className="
                          mdi mdi-chevron-right
                          icon-shape icon-xs
                          bg-white
                          rounded-circle
                          fs-4
                        "
                      ></i>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                  <div className="btn-wishlist"></div>
                  <span
                    className="
                      badge
                      bg-danger
                      position-absolute
                      start-0
                      ms-3
                      mt-3
                      top-0
                      z-1
                    "
                  >
                    Featured
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="mb-0">
                    <a href="list-single.html" className="text-inherit">
                      Beautiful Cozy Home
                    </a>
                  </h4>
                  <p className="text-sm font-weight-semi-bold">
                    Udaipur, Rajasthan, India
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <span className="h5">$100</span>
                      <span className="text-sm font-weight-semi-bold ms-1">
                        /night
                      </span>
                    </div>
                    <div>
                      <span className="mdi mdi-star me-1 text-primary text-sm"></span>
                      <span className="font-weight-semi-bold text-sm">
                        <span className="text-dark">5.0</span> (8)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="mb-4 mb-lg-0">
                <div className="position-relative">
                  <a href="list-single.html">
                    <img
                      src="../assets/images/listing-img-2.jpg"
                      alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                      className="w-100 rounded-3"
                    />
                  </a>
                  <div className="btn-wishlist"></div>
                  <span className="badge bg-info position-absolute start-0 ms-3 mt-3">
                    Promoted
                  </span>
                </div>
                <div className="mt-3">
                  <div>
                    <h4 className="mb-0">
                      <a href="list-single.html" className="text-inherit">
                        Affordable Long Term Room
                      </a>
                    </h4>
                    <p className="text-sm font-weight-semi-bold">
                      Daman, Daman and Diu, India
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <span className="h5">$250</span>
                      <span className="text-sm font-weight-semi-bold ms-1">
                        /night
                      </span>
                    </div>
                    <div>
                      <span className="mdi mdi-star me-1 text-primary text-sm"></span>
                      <span className="font-weight-semi-bold text-sm">
                        <span className="text-dark">4.9</span> (6)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="mb-4 mb-lg-0">
                <div className="position-relative">
                  <div
                    id="listcarouselThird"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-bs-target="#listcarouselThird"
                        data-bs-slide-to="0"
                        className="active rounded-circle"
                      ></li>
                      <li
                        data-bs-target="#listcarouselThird"
                        data-bs-slide-to="1"
                        className="rounded-circle"
                      ></li>
                      <li
                        data-bs-target="#listcarouselThird"
                        data-bs-slide-to="2"
                        className="rounded-circle"
                      ></li>
                    </ol>
                    <div className="carousel-inner rounded-3">
                      <div className="carousel-item active">
                        <img
                          src="../assets/images/listing-img-4.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../assets/images/listing-img-5.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../assets/images/listing-img-6.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#listcarouselThird"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i
                        className="
                          mdi mdi-chevron-left
                          icon-shape icon-xs
                          bg-white
                          rounded-circle
                          fs-4
                        "
                      ></i>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#listcarouselThird"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i
                        className="
                          mdi mdi-chevron-right
                          icon-shape icon-xs
                          bg-white
                          rounded-circle
                          fs-4
                        "
                      ></i>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                  <div className="btn-wishlist"></div>
                </div>
                <div className="mt-3">
                  <h4 className="mb-0">
                    <a href="list-single.html" className="text-inherit">
                      Entire 3 BHK Cozy Apartment
                    </a>
                  </h4>
                  <p className="text-sm font-weight-semi-bold">
                    Ahmedabad, Gujarat, India
                  </p>

                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <span className="h5">$180</span>
                      <span className="text-sm font-weight-semi-bold ms-1">
                        /night
                      </span>
                    </div>
                    <div>
                      <span className="mdi mdi-star me-1 text-primary text-sm"></span>
                      <span className="font-weight-semi-bold text-sm">
                        <span className="text-dark">4.7</span> (4)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSingle;
