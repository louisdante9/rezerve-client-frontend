/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geocode from "react-geocode";
import { updateUser } from "../../actions";
import { getProfile } from "../../actions/user";


const AccountUpdate = () => {
  Geocode.setLanguage("en");
  Geocode.setApiKey("AIzaSyD093gX7zynJ6NTLc5u0tassLDvgkgrUZo");
  Geocode.setRegion("ng");
  Geocode.setLocationType("ROOFTOP");
  const [addr, setAddr] = useState('');
  const [city, setCity] = useState('');
  const [stateLocale, setStateLocale] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('')
  const [lng, setLng] = useState('')
  const [lat, setLat] = useState('');
  const [errorMsg, setErrorMsg] = useState({});
  const { errors: error, user: { id } } = useSelector((state) => state.setCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserProfile = () => {
      dispatch(getProfile(id));
    };
    fetchUserProfile();
  }, []);
   const { profile, error: profileError } = useSelector((state) => state.user);
   console.log(profile, 'profile')
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleOnChange = address => {
    setAddr(address);
  };

  const handleSelect = address => {
    setAddr(address);
    geocodeByAddress(address)
      .then(results => {
        setAddr(`${results[0].address_components[0]['long_name']} ${results[0].address_components[1]['long_name']}`)
        setCity(results[0].address_components[2]['long_name'])
        setStateLocale(results[0].address_components[5]['long_name'])
        setCountry(results[0].address_components[6]['long_name'])
        setPostCode(results[0].address_components[7]['long_name'])
        return getLatLng(results[0])
      })
      .then(latLng => {
        setLat(latLng.lat)
        setLng(latLng.lng)
      })
      .catch(error => setErrorMsg({ msg: error }));
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: profile?.firstname,
      lastname: profile?.lastname,
      email: profile?.email,
      phone: profile?.phone,
      dob: profile?.dob,
      address:"" ,
      state: '',
      placeOfBirth: profile?.placeOfBirth,
      nin: profile?.nin,
      tin: profile?.tin,
      bank: profile?.bank,
      accountName: profile?.accountName,
      accountNumber: profile?.accountNumber,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is Required"),
      
      dob: Yup.string().required("Date of birth is required"),
      placeOfBirth: Yup.string().required("Place of Birth is required"),
      nin: Yup.number().required('NIN is a required field'),
      tin: Yup.string().optional("Tax Identification Code is required"),
      bank: Yup.string().required("Bank Name is required"),
      accountNumber: Yup.number().required("Account Number is required"),
      accountName: Yup.string().required("Account Name is required"),
    }),
    onSubmit: (values) => {
      setLoading(!loading);
      if (addr === '') {
        setErrorMsg({ address: 'Address is required' })
        return
      }
      const userData = {
        firstname: values.firstname, lastname: values.lastname, email: values.email, phone: values.phone,
        address: addr, state: stateLocale, city: city, country: country, postCode: postCode, dob: values.dob, nin: values.nin,
        placeOfBirth: values.placeOfBirth, tin: values.tin, bank: values.bank, accountName: values.accountName, accountNumber: values.accountNumber,
        latitude: lat, longitude: lng,
      }
      console.log(userData, 'userData')
       dispatch(updateUser(id, userData, navigate))
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
{profileError && (<div>{profileError } error</div>)}
        <div className="col-lg-9">
          <div className="card-body p-8">
            <form>
              <div className="row mb-8">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    value={values.firstname || ''}
                  />
                  {errors.firstname && <span>{errors.firstname}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    value={values.lastname}
                  />
                  {errors.lastname && <span>{errors.lastname}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    value={values.email}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    value={values.phone}
                  />
                  {errors.phone && <span>{errors.phone}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    placeholder="Enter Date of Birth"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.dob && <span>{errors.dob}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Addresss
                  </label>
                  <PlacesAutocomplete
                    value={addr}
                    onChange={handleOnChange}
                    onSelect={handleSelect}
                    required
                  >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'form-control location-search-input',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '20px' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                 
                </div>
                {addr && (
                  <>

                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="e.g Victoria island"
                        name="city"
                        required
                        defaultValue={city}
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="postCode" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postCode"
                        className="form-control"
                        placeholder="eg 102302"
                        defaultValue={postCode}
                        disabled
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="stateLocale" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        id="stateLocale"
                        name="stateLocale"
                        className="form-control"
                        placeholder="eg Lagos"
                        value={stateLocale}
                        required
                        disabled
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        placeholder="eg Nigeria"
                        defaultValue={country}
                        required
                        disabled
                      />
                    </div>
                  </>
                )}
                <div className="mb-3">
                  <label htmlFor="placeOfBirth" className="form-label">
                    Place of birth
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    className="form-control"
                    placeholder="Enter your Place of Birth"
                    value={values.placeOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.placeOfBirth && <span>{errors.placeOfBirth}</span>}
                </div>
                {profile?.role !== "user" && (
                  <>

                    <div className="mb-3">
                      <label htmlFor="nin" className="form-label">
                        NIN
                      </label>
                      <input
                        type="text"
                        name="nin"
                        className="form-control"
                        placeholder="Enter your NIN"
                        value={values.nin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required

                      />
                      {errors.nin && <span>{errors.nin}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="tin" className="form-label">
                        TIN
                      </label>
                      <input
                        type="text"
                        name="tin"
                        className="form-control"
                        placeholder="Enter your Tax Identification Number "
                        value={values.tin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {errors.tin && <span>{errors.tin}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bank" className="form-label">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        name="bank"
                        className="form-control"
                        placeholder="Enter your Bank Name "
                        value={values.bank}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {errors.bank && <span>{errors.bank}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="accountNumber" className="form-label">
                        Account Number
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        className="form-control"
                        placeholder="Enter your Account Number "
                        value={values.accountNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        inputMode="numeric"
                      />
                      {errors.accountNumber && <span>{errors.accountNumber}</span>}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="accountName" className="form-label">
                        Account Name
                      </label>
                      <input
                        type="text"
                        name="accountName"
                        className="form-control"
                        placeholder="Enter your Account Name "
                        value={values.accountName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {errors.accountName && <span>{errors.accountName}</span>}
                    </div>
                  </>
                )}

                {error?.error && <span style={{ color: 'red', fontSize: '12px', marginBottom: '10px', display: 'block' }}>{error.error}</span>}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  Updat{loading ? "ing" : "e"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountUpdate;
