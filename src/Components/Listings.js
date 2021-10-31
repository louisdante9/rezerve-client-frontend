import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {  AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import FilterModal from "./FilterModal";
import Listing from "./Listing";
import { listingsRequest } from '../actions'
import 'leaflet/dist/leaflet.css';

import ReactPaginate from "react-paginate";

function Listings() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);
  const [currentPage, setCurrentPage] = useState(0);

 

  const [showFilter, setShowFilter] = useState(false);
  const changeHandler = value => {
    setValue(value)
  }

  useEffect(() => {
    dispatch(listingsRequest(0));
  }, [])

  const { listings, limit, offSet, totalPage, ratingAvg } = useSelector((state) => state.getListings)
  const getAvg = (id) => ratingAvg.map(r => {
    if (r._id === id) return r.rating
  })
  const pageCount = Math.ceil(totalPage / limit);
  
  const handlePageClick =({ selected: selectedPage }) =>{
    setCurrentPage(selectedPage);
    console.log("clicked")
    dispatch(listingsRequest(selectedPage))
  }
  return (
    <>
      {showFilter && <FilterModal close={() => setShowFilter(false)} />}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7 col-md-12 col-sm-12 col-12 order-md-1">
            <div className="listingmap-content">
              <div className="border-bottom pb-4 mb-4 mt-4">
                <div className="hero-search-area-form">
                  <h1 className="mb-1">Stays in selected filter</h1>
                  {/* <p className="mb-4">
                    On average they rated their stays 4.7 out of 5 stars.
                  </p> */}

                  <div>
                    <div className="row g-md-3 g-0">
                      <div className="col-md-4 mb-3">
                        <Select
                          placeholder={<div>Where</div>}
                          menuColor='#6c4af2'
                          styles={{
                            control: base => ({
                              ...base,
                              "&:hover": {
                                borderColor: "#b6a5f9"
                              },
                              "&:focus": {
                                borderColor: "#b6a5f9"
                              }
                            }),
                            menu: (provided, state) => ({
                              ...provided,
                              zIndex: 8888,
                              color: state.selectProps.menuColor,
                              padding: 20,
                            }),
                            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                              // console.log({ data, isDisabled, isFocused, isSelected });
                              return {
                                ...styles,
                                backgroundColor: isFocused ? "#b6a5f9" : null,
                                color: "#fffff"
                              };
                            }
                          }}
                          options={options} />
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

                        <Select
                          placeholder={<div>No of Guests</div>}
                          menuColor='#6c4af2'
                          styles={{
                            control: base => ({
                              ...base,
                              "&:hover": {
                                borderColor: "#b6a5f9"
                              },
                              "&:focus": {
                                borderColor: "#b6a5f9"
                              }
                            }),
                            menu: (provided, state) => ({
                              ...provided,
                              zIndex: 8888,
                              color: state.selectProps.menuColor,
                              padding: 20,
                            }),
                            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                              // console.log({ data, isDisabled, isFocused, isSelected });
                              return {
                                ...styles,
                                backgroundColor: isFocused ? "#b6a5f9" : null,
                                color: "#fffff"
                              };
                            }
                          }}
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' }
                          ]} />
                      </div>

                      <div className="col-md-7 mt-md-0 mt-3">
                        <button className="btn btn-primary me-2">Search</button>
                        <button
                          className="btn btn-light"
                          onClick={() => setShowFilter(true)}
                        >
                          <span className="filter-icon">
                            <i className="mdi mdi-tune me-2"></i>
                          </span>
                          More Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row mb-4 align-items-center">
                  <div className="col-md-6 col-8">
                    {/* <p className="mb-0">Showing 1 – 8 of 10 results</p> */}
                  </div>

                </div>
                <div className="row">
                  {listings.map(
                    ({ propertyName, address, pricePerNight, ratings, booked, _id, img }, index) => (
                      <div key={index}>
                        <Listing
                          name={propertyName}
                          location={address}
                          price={pricePerNight}
                          listingId={_id}
                          rating={getAvg(_id)}
                          img={img}
                          ratingCount={ratings.length}
                          booked={booked}
                          className="col-md-12 col-12"
                        />
                        <hr className="my-3" />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col-md- col-4 text-end">
                {listings && <div>
                  {/* <div
                    style={{ marginRight: '2px', cursor: 'pointer' }}
                    onClick={() => console.log('clicked')}
                    className="
                      icon-shape icon-md
                      bg-primary
                      text-white
                      border-primary
                      rounded-1"
                  >
                   
                  </div>
                  <div
                    style={{ cursor: 'pointer' }}
                    className="icon-shape icon-md text-primary border rounded-1"
                    onClick={() => console.log('clicked')}
                  >
                    <AiOutlineArrowRight />
                  </div> */}
                  <ReactPaginate
                    previousLabel={<AiOutlineLeft/>}
                    nextLabel={<AiOutlineRight/>}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick }
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                  />
                </div>}
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
            {/* <div id="mapid_2" className="listinghalfmap-map map"></div> */}
            {listings.length > 0 && <MapContainer center={[listings[0]?.latitude, listings[0]?.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {listings.map(({ latitude, longitude }, index) => <Marker
                key={index}
                position={[latitude, longitude]}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                <Popup>
                  This is your destination.
                </Popup>
              </Marker>)}
            </MapContainer>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Listings;
