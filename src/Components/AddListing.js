import React from "react";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import {
  updateProperty,
  deleteProperty,
  createProperty,
} from "../actions/apartment";

function AddListing(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [files, setFiles] = useState([]);

  // const {
  //   getRootProps,
  //   getInputProps,
  //   isDragActive,
  //   isDragAccept,
  //   isDragReject,
  // } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setErrorMsg("");
  //     setFiles(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );
  //   },
  // });

  // const thumbs = files.map((file, i) => (
  //   <div style={thumb} key={file.name} onClick={() => remove(i)}>
  //     <div style={thumbInner}>
  //       <img src={file.preview} alt={file.name} style={img} />
  //     </div>
  //   </div>
  // ));
  // const remove = (file) => {
  //   const newFiles = [...files]; // make a var for the new array
  //   newFiles.splice(file, 1); // remove the file from the array
  //   setFiles(newFiles);
  //   console.log(newFiles, "file");
  // };
  // useEffect(
  //   () => () => {
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        propertyName: "",
        propertyType: "",
        description: "",
        address: "",
        state: "",
        city: "",
        zipCode: "",
        noOfRooms: "",
        noOfBaths: "",
        noOfguest: "",
        amenities: "",
        agentDiscount: "",
        pricePerNight: "",
        latitude: "",
        longitude: "",
      },
      // validateOnBlur: true,
      // validateOnChange: true,
      // validationSchema: Yup.object().shape({
      //   propertyName: Yup.string().required("property name is required"),
      //   propertyType: Yup.string().required("property type is required"),
      //   description: Yup.string().required("description is required"),
      //   address: Yup.string().required("address is required"),
      //   state: Yup.string().required("state is required"),
      //   city: Yup.string().required("city is required"),
      //   zipCode: Yup.string().required("Zipcode is required"),
      //   noOfRooms: Yup.number().required("No of rooms is required"),
      //   noOfBaths: Yup.number().required("No of baths is required"),
      //   noOfguest: Yup.number().required("No of guest per room is required"),
      //   amenities: Yup.string().required("Amenities is required"),
      //   agentDiscount: Yup.number().required("agent discount is required"),
      //   pricePerNight: Yup.string().required("Price per night is required"),
      //   latitude: Yup.string().required("latitude is required"),
      //   longitude: Yup.string().required("longitude is required"),
      // }),
      onSubmit: (values) => {
        setLoading(!loading);
        console.log(values, "values");
        // if (id) {
        //   swal("Are you sure you want to update this?", {
        //     buttons: ["No!", "Yes!"],
        //   }).then((update) => {
        //     if (update) {
        //       dispatch(updateProperty(property._id, values))
        //         .then((response) => {
        //           setLoading(!loading);
        //           navigate("/app/apartments");
        //         })
        //         .catch((err) => {
        //           setLoading(!loading);
        //           setErrorMsg("An error occurred!");
        //         });
        //     } else {
        //       swal("No updates were made!");
        //     }
        //   });
        // } else {
        //   if (files.length <= 0) {
        //     return setErrorMsg("image is required");
        //   }

        //   const uploadURL =
        //     "https://api.cloudinary.com/v1_1/drhvgijzb/image/upload";
        //   const uploadPreset = "st4gan5t";
        //   const uploads = files.map((file) => {
        //     const formData = new FormData();
        //     formData.append("file", file);
        //     formData.append("upload_preset", uploadPreset);
        //     formData.append("timestamp", (Date.now() / 1000) | 0);
        //     delete axios.defaults.headers.common["x-access-token"];
        //     return axios
        //       .post(uploadURL, formData, {
        //         headers: {
        //           "Content-Type": "application/x-www-form-urlencoded",
        //         },
        //       })
        //       .then((response) => {
        //         const data = response.data;
        //         // const fileURL = data.secure_url
        //         return data.url;
        //       })
        //       .catch((err) => setErrorMsg(err));
        //   });

        //   axios
        //     .all(uploads)
        //     .then((res) => {
        //       const propertyData = { ...values, img: res };
        //       dispatch(createProperty(propertyData))
        //         .then((res) => navigate("/app/apartments"))
        //         .catch((err) => setErrorMsg(err));
        //     })
        //     .catch((err) => setErrorMsg(err));
        // }
      },
    });
  return (
    <div className="main-wrapper">
      <div className="py-6 py-lg-8">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
              <h1>Listing Submission</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-lg-11 pb-7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form action="#">
                <div className="row mb-8">
                  <div className="col-12">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Basic information</h4>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label for="propertyname" className="form-label">
                        Property Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="propertyname"
                        placeholder="Enter Your Property Name"
                        name="propertyName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label for="home" className="form-label">
                        Property Type
                      </label>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="select2"
                        id="propertytype"
                        name="propertyType"
                      >
                        <option selected>Select a type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Space">Space</option>
                        <option value="Retail">Retail</option>
                        <option value="Retail" label="rat">lakk</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label for="address" className="form-label">
                        Street Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Your Street Address"
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12 col-12">
                    <div className="mb-3">
                      <label for="countries" className="form-label">
                        Country
                      </label>
                      <select
                        className="select2"
                        id="countries"
                        name="countries"
                      >
                        <option selected>India</option>
                        <option value="UK">UK</option>
                        <option value="US">US</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="mb-3">
                      <label for="state" className="form-label">
                        State
                      </label>
                      <select className="select2" id="state" name="state">
                        <option selected>Gujarat</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Rajasthan">Rajasthan</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="mb-3">
                      <label for="city" className="form-label">
                        City
                      </label>
                      <select className="select2" id="city" name="city">
                        <option selected>Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Mumbai">Mumbai</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="mb-3">
                      <label for="zipcode" className="form-label">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        placeholder="e.g 380019"
                        name="zipcode"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-8">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Disposition & Amenities</h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text-dark">Guests</p>
                      </div>
                      <div
                        className="
                          input-group
                          w-auto
                          justify-content-end
                          align-items-center
                        "
                      >
                        <input
                          type="button"
                          value="-"
                          className="
                            button-minus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            mx-1
                            lh-0
                          "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="0"
                          name="quantity"
                          className="quantity-field border-0 text-center w-25"
                        />
                        <input
                          type="button"
                          value="+"
                          className="
                            button-plus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            lh-0
                          "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text-dark">Bedroom</p>
                      </div>
                      <div
                        className="
                          input-group
                          w-auto
                          justify-content-end
                          align-items-center
                        "
                      >
                        <input
                          type="button"
                          value="-"
                          className="
                            button-minus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            mx-1
                            lh-0
                          "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="0"
                          name="quantity"
                          className="quantity-field border-0 text-center w-25"
                        />
                        <input
                          type="button"
                          value="+"
                          className="
                            button-plus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            lh-0
                          "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="text-dark">Bathroom</p>
                      </div>
                      <div
                        className="
                          input-group
                          w-auto
                          justify-content-end
                          align-items-center
                        "
                      >
                        <input
                          type="button"
                          value="-"
                          className="
                            button-minus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            mx-1
                            lh-0
                          "
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max="10"
                          value="0"
                          name="quantity"
                          className="quantity-field border-0 text-center w-25"
                        />
                        <input
                          type="button"
                          value="+"
                          className="
                            button-plus
                            border
                            bg-white
                            rounded-circle
                            icon-shape icon-sm
                            lh-0
                          "
                          data-field="quantity"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 mt-4">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Amenities</h4>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck19"
                      />
                      <label className="form-check-label" for="customCheck19">
                        Kitchen
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck20"
                      />
                      <label className="form-check-label" for="customCheck20">
                        TV
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck21"
                      />
                      <label className="form-check-label" for="customCheck21">
                        Heating
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck22"
                      />
                      <label className="form-check-label" for="customCheck22">
                        Air conditioning
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck23"
                      />
                      <label className="form-check-label" for="customCheck23">
                        Washer
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck24"
                      />
                      <label className="form-check-label" for="customCheck24">
                        Pool
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck25"
                      />
                      <label className="form-check-label" for="customCheck25">
                        Wifi
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck26"
                      />
                      <label className="form-check-label" for="customCheck26">
                        Washing machine
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck27"
                      />
                      <label className="form-check-label" for="customCheck27">
                        Indoor fireplace
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck28"
                      />
                      <label className="form-check-label" for="customCheck28">
                        Desk for work
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck29"
                      />
                      <label className="form-check-label" for="customCheck29">
                        Doorman
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck30"
                      />
                      <label className="form-check-label" for="customCheck30">
                        Free parking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck31"
                      />
                      <label className="form-check-label" for="customCheck31">
                        Heating
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck32"
                      />
                      <label className="form-check-label" for="customCheck32">
                        Hair dryer
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck34"
                      />
                      <label className="form-check-label" for="customCheck34">
                        Toiletteries
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-8">
                  <div className="col-lg-12">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Description</h4>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p>About Your Space</p>
                  </div>

                  <div className="col-lg-12 mb-8">
                    <div id="editor">
                      <p>Hello World!</p>
                      <p>
                        Some initial <strong>bold</strong> text
                      </p>
                      <p>
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-5 mt-md-0">
                    <small>
                      Write a quick summary of your place. You can highlight
                      what’s special about your space
                    </small>
                  </div>
                </div>

                <div className="row mb-8">
                  <div className="col-lg-12">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Add Gallery Images</h4>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div id="drag-drop-area"></div>
                    <small className="mt-1">
                      In asemeu lectus viverra aliquet ac quis magestibulum ac
                      tempor magnteger.
                    </small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <div className="mb-4 border-bottom pb-2">
                      <h4 className="mb-0">Add your space video</h4>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <label for="basic-url" className="form-label">
                      Default Video Link
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        placeholder="https://www.youtube.com/watch?v=VQWgez89JlM"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2 mt-1">
                    <span>Or</span>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Browse Video
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
