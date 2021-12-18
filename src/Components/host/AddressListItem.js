import React, { useState } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCheckSquare } from "react-icons/ai";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import NumberInput from "../commons/numberInput";
import CheckBox from "../commons/checkbox";
import { selectStyle } from "./styles";

// import {
//   singleListing,
//   // getAllAvailableBookingDate
// } from "../../actions";

function AddressListItem({ property, title, subTitle, type }) {
  const [toggle, setToggle] = useState(false);
  const [addr, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [stateLocale, setStateLocale] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");
  const [errorMsg, setErrorMsg] = useState({ address: "", image: "" });
  const [loading, setLoading] = useState(false);

  const handleEditToggle = () => {
    setToggle(!toggle);
  };
  const handleOnChange = (address) => {
    setAddr(address);
  };
  const handleSelect = (address) => {
    setAddr(address);
    geocodeByAddress(address)
      .then((results) => {
        setAddr(
          `${results[0].address_components[0]["long_name"]} ${results[0].address_components[1]["long_name"]}`
        );
        setCity(results[0].address_components[2]["long_name"]);
        setStateLocale(results[0].address_components[5]["long_name"]);
        setCountry(results[0].address_components[6]["long_name"]);
        setZipCode(results[0].address_components[7]["long_name"]);
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        setLat(latLng.lat);
        setLng(latLng.lng);
      })
      .catch((error) => setErrorMsg(error));
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
      address: "",
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
      if (!addr) {
        return setErrorMsg({ address: "Address is required" });
      }

      setLoading(!loading);
      const propertyData = {
        ...values,
        address: addr,
      };
    },
  });
  return (
    <div className='card mb-4'>
      <div className='card-body p-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='mb-2'>Location</h4>
          <div
            className={`editBtn ${toggle && "toggle"}`}
            onClick={handleEditToggle}>
            {!toggle ? "Edit" : "X"}
          </div>
        </div>
        {!toggle ? (
          <p className='mb-4 fs-6'>
            {property?.apartment?.address} {property?.apartment?.zipCode},{" "}
            {property?.apartment?.state}, {property?.apartment?.country}
          </p>
        ) : (
          <div className='col-12'>
            <div className='mb-3'>
              <label htmlFor='address' className='form-label'>
                Street Address
              </label>
              <PlacesAutocomplete
                value={addr}
                onChange={handleOnChange}
                onSelect={handleSelect}>
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "form-control location-search-input",
                      })}
                    />
                    <div className='autocomplete-dropdown-container'>
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? {
                              backgroundColor: "#fafafa",
                              cursor: "pointer",
                              padding: "20px",
                            }
                          : {
                              backgroundColor: "#ffffff",
                              cursor: "pointer",
                            };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}>
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
              {errorMsg.address && (
                <small className='errors'>{errorMsg.address}</small>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressListItem;
