const Bookings = () => (
  <>
    <div class="row">
      <div class="col-12 mb-6">
        <h2 class="mb-0">David’s listings</h2>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <div
              id="listcarousel"
              class="carousel slide "
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#listcarousel"
                  data-bs-slide-to="0"
                  class="active rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarousel"
                  data-bs-slide-to="1"
                  class="rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarousel"
                  data-bs-slide-to="2"
                  class="rounded-circle"
                ></li>
              </ol>
              <div class="carousel-inner rounded-3">
                <div class="carousel-item active">
                  <img
                    src="../assets/images/listing-img-4.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-5.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-6.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#listcarousel"
                role="button"
                data-bs-slide="prev"
              >
                <i class="mdi mdi-chevron-left icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#listcarousel"
                role="button"
                data-bs-slide="next"
              >
                <i class="mdi mdi-chevron-right icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="btn-wishlist"></div>
            <span class="badge bg-danger position-absolute top-0 ms-3 mt-3 z-1 ">
              Featured
            </span>
          </div>
          <div class="mt-3">
            <h4 class="mb-0 text-truncate">
              {" "}
              <a href="list-single.html" class="text-inherit">
                Beautiful Cozy Home
              </a>
            </h4>
            <p class="text-sm font-weight-semi-bold">
              Udaipur, Rajasthan, India
            </p>
            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class="h5">$100</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">5.0</span> (8)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <a href="list-single.html">
              {" "}
              <img
                src="../assets/images/listing-img-2.jpg"
                alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                class="w-100 rounded-3"
              />
            </a>
            <div class="btn-wishlist"></div>
            <span class="badge bg-warning text-dark position-absolute start-0 ms-3 mt-3">
              Promoted
            </span>
          </div>
          <div class="mt-3">
            <div>
              <h4 class="mb-0 text-truncate">
                {" "}
                <a href="list-single.html" class="text-inherit">
                  Affordable Long Term Room
                </a>
              </h4>
              <p class="text-sm font-weight-semi-bold">
                Daman, Daman and Diu, India
              </p>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class=" h5">$250</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">4.9</span> (6)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <div
              id="listcarouselTwo"
              class="carousel slide "
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#listcarouselTwo"
                  data-bs-slide-to="0"
                  class="active rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarouselTwo"
                  data-bs-slide-to="1"
                  class="rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarouselTwo"
                  data-bs-slide-to="2"
                  class="rounded-circle"
                ></li>
              </ol>
              <div class="carousel-inner rounded-3">
                <div class="carousel-item active">
                  <img
                    src="../assets/images/listing-img-1.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-2.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-3.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#listcarouselTwo"
                role="button"
                data-bs-slide="prev"
              >
                <i class="mdi mdi-chevron-left icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#listcarouselTwo"
                role="button"
                data-bs-slide="next"
              >
                <i class="mdi mdi-chevron-right icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="btn-wishlist"></div>
          </div>
          <div class="mt-3">
            <h4 class="mb-0 text-truncate">
              {" "}
              <a href="list-single.html" class="text-inherit">
                Entire 3 BHK Cozy Apartment
              </a>
            </h4>
            <p class="text-sm font-weight-semi-bold">
              Ahmedabad, Gujarat, India
            </p>

            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class=" h5">$180</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">4.7</span> (4)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <a href="list-single.html">
              <img
                src="../assets/images/listing-img-5.jpg"
                alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                class="w-100 rounded-3"
              />
            </a>
            <div class="btn-wishlist"></div>
          </div>
          <div class="mt-3">
            <h4 class="mb-0 text-truncate">
              {" "}
              <a href="list-single.html" class="text-inherit">
                Private Room No 4 - Boulevard View
              </a>
            </h4>
            <p class="text-sm font-weight-semi-bold">
              Jaipur, Rajasthan, India
            </p>

            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class="h5">$150</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">5.0</span> (8)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <div
              id="listcarouselThree"
              class="carousel slide "
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#listcarouselThree"
                  data-bs-slide-to="0"
                  class="active rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarouselThree"
                  data-bs-slide-to="1"
                  class="rounded-circle"
                ></li>
                <li
                  data-bs-target="#listcarouselThree"
                  data-bs-slide-to="2"
                  class="rounded-circle"
                ></li>
              </ol>
              <div class="carousel-inner rounded-3">
                <div class="carousel-item active">
                  <img
                    src="../assets/images/listing-img-4.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-5.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/images/listing-img-6.jpg"
                    alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                    class="w-100 "
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#listcarouselThree"
                role="button"
                data-bs-slide="prev"
              >
                <i class="mdi mdi-chevron-left icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#listcarouselThree"
                role="button"
                data-bs-slide="next"
              >
                <i class="mdi mdi-chevron-right icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="btn-wishlist"></div>
          </div>
          <div class="mt-3">
            <div>
              <h4 class="mb-0 text-truncate">
                {" "}
                <a href="list-single.html" class="text-inherit">
                  Spacious 2 Bed Family Apartments for vacation
                </a>
              </h4>
              <p class="text-sm font-weight-semi-bold">
                Ahmedabad, Gujarat, India
              </p>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class=" h5">$150</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">4.9</span> (6)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-6 col-12">
        <div class="mb-6">
          <div class="position-relative">
            <a href="list-single.html">
              <img
                src="../assets/images/listing-img-3.jpg"
                alt="Rentkit Directory & Listing Bootstrap 5 Theme"
                class="w-100 rounded-3"
              />
            </a>
            <div class="btn-wishlist"></div>
          </div>
          <div class="mt-3">
            <h4 class="mb-0 text-truncate">
              {" "}
              <a href="list-single.html" class="text-inherit">
                Ground floor in bungalow; serene & well-connected
              </a>
            </h4>
            <p class="text-sm font-weight-semi-bold">Rajkot, Gujarat, India</p>

            <div class="d-flex justify-content-between mt-3">
              <div>
                <span class=" h5">$180</span>
                <span class="text-sm font-weight-semi-bold ms-1">/night</span>
              </div>
              <div>
                <span class="mdi mdi-star me-1 text-primary text-sm"></span>
                <span class="font-weight-semi-bold  text-sm">
                  <span class="text-dark">4.7</span> (4)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-8">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item me-2">
              <a class="page-link rounded-2" href="#" aria-label="Previous">
                <span aria-hidden="true">
                  <i class="mdi mdi-chevron-left lh-1"></i>
                </span>
              </a>
            </li>
            <li class="page-item me-2 active">
              <a class="page-link rounded-2  " href="#">
                1
              </a>
            </li>
            <li class="page-item me-2">
              <a class="page-link rounded-2" href="#">
                2
              </a>
            </li>
            <li class="page-item me-2">
              <a class="page-link rounded-2" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link rounded-2" href="#" aria-label="Next">
                <span aria-hidden="true">
                  <i class="mdi mdi-chevron-right lh-1"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);
export default Bookings;
