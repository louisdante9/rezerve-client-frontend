import React from "react";

function Listing({ name, location, price, rating, ratingCount }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-5 col-12">
          <div className="position-relative mb-3 mb-lg-0">
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
        </div>
        <div className="col-md-7 col-12">
          <div>
            <h4 className="mb-0">
              <a href="/listing-single" className="text-inherit">
                {name}
              </a>
            </h4>
            <p className="text-sm font-weight-semi-bold">{location}</p>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <span className="h5">{price}</span>
              <span className="text-sm font-weight-semi-bold ms-1">/night</span>
            </div>
            <div>
              <span className="mdi mdi-star me-1 text-primary text-sm"></span>
              <span className="font-weight-semi-bold text-sm">
                <span className="text-dark">{rating}</span> ({ratingCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
