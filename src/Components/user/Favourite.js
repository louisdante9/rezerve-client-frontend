const Favourite = ({ firstname, favourites }) => (
  <>
    <div class="row">
      <div class="col-12 mb-6">
        <h2 class="mb-0">{`${firstname
          .toLowerCase()
          .slice(0, 1)
          .toUpperCase()}${firstname.toLowerCase().slice(1)}’s favourite`}</h2>
      </div>
      {favourites.map(
        ({
          _id,
          apartment: { img, apartmentName, address, location, price },
        }) => (
          <div key={_id} class="col-xl-4 col-md-6 col-12">
            <div class="mb-6">
              <div class="position-relative">
                <div
                  id="listcarousel"
                  class="carousel slide "
                  data-bs-ride="carousel"
                  data-bs-interval="false"
                >
                  <ol class="carousel-indicators">
                    {img.map.length > 1 &&
                      img.map(() => (
                        <li
                          data-bs-target="#listcarousel"
                          data-bs-slide-to="0"
                          class="active rounded-circle"
                        ></li>
                      ))}
                  </ol>
                  <div class="carousel-inner rounded-3">
                    {img.map((imgUrl) => (
                      <div class="carousel-item active">
                        <img src={imgUrl} alt={apartmentName} class="w-100 " />
                      </div>
                    ))}
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
                    {apartmentName}
                  </a>
                </h4>
                <p class="text-sm font-weight-semi-bold">
                  {`${address}, ${location}`}
                </p>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <span class="h5">N{price}</span>
                    <span class="text-sm font-weight-semi-bold ms-1">
                      /night
                    </span>
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
        )
      )}
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
export default Favourite;
