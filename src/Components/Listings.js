import React, { useState } from "react";
import Listing from "./Listing";

function Listings(props) {
  const [listings] = useState([
    {
      name: "Beautiful Cozy Home",
      location: "Udaipur, Rajasthan, India",
      price: "$100",
      rating: "5.0",
      ratingCount: "8",
    },
    {
      name: "Affordable Long Term Room",
      location: "Udaipur, Rajasthan, India",
      price: "$200",
      rating: "5.0",
      ratingCount: "8",
    },
    {
      name: "Entire 3 BHK Cozy Apartment",
      location: "Udaipur, Rajasthan, India",
      price: "$200",
      rating: "5.0",
      ratingCount: "8",
    },
    {
      name: "Namirta bunglow single beds / room",
      location: "Udaipur, Rajasthan, India",
      price: "$100",
      rating: "5.0",
      ratingCount: "8",
    },
  ]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-5 col-lg-7 col-md-12 col-sm-12 col-12 order-md-1">
          <div className="listingmap-content">
            <div className="border-bottom pb-4 mb-4 mt-4">
              <div className="hero-search-area-form">
                <h1 className="mb-1">Stays in selected filter</h1>
                <p className="mb-4">
                  On average they rated their stays 4.7 out of 5 stars.
                </p>

                <form>
                  <div className="row g-md-3 g-0">
                    <div className="col-md-4 mb-3">
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
                    <div className="col-md-4 mb-3">
                      <div>
                        <input
                          type="text"
                          id="dateSelect"
                          name="calendar"
                          className="form-control"
                          placeholder="Check in / Check out"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <select className="select2">
                        <option>Guest</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <div className="col-md-7 mt-md-0 mt-3">
                      <button className="btn btn-primary me-2" type="submit">
                        Search
                      </button>
                      <a
                        className="btn btn-light"
                        href="#collapseExample"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <span className="filter-icon">
                          <i className="mdi mdi-tune me-2"></i>
                        </span>
                        More Filter
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="row mb-4 align-items-center">
                <div className="col-md-6 col-8">
                  <p className="mb-0">Showing 1 – 8 of 10 results</p>
                </div>
                <div className="col-md-6 col-4 text-end">
                  <div>
                    <a
                      href="list-with-map.html"
                      className="
                      active
                      icon-shape icon-md
                      bg-primary
                      text-white
                      border-primary
                      rounded-1
                    "
                    >
                      <i className="mdi mdi-format-list-bulleted"></i>
                    </a>
                    <a
                      href="grid-with-map.html"
                      className="icon-shape icon-md text-primary border rounded-1"
                    >
                      <i className="mdi mdi-view-grid"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                {listings.map(
                  ({ name, location, price, rating, ratingCount }) => (
                    <div>
                      <Listing
                        name={name}
                        location={location}
                        price={price}
                        rating={rating}
                        ratingCount={ratingCount}
                        className="col-md-12 col-12"
                      />
                      <hr className="my-3" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="
          col-xl-7 col-lg-5 col-md-12 col-sm-12 col-12
          d-none d-lg-block d-md-block
          order-md-2
        "
        >
          <div id="mapid_2" className="listinghalfmap-map map"></div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
