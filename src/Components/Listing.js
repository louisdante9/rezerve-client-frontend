import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertNumToCurrency } from '../utils'
import { favouriteRequest, getFavouriteRequest, delFavouriteRequest } from '../actions'


function Listing({ name, location, price, rating, ratingCount, booked, img, listingId }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.setCurrentUser)
  const { favourites } = useSelector((state) => state.favourite)

  useEffect(()=> {
    dispatch(getFavouriteRequest({userId: user.id}))
  }, []);

  const [current, setCurrent] = useState(0);
  const imgLen = img.length;

  const handleFavourite = () => {
    favourites.find(f=> f.apartment?._id || f.apartment === listingId)
    ? dispatch(delFavouriteRequest({apartmentId: listingId, userId: user.id}))
    : dispatch(favouriteRequest({apartmentId: listingId, userId: user.id}))
  }

  const nextSlide = () => {
    console.log(current, imgLen)
    setCurrent(current === imgLen - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? imgLen - 1 : current - 1);
  };
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
                {img.map((slide, index) => (
                  <div key={index}>
                    <li
                      data-bs-target="#listcarousel"
                      data-bs-slide-to={current}
                      className={index === current ? 'active rounded-circle' : 'rounded-circle'}
                      style={{ backgroundColor: 'red' }}

                    ></li>
                  </div>
                ))}
              </ol>
              <div className="carousel-inner rounded-3">
                {img.length > 0 ? img.map((slide, index) => (
                  <div
                    className={index === current ? 'carousel-item active' : 'carousel-item'}
                    key={index}
                  >
                    {index === current &&
                      (<img
                        src={slide}
                        alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                        className="w-100"
                        height="121"
                      />)}
                  </div>)
                ) : (<div className="carousel-item active">
                  <img
                    src="/assets/images/listing-img-4.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    className="w-100"
                  />
                </div>)
                }
              </div>
              <div
                className="carousel-control-prev"
                href="#listcarousel"
                role="button"
                data-bs-slide="prev"
                onClick={prevSlide}
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
              </div>
              <div
                className="carousel-control-next"
                href="#listcarousel"
                role="button"
                data-bs-slide="next"
                onClick={nextSlide}
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
              </div>
            </div>
            <div 
            className={favourites.find(f=> f.apartment?._id || f.apartment === listingId) ? "btn-wishlist liked" : "btn-wishlist"} 
            style={{ "hover": {
              background: "#efefef"
            },}}
            onClick={handleFavourite}
            ></div>
            <span
              className={`
            badge
            ${booked ? 'bg-success' : 'bg-danger'}
            position-absolute
            start-0
            ms-3
            mt-3
            top-0
            z-1
          `}
            >
              {booked ? 'Booked' : 'Featured'}
            </span>
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div>
            <h4 className="mb-0">
              <Link to={`/app/listing/${listingId}`} className="text-inherit">
                {name}
              </Link>
            </h4>
            <p className="text-sm font-weight-semi-bold">{location}</p>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <span className="h5">{convertNumToCurrency(price)}</span>
              <span className="text-sm font-weight-semi-bold ms-1">/night</span>
            </div>
            <div>
              <span className="mdi mdi-star me-1 text-primary text-sm"></span>
              <span className="font-weight-semi-bold text-sm">
                <span className="text-dark">{rating[0] || 0}</span> ({ratingCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
