const Payments = ({ firstname, favourites }) => (
    <>
      <div className="row">
        <div className="col-12 mb-6">
          <h2 className="mb-0">{`${firstname
            .toLowerCase()
            .slice(0, 1)
            .toUpperCase()}${firstname.toLowerCase().slice(1)} favourites`}</h2>
        </div>
        {favourites.map(
          ({
            _id,
            apartment: { img, propertyName, address, city, pricePerNight },
          }) => (
            <div key={_id} className="col-xl-4 col-md-6 col-12">
              <div className="mb-6">
                <div className="position-relative">
                  <div
                    id="listcarousel"
                    className="carousel slide "
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <ol className="carousel-indicators">
                      {img.map.length > 1 &&
                        img.map((imgItem, index) => (
                          <li
                            key={`${imgItem}${index}`}
                            data-bs-target="#listcarousel"
                            data-bs-slide-to="0"
                            className="active rounded-circle"
                          ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner rounded-3">
                      {img.map((imgUrl, index) => (
                        <div
                          key={`${imgUrl}${index}`}
                          className="carousel-item active"
                        >
                          <img src={imgUrl} alt={propertyName} className="w-100 " />
                        </div>
                      ))}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#listcarousel"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="mdi mdi-chevron-left icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#listcarousel"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="mdi mdi-chevron-right icon-shape icon-xs bg-white rounded-circle fs-4"></i>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                  <div className="btn-wishlist"></div>
                  <span className="badge bg-danger position-absolute top-0 ms-3 mt-3 z-1 ">
                    Featured
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="mb-0 text-truncate">
                    {" "}
                    <a href="list-single.html" className="text-inherit">
                      {propertyName}
                    </a>
                  </h4>
                  <p className="text-sm font-weight-semi-bold">
                    {`${address}, ${city}`}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <div>
                      <span className="h5">N{pricePerNight}</span>
                      <span className="text-sm font-weight-semi-bold ms-1">
                        /night
                      </span>
                    </div>
                    <div>
                      <span className="mdi mdi-star me-1 text-primary text-sm"></span>
                      <span className="font-weight-semi-bold  text-sm">
                        <span className="text-dark">5.0</span> (8)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <div className="col-12 mt-8">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item me-2">
                <a className="page-link rounded-2" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="mdi mdi-chevron-left lh-1"></i>
                  </span>
                </a>
              </li>
              <li className="page-item me-2 active">
                <a className="page-link rounded-2  " href="#">
                  1
                </a>
              </li>
              <li className="page-item me-2">
                <a className="page-link rounded-2" href="#">
                  2
                </a>
              </li>
              <li className="page-item me-2">
                <a className="page-link rounded-2" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link rounded-2" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="mdi mdi-chevron-right lh-1"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
  export default Payments;