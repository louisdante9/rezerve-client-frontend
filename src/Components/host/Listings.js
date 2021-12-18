import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getHomeOwnerApartment } from "../../actions/index";


import "./host.css";
const Listings = ({ bookings, limit, offSet, totalPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageCount = Math.ceil(totalPage / limit);

  const handlePageClick = ({ selected: selectedPage }) => {
    dispatch(getHomeOwnerApartment(selectedPage));
  };
  const handleNav = (id) => {
    navigate(`/app/host/listing/${id}`);
  };
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      propertyName: "",
      propertyGroup: "",
      propertyType: "",
      privacyType: "",
      description: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      propertyName: Yup.string().required("Property name is required"),
      propertyGroup: Yup.string().required("Property group is required"),
      propertyType: Yup.string().required("Property type is required"),
      privacyType: Yup.string().required("Privacy type is required"),
      noOfRooms: Yup.number().required("No of rooms is required"),
      noOfBaths: Yup.number().required("No of baths is required"),
      noOfguest: Yup.number().required("No of guest per room is required"),
      pricePerNight: Yup.string().required("Price is required"),
    }),

    onSubmit: (values) => {
      // console.log(textInput.current.outerText, files, 'textInput')
      // return console.log(values, lng, lat)
      // if (!addr) {
      //   return setErrorMsg({ address: "Address is required" });
      // }

      // if (!files.length) {
      //   return setErrorMsg({ image: "Image is required" });
      // }

      // const amenityItems = [
      //   values.kitchen,
      //   values.tv,
      //   values.shower,
      //   values.airconditioning,
      //   values.washer,
      //   values.pool,
      //   values.wifi,
      //   values.washingmachine,
      //   values.bbqgrill,
      //   values.dedicatedworkspace,
      //   values.doorman,
      //   values.freeparking,
      //   values.heating,
      //   values.hairdryer,
      //   values.toiletteries,
      // ];
      // setLoading(!loading);
      // const propertyData = {
      //   ...values,
      //   img: files,
      //   address: addr,
      //   latitude: lat,
      //   longitude: lng,
      //   userId: user.id,
      //   state: stateLocale,
      //   city: city,
      //   zipCode: zipCode,
      //   country: country,
      //   description: textInput.current.outerText,
      //   amenities: amenityItems.filter((t) => t !== "").join(","),
      // };
      // dispatch(createProperty(propertyData))
      //   .then((res) => navigate("/app/apartments"))
      //   .catch((err) => {
      //     setLoading(!loading);
      //     setErrorMsg(err);
      //   });
    },
  });

  return (
    <div className='pb-lg-11 pb-7'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-12'>
            <div className=' position-sticky overflow-hidden h-auto top-0'>
              <div className='card mb-3'>
                <h4 className='card-header bg-white px-4 py-3'>
                  <span className='text-primary me-2'>
                    <i className='mdi mdi-tune'></i>
                  </span>
                  Filter
                </h4>
                <div className='card-body p-4 border-bottom'>
                  <h5 className='mb-4'> search bar </h5>
                </div>
                <div className='card-body p-4 border-bottom'>
                  <h5 className='mb-4'> Rooms and beds </h5>
                  <div className='price-menu-body mt-6'>
                    <div id='slider-padding'></div>
                  </div>
                </div>
                <div className='card-body p-4 border-bottom'>
                  <h5>Amenities </h5>
                  <div className='mt-3'>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck1'
                      />
                      <label className='form-check-label' htmlFor='customCheck1'>
                        Doorman
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck2'
                      />
                      <label className='form-check-label' htmlFor='customCheck2'>
                        Free parking
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck3'
                      />
                      <label className='form-check-label' htmlFor='customCheck3'>
                        Heating
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck4'
                      />
                      <label className='form-check-label' htmlFor='customCheck4'>
                        Hair dryer
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck5'
                      />
                      <label className='form-check-label' htmlFor='customCheck5'>
                        Toiletteries{" "}
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck6'
                      />
                      <label className='form-check-label' htmlFor='customCheck6'>
                        Pool
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck7'
                      />
                      <label className='form-check-label' htmlFor='customCheck7'>
                        Wifi
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck8'
                      />
                      <label className='form-check-label' htmlFor='customCheck8'>
                        Washing machine
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck9'
                      />
                      <label className='form-check-label' htmlFor='customCheck9'>
                        Indoor fireplace
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck10'
                      />
                      <label className='form-check-label' htmlFor='customCheck10'>
                        Desk htmlFor work
                      </label>
                    </div>
                  </div>
                </div>
                <div className='card-body p-4 border-bottom'>
                  <h5>Listing status </h5>
                  <div className='mt-3'>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck1'
                      />
                      <label className='form-check-label' htmlFor='customCheck1'>
                        Listed
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='customCheck5'
                      />
                      <label className='form-check-label' htmlFor='customCheck5'>
                        Unlisted{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className='card-body p-4'>
                  <a href='#' className='btn btn-primary btn-block'>
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-9 col-md-8 col-12'>
            <div className='row mb-4'>
              <div className='col-md-3 col-8'>
                <div className='sorting'>
                  <select className='select2'>
                    <option selected>Default</option>
                    <option value='1'>Most Viewed</option>
                    <option value='2'>Newest Listing</option>
                    <option value='3'>Older Listing</option>
                  </select>
                </div>
              </div>
              <div className='col-md-9 col-4 text-end'>
                <div>
                  <Link
                    to='/app/host/become-a-host'
                    className='btn btn-primary btn-block'>
                    Create listing
                  </Link>
                </div>
              </div>
            </div>
            {bookings &&
              bookings.map((booking) => (
                <div
                  className={`row ${
                    booking?._id ? "listing" : "listing noHover"
                  }`}
                  key={booking?.apartmentId?._id || booking?._id}
                  onClick={
                    booking?._id ? (e) => handleNav(booking?._id) : null
                  }>
                  <div className='col-md-12 col-12'>
                    <div className='row '>
                      <div className='col-md-2 col-2'>
                        <div className='position-relative mb-3 mb-lg-0'>
                          <div
                            id='listcarousel6'
                            className='carousel slide '
                            data-bs-ride='carousel'
                            data-bs-interval='false'>
                            <div className='carousel-inner rounded-3'>
                              <div className=''>
                                <img
                                  src={
                                    booking?.apartmentId?.img[0] ||
                                    booking.img[0]
                                  }
                                  alt='home_image'
                                  className='w-100'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-10 col-10 '>
                        <div>
                          <h4 className='mb-0'>
                            {" "}
                            <a href='list-single.html' className='text-inherit'>
                              {booking?.apartmentId?.propertyName ||
                                booking?.propertyName}
                            </a>
                          </h4>
                          <p className='text-sm font-weight-semi-bold'>
                            {booking?.apartmentId?.city || booking?.city},{" "}
                            {booking?.apartmentId?.state || booking?.state}
                          </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <div>
                            <span className='h5'>Guests</span>
                            <span className='text-sm font-weight-semi-bold ms-1'>
                              {booking?.apartmentId?.noOfguest ||
                                booking?.noOfguest}{" "}
                            </span>
                          </div>
                          <div>
                            <span className='h5'>Baths</span>
                            <span className='text-sm font-weight-semi-bold ms-1'>
                              {booking?.apartmentId?.noOfBaths ||
                                booking?.noOfguest}{" "}
                            </span>
                          </div>
                          <div>
                            <span className='h5'>Rooms</span>
                            <span className='text-sm font-weight-semi-bold ms-1'>
                              {booking?.apartmentId?.noOfRooms ||
                                booking?.noOfRooms}{" "}
                            </span>
                          </div>
                          <div>
                            <span className='mdi mdi-circle me-1 text-secondary text-sm'></span>
                            <span className='font-weight-semi-bold  text-sm'>
                              <span className='text-dark'>Listed</span> (status)
                            </span>
                          </div>
                          <div>
                            <span className='font-weight-semi-bold  text-sm'>
                              <span className='text-dark'>Location</span> (
                              {booking?.apartmentId?.state || booking?.state},{" "}
                              {booking?.apartmentId?.country ||
                                booking?.country}
                              )
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className='col-md-12 col-12 d-flex align-items-center justify-content-center flex-column'>
            {bookings.length > 0 && (
              <div>
                <ReactPaginate
                  previousLabel={<AiOutlineLeft />}
                  nextLabel={<AiOutlineRight />}
                  breakLabel={"..."}
                  breakClassName={"break"}
                  pageCount={pageCount}
                  previousLinkClassName={"pagination__link--previous"}
                  containerClassName={"pagination"}
                  onPageChange={handlePageClick}
                  activeClassName={"pagination__link--active"}
                  disabledClassName={"pagination__link--disabled"}
                  nextLinkClassName={"pagination__link--next"}
                  pageClassName={"pagination__link"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listings;
