import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Home(props) {
  return (
    <div>
      <Nav />
      <div className="d-flex flex-wrap w-100">
        <div className="flex-1" style={{ minWidth: 0 }}>
          <div className="w-100">
            <div className="position-relative d-flex pt-lg-6 flex-column min-vh-xl-100">
              <span
                className="position-absolute top-0 end-0 bottom-0 start-0"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  backgroundImage: "url(assets/images/hero-img-one.jpg)",
                }}
              ></span>
              <div
                className="
                position-relative
                d-flex
                flex-column
                justify-content-center
                pt-12
                z-2
              "
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="py-lg-20 py-6 py-md-14 position-relative">
                        <div className="text-center mb-10">
                          <h1 className="text-white display-3 fw-bold mb-1">
                            Find the great rentals
                          </h1>
                          <p className="lead text-white">
                            Find and book rental rooms, hotels, villa, and trip.
                          </p>
                        </div>
                        <div className="card border-0 p-3 search-form">
                          <div className="row">
                            <div className="col-sm">
                              <select className="select2">
                                <option>Where</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Surat">Surat</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Udaipur">Udaipur</option>
                                <option value="Daman">Daman</option>
                                <option value="Pune">Pune</option>
                                <option value="Jaipur">Jaipur</option>
                              </select>
                            </div>
                            <div
                              className="
                              col-sm
                              form-group
                              border-start-md border-end-md
                            "
                            >
                              <input
                                type="text"
                                id="dateSelect"
                                className="form-control border-0"
                                placeholder="Check in / Check out"
                              />
                            </div>
                            <div className="col-sm">
                              <select className="select2">
                                <option>Guest</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                            <div className="col-sm-2">
                              <div className="d-grid">
                                <a href="/" className="btn btn-primary">
                                  Search
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-lg-11 py-7 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12 text-center">
                  <div className="mb-8">
                    <h2 className="mb-1">Featured Rental Cities</h2>
                    <p className="mb-0">
                      Discover thousands of homes for rent in 50+ countries.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
                    <div
                      className="card w-100 border-0 overlay-bg img-hover"
                      style={{
                        backgroundImage: "url(assets/images/listing-img-1.jpg)",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="pt-4 ps-4 pb-18 z-1">
                        <h3 className="text-white mb-0">New York</h3>
                        <p className="text-white mb-0">87 rentals</p>
                      </div>
                      <a href="/" className="stretched-link">
                        hi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-lg-stretch col-md-3 col-12 mb-4">
                    <div
                      className="card w-100 border-0 overlay-bg img-hover"
                      style={{
                        backgroundImage: "url(assets/images/listing-img-2.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <div className="pt-4 ps-4 pb-18 z-1">
                        <h3 className="text-white mb-0">Tokyo</h3>
                        <p className="text-white mb-0">68 rentals</p>
                      </div>
                      <a href="/" className="stretched-link">
                        hi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-lg-stretch col-md-3 col-12 mb-4">
                    <div
                      className="card w-100 border-0 overlay-bg img-hover"
                      style={{
                        backgroundImage: "url(assets/images/listing-img-3.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <div className="pt-4 ps-4 pb-18 z-1">
                        <h3 className="text-white mb-0">Australia</h3>
                        <p className="text-white mb-0">54 rentals</p>
                      </div>
                      <a href="/" className="stretched-link">
                        hi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
                    <div
                      className="card w-100 border-0 overlay-bg img-hover"
                      style={{
                        backgroundImage: "url(assets/images/listing-img-3.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <div className="pt-4 ps-4 pb-18 z-1">
                        <h3 className="text-white mb-0">Paris</h3>
                        <p className="text-white mb-0">221 rentals</p>
                      </div>
                      <a
                        href="pages/listing-category.html"
                        className="stretched-link"
                      >
                        hi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-lg-stretch col-md-6 col-12 mb-4">
                    <div
                      className="card w-100 border-0 overlay-bg img-hover"
                      style={{
                        backgroundImage: "url(assets/images/listing-img-3.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    >
                      <div className="pt-4 ps-4 pb-18 z-1">
                        <h3 className="text-white mb-0">Chicago</h3>
                        <p className="text-white mb-0">143 rentals</p>
                      </div>
                      <a
                        href="pages/listing-category.html"
                        className="stretched-link"
                      >
                        hi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-lg-11 py-7">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="mb-8 text-center">
                    <h2 className="mb-1">Explore Our Listing</h2>
                    <p>Aliquam ornare pellentesque eros nec fermentum.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="mb-4 mb-lg-0">
                    <div className="position-relative">
                      <div
                        id="listcarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-bs-target="#listcarousel"
                            data-bs-slide-to="0"
                            className="active rounded-circle"
                          ></li>
                          <li
                            data-bs-target="#listcarousel"
                            data-bs-slide-to="1"
                            className="rounded-circle"
                          ></li>
                          <li
                            data-bs-target="#listcarousel"
                            data-bs-slide-to="2"
                            className="rounded-circle"
                          ></li>
                        </ol>
                        <div className="carousel-inner rounded-3">
                          <div className="carousel-item active">
                            <img
                              src="assets/images/listing-img-1.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/listing-img-2.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/listing-img-3.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#listcarousel"
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
                          href="#listcarousel"
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
                        -0
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
                        <a
                          href="pages/list-single.html"
                          className="text-inherit"
                        >
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
                            <span className="text-dark">5.0</span>(8)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="mb-4 mb-lg-0">
                    <div className="position-relative">
                      <a href="pages/list-single.html">
                        <img
                          src="assets/images/listing-img-2.jpg"
                          alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                          className="w-100 rounded-3"
                        />
                        <div className="btn-wishlist"></div>
                        <span
                          className="
                          badge
                          bg-info
                          position-absolute
                          top-0
                          ms-3
                          mt-3
                          start-0
                        "
                        >
                          Promoted
                        </span>
                      </a>
                    </div>
                    <div className="mt-3">
                      <div>
                        <h4 className="mb-0">
                          <a
                            href="pages/list-single.html"
                            className="text-inherit"
                          >
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
                              src="assets/images/listing-img-4.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/listing-img-5.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="assets/images/listing-img-6.jpg"
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
                        <div className="btn-wishlist"></div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="mb-0">
                        <a
                          href="pages/list-single.html"
                          className="text-inherit"
                        >
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
          <div className="py-lg-11 py-7 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12 text-center">
                  <div className="mb-8">
                    <h2 className="mb-1">Our working Process</h2>
                    <p>Aliquam ornare pellentesque eros nec fermentum.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-12 col-12">
                  <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
                    <div className="card-body p-6">
                      <div
                        className="
                        icon-shape icon-md
                        bg-primary
                        text-white
                        mb-5
                        rounded-circle
                      "
                      >
                        1
                      </div>
                      <h4 className="mb-2">Create a listing for free</h4>
                      <p className="mb-0">
                        Morbi elit sem iaculis quis blandit onewse necpulvinar
                        vitae lectus one enean suultricesut.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                  <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
                    <div className="card-body p-6">
                      <div
                        className="
                        icon-shape icon-md
                        bg-primary
                        text-white
                        mb-5
                        rounded-circle
                      "
                      >
                        2
                      </div>
                      <h4 className="mb-2">How you host is up to you</h4>
                      <p className="mb-0">
                        Vestibulum auctor mximus estquinia vulputate etesd
                        phasellus fermede ntum utodio aliquam laoreete.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                  <div className="card mb-3 mb-lg-0 border-0 shadow-sm">
                    <div className="card-body p-6">
                      <div
                        className="
                        icon-shape icon-md
                        bg-primary
                        text-white
                        mb-5
                        rounded-circle
                      "
                      >
                        3
                      </div>
                      <h4 className="mb-2">Welcome your first guests</h4>
                      <p className="mb-0">
                        Phasellus pulvinar volutpat justo quispose suere ested
                        lorem ipsume volutpat dui id nulla perdietin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-lg-11 py-7">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 text-center">
                  <div className="mb-8">
                    <h2 className="mb-1">Our Customer Reviews</h2>
                    <p>
                      Happy guest stay longer! At Rentkit we care about matching
                      quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="theme-carousel">
                <div className="owl-carousel owl-theme owl-testimonial">
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Nam risus dui consequatet magna vitae blandit
                          hendrerit risustesque ante varius iaculis feugiat
                          nulla metustiam auctor malesuada.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-1.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              James Duncan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Vivamus vel imperdiet purus ante id fermentum libero
                          luctus sit ametonec dictum risus vitaenicuus acese
                          mollis dolor porttitort convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-2.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">Had an amazing time</h3>
                        <p className="mb-4">
                          Sollicitudin purus ante id fermentum libero
                          luctusivamus vel imperdiet eniroin sit ametonec dictum
                          mollis dolor porttitort convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-3.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Nam risus dui consequatet magna vitae blandit
                          hendrerit risustesque ante varius iaculis nibh
                          ieuismod auctor malesuada.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-1.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              James Duncan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Vivamus vel imperdiet ante id fermentum libero luctus
                          sit ametonec dictum risus vitaenicuus acese mollis
                          dolor porttitort convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-2.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">Had an amazing time</h3>
                        <p className="mb-4">
                          Sollicitudin purus luctusivamus vel imperdiet eniroin
                          sit ametonec dictum risus vitaenicuus acese mollis
                          dolor porttitort convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-3.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="avatar-xs rounded-circle me-2 w-100"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Nam risus dui consequatet risustesque ante varius
                          iaculis nibh ieuismod leouce feugiat nulla metustiam
                          auctor malesuada.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-1.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100 avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              James Duncan
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">It was absolutely lovely</h3>
                        <p className="mb-4">
                          Vivamus vel imperdiet eniroin sollicitudin purus ante
                          id fermentum libero luctus sit ametonec dictum
                          porttitort convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-2.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100 avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card">
                      <div className="card-body p-5">
                        <h3 className="h4 mb-2">Had an amazing time</h3>
                        <p className="mb-4">
                          Sollicitudin purus ante id fermentum libero
                          luctusivamus vel imperdiet eniroin sit ametonec dictum
                          risus vitaenicuus acese mollis dolor porttitort
                          convvariun.
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="text-primary align-self-center text-sm">
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star"></span>
                            <span className="mdi mdi-star-half"></span>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/avatar-3.jpg"
                              alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                              className="w-100 avatar-xs rounded-circle me-2"
                            />
                            <span className="text-sm font-weight-semi-bold">
                              Richard Jason
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
          <div className="py-lg-11 py-7 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 text-center">
                  <div className="mb-8">
                    <h2 className="mb-1">Latest From Blog Posts</h2>
                    <p>We want to make sure that you get to explore as much.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="mb-6 mb-md-0">
                    <a href="pages/blog-single.html">
                      <img
                        src="assets/images/listing-img-1.jpg"
                        alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                        className="w-100 rounded-3 img-hover"
                      />
                    </a>

                    <div className="mt-4">
                      <div className="text-sm mb-1">
                        <span className="me-2 font-weight-semi-bold">
                          Oct 17, 2021
                        </span>
                        <span className="font-weight-semi-bold">
                          <a href="/">Experiance</a>
                        </span>
                      </div>
                      <h4 className="mb-0">
                        <a
                          href="pages/blog-single.html"
                          className="text-inherit"
                        >
                          Aenean laoreet neque bibendum mi ullamcorper accumsan.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="mb-6 mb-md-0">
                    <a href="pages/blog-single.html">
                      <img
                        src="assets/images/listing-img-2.jpg"
                        alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                        className="w-100 rounded-3 img-hover"
                      />
                    </a>

                    <div className="mt-4">
                      <div className="text-sm mb-1">
                        <span className="me-2 font-weight-semi-bold">
                          Oct 16, 2021
                        </span>
                        <span className="font-weight-semi-bold">
                          <a href="/">Homes</a>
                        </span>
                      </div>
                      <h4 className="mb-0">
                        <a
                          href="pages/blog-single.html"
                          className="text-inherit"
                        >
                          Nunc eu quam et massa tempus vehicula.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-md-none d-lg-block">
                  <div className="mb-6 mb-md-0">
                    <a href="pages/blog-single.html">
                      <img
                        src="assets/images/listing-img-3.jpg"
                        alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                        className="w-100 rounded-3 img-hover"
                      />
                    </a>

                    <div className="mt-4">
                      <div className="text-sm mb-1">
                        <span className="me-2 font-weight-semi-bold">
                          Oct 15, 2021
                        </span>
                        <span className="font-weight-semi-bold">
                          <a href="/">Company</a>
                        </span>
                      </div>
                      <h4 className="mb-0">
                        <a
                          href="pages/blog-single.html"
                          className="text-inherit"
                        >
                          Lorem ipsum dolor sit amet simon consectetur
                          adipisicing elit.
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="
                  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                  text-center
                  mt-4
                "
                >
                  <a href="pages/blog.html" className="btn btn-primary">
                    More Blogs
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="py-xl-17 py-7"
            style={{
              background: "url(assets/images/call-action-img.jpg) no-repeat",
            }}
          >
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                  <h2 className="text-white mb-2 display-5">
                    Want To Become Host?
                  </h2>
                  <p className="text-white mb-6 lead">
                    Fusce ut varius estfacilisis tellusecenas ornare suscipit
                    justsed dapibus ante.
                  </p>
                  <a href="pages/add-listing.html" className="btn btn-white">
                    List your space
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
