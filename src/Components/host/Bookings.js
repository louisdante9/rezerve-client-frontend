import BookingListItem from "./BookingListItem";
import "./host.css";
const Bookings = ({ firstname, bookings }) => {
  console.log(bookings, 'bookings')
  return (
    <div class="pb-lg-11 pb-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-12">
            <div class=" position-sticky overflow-hidden h-auto top-0">
              <div class="card mb-3">
                <h4 class="card-header bg-white px-4 py-3"><span class="text-primary me-2"><i
                  class="mdi mdi-tune"></i></span>Filter
                </h4>
                <div class="card-body p-4 border-bottom">
                  <h5 class="mb-4"> search bar  </h5>

                </div>
                <div class="card-body p-4 border-bottom">
                  <h5 class="mb-4"> Rooms and beds  </h5>
                  <div class="price-menu-body mt-6">
                    <div id="slider-padding"></div>
                  </div>
                </div>
                <div class="card-body p-4 border-bottom">
                  <h5>Amenities </h5>
                  <div class="mt-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1">Doorman
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck2" />
                      <label class="form-check-label" for="customCheck2">Free parking
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck3" />
                      <label class="form-check-label" for="customCheck3">Heating
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck4" />
                      <label class="form-check-label" for="customCheck4">Hair dryer
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck5" />
                      <label class="form-check-label" for="customCheck5">Toiletteries </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck6" />
                      <label class="form-check-label" for="customCheck6">Pool
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck7" />
                      <label class="form-check-label" for="customCheck7">Wifi
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck8" />
                      <label class="form-check-label" for="customCheck8">Washing machine
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck9" />
                      <label class="form-check-label" for="customCheck9">Indoor fireplace
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck10" />
                      <label class="form-check-label" for="customCheck10">Desk for work
                      </label>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4 border-bottom">
                  <h5>Listing status </h5>
                  <div class="mt-3">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck1" />
                      <label class="form-check-label" for="customCheck1">Listed
                      </label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="customCheck5" />
                      <label class="form-check-label" for="customCheck5">Unlisted </label>
                    </div>
                  </div>
                </div>
                <div class="card-body p-4">
                  <a href="#" class="btn btn-primary btn-block">Search</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 col-12">
            <div class="row mb-4">
              <div class="col-md-3 col-8">
                <div class="sorting">
                  <select class="select2">
                    <option selected>Default</option>
                    <option value="1">Most Viewed</option>
                    <option value="2">Newest Listing</option>
                    <option value="3">Older Listing</option>
                  </select>
                </div>
              </div>
              <div class="col-md-9 col-4 text-end">
                <div>
                  <a href="#" class="btn btn-primary btn-block">Create listing</a>
                </div>
              </div>
            </div>
            {bookings && bookings.map(booking => (
              <div class="row">
                <div class="col-md-12 col-12">
                  <div class="row ">
                    <div class="col-md-5 col-12">
                      <div class="position-relative mb-3 mb-lg-0">
                        <div id="listcarousel" class="carousel slide " data-bs-ride="carousel" data-bs-interval="false">

                          <div class="carousel-inner rounded-3">
                            <div class="carousel-item">
                              <img src="/assets/images/listing-img-2.jpg" alt="Rentkit Directory & Listing Bootstrap 5 Theme" class="w-100 " />
                            </div>

                          </div>

                        </div>
                        <div class="btn-wishlist"></div>
                        <span class="badge bg-danger position-absolute start-0 ms-3 mt-3 top-0 z-1">Featured</span>
                      </div>
                    </div>
                    <div class="col-md-7 col-12 ">
                      <div>
                        <h4 class="mb-0"> <a href="list-single.html" class="text-inherit">{booking?.apartmentId?.propertyName}</a></h4>
                        <p class="text-sm font-weight-semi-bold">Victoria Island, Lagos</p>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <div>
                            <span class="h5">Rooms</span><span class="text-sm font-weight-semi-bold ms-1"> {booking?.apartmentId?.noOfRooms} </span>
                          </div>
                          <div>
                            <span class="h5">Baths</span><span class="text-sm font-weight-semi-bold ms-1"> {booking?.apartmentId?.noOfBaths} </span>
                          </div>
                          <div>
                            <span class="h5">Guests</span><span class="text-sm font-weight-semi-bold ms-1"> {booking?.apartmentId?.noOfguest} </span>
                          </div>
                        </div>
                        <div>
                          <span class="mdi mdi-circle me-1 text-secondary text-sm"></span>
                          <span class="font-weight-semi-bold  text-sm"><span class="text-dark">Listed</span> (status)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-3" />
                </div>
              </div>
            ))

            }
          </div>
        </div>
      </div>
    </div>
  )
};
export default Bookings;
