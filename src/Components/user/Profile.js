import React, { useEffect } from "react";
import Bookings from "./Bookings";
import checkedMark from "../../Assets/images/checked-mark.svg";
import avatar from "../../Assets/images/avatar-3.jpg";
import coverImg from "../../Assets/images/cover-img.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Reviews from "./Reviews";
import {  AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Favourite from "./Favourite";
import { getProfile, getFavourites, getBookings } from "../../actions/user";

import ReactPaginate from "react-paginate";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, error, favourites, totalPage,offSet, limit, } = useSelector((state) => state.user);
  const { bookings,bookingsLimit, bookingsTotal,bookingsOffset } = useSelector((state) => state.booking);
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(totalPage / limit);
  const pagecount = Math.ceil(bookingsTotal / bookingsLimit);
  console.log(favourites, offSet, 'favourite')
  console.log(bookings, bookingsOffset, "bookings" )
  const {
    user: { id },
  } = useSelector((state) => state.setCurrentUser);
const page = 0
  useEffect(() => {
    const fetchUserProfile = () => {
      dispatch(getProfile(id));
    };
    fetchUserProfile();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchUserFavourites = () => {
      dispatch(getFavourites(id));
    };
    fetchUserFavourites();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchUserBookings = () => {
      dispatch(getBookings(id));
    };
    fetchUserBookings();
  }, [dispatch, id]);

  const [subNavs, setSubNavs] = useState({
    bookings: true,
    // reviews: false,
    favourite: false,
  });
  
 


  const navigationHandler = (nav) => {
    const newState = {};
    Object.keys(subNavs).forEach((navItem) => {
      if (nav === navItem) {
        newState[navItem] = true;
      } else {
        newState[navItem] = false;
      }
    });
    setSubNavs(newState);
  };

  const handleFavouriteClick =({ selected: selectedPage }) =>{
    setCurrentPage(selectedPage);
    console.log(selectedPage, 'clicked');
    dispatch(getFavourites(selectedPage))
  };
  const handleBookingClick =({ selected: selectedPage }) =>{
    setCurrentPage(selectedPage);
    console.log(selectedPage, 'clicked');
    dispatch(getFavourites(selectedPage))
  };

  return (
    <div className="container">
      <div className="py-lg-11 py-7">
        {profile ? (
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div
                  className="py-10 rounded-top"
                  style={{
                    background: `url(${coverImg})no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="bg-white pt-2 pb-0 rounded-bottom shadow-sm row g-0"
                >
                  <div
                    className="offset-xl-3 col-xl-6 col-md-12 col-12 mb-4"
                  >
                    <div
                      className="text-center position-relative mt-n10"
                    >
                      <img
                        src={avatar}
                        className="avatar-lg rounded-circle
                          border-4 border border-white mb-3"
                        alt=""
                      />
                      <a
                        href="#!"
                        className="position-absolute top-0 right-0 ms-n4 mt-3"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Verified"
                      >
                        <img src={checkedMark} alt="" height="30" width="30" />
                      </a>

                      <h2 className="mb-1">{`${profile.firstname} ${profile.lastname}`}</h2>
                      <p className="mb-2 d-block fs-6">
                        Joined in {profile.createdAt.slice(0, 4)}
                      </p>
                      {/* <p className="mb-3 px-4 ">
                        Hello! I m glad to share with you all the listings that
                        i ve created. Mauris feugiat, ex sed condigiat arcu dui
                        ac nunc vitae ultricies eros...
                      </p> */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <span className="text-dark me-1">{bookingsTotal}</span>
                           Bookings
                        </li>
                        <li className="list-inline-item">
                          <i
                            className="mdi mdi-circle
                            mdi-8px align-middle
                            text-black-50"
                          ></i>
                        </li>
                        <li className="list-inline-item">
                          <span className="text-dark me-1">
                            {totalPage}
                          </span>
                          Favourites
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul
                    className="nav nav-lt-tab mt-2"
                    id="pills-tab"
                    role="tablist"
                  >
                    {Object.keys(subNavs).map((nav, index) => (
                      <li
                        key={`${nav}${index}`}
                        className="nav-item ml-0"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigationHandler(nav)}
                      >
                        <div
                          className={`nav-link ${subNavs[nav] ? "active" : ""}`}
                        >
                          {nav.charAt(0).toUpperCase() + nav.slice(1)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {subNavs.bookings && <div>
              <Bookings firstname={profile.firstname} bookings={[]} />
              <ReactPaginate
              previousLabel={<AiOutlineLeft/>}
              nextLabel={<AiOutlineRight/>}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pagecount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handleBookingClick }
              containerClassName={'pagination'}
              activeClassName={'page-item me-2 active'}
            />
            </div>
            }
            {/* {subNavs.reviews && <Reviews />} */}
            {subNavs.favourite && <div>
           
              
              <Favourite
                firstname={profile.firstname}
                favourites={favourites}
              />
              <ReactPaginate
              previousLabel={<AiOutlineLeft/>}
              nextLabel={<AiOutlineRight/>}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handleFavouriteClick }
              containerClassName={'pagination'}
              activeClassName={'page-item me-2 active'}
            />
        </div>
            }
          </div>
        ) : (
          <div>*{error}</div>
        )}
      </div>
    </div>
  );
};
export default Profile;
