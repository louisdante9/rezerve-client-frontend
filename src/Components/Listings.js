import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet';
import FilterModal from "./FilterModal";
import Listing from "./Listing";
import { listingsRequest } from '../actions'
import 'leaflet/dist/leaflet.css';


function Listings() {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    dispatch(listingsRequest());
  }, [])

  const { listings, ratingAvg } = useSelector((state) => state.getListings)
  const getAvg = (id) => ratingAvg.map(r => {
    if (r._id === id) return r.rating
  })

  console.log(listings, 'listings')
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
                        <div>
                          <input
                            type="text"
                            id="dateSelect"
                            name="location"
                            className="form-control"
                            placeholder="Where"
                          />
                        </div>
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
                  <div className="col-md-6 col-4 text-end">
                    <div>
                      <div
                        style={{ marginRight: '2px', cursor: 'pointer' }}
                        onClick={() => console.log('clicked')}
                        className="
                          icon-shape icon-md
                          bg-primary
                          text-white
                          border-primary
                          rounded-1"
                      >
                        <AiOutlineArrowLeft />
                      </div>
                      <div
                        style={{ cursor: 'pointer' }}
                        className="icon-shape icon-md text-primary border rounded-1"
                        onClick={() => console.log('clicked')}
                      >
                        <AiOutlineArrowRight />
                      </div>
                    </div>
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
              
             { listings.map(({latitude, longitude}, index)=> <Marker
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
