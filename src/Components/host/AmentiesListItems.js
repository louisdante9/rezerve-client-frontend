import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCheckSquare } from "react-icons/ai";
import CheckBox from "../commons/checkbox";

// import {
//   singleListing,
//   // getAllAvailableBookingDate
// } from "../../actions";

function AmentiesListItems({ property, title, subTitle, type, field }) {
  console.log(property, "property");
  const [toggle, setToggle] = useState(false);

  const handleEditToggle = () => {
    setToggle(!toggle);
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
      kitchen: "",
      tv: "",
      shower: "",
      airconditioning: "",
      washer: "",
      pool: "",
      wifi: "",
      washingmachine: "",
      bbqgrill: "",
      dedicatedworkspace: "",
      doorman: "",
      freeparking: "",
      heating: "",
      hairdryer: "",
      toiletteries: "",
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
      return console.log(values, "belle");

      const amenityItems = [
        values.kitchen,
        values.tv,
        values.shower,
        values.airconditioning,
        values.washer,
        values.pool,
        values.wifi,
        values.washingmachine,
        values.bbqgrill,
        values.dedicatedworkspace,
        values.doorman,
        values.freeparking,
        values.heating,
        values.hairdryer,
        values.toiletteries,
      ];
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
    <div className='card-body p-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-2'>{title}</h5>
        <div
          className={`editBtn ${toggle && "toggle"}`}
          onClick={handleEditToggle}>
          {!toggle ? "Edit" : "X"}
        </div>
      </div>
      {!toggle ? (
        <div className='row'>
          <div className='col-md-6'>
            <ul className='list-group list-unstyled'>
              {property?.apartment?.amenities
                .split(",")
                .slice(0, 4)
                .map((amenity) => (
                  <li className='list-item' key={amenity}>
                    <AiOutlineCheckSquare /> {amenity}
                  </li>
                ))}
            </ul>
          </div>
          <div className='col-md-6'>
            <ul className='list-group list-unstyled'>
              {property?.apartment?.amenities
                .split(",")
                .slice(4)
                .map((amenity) => (
                  <li className='list-item' key={amenity}>
                    <AiOutlineCheckSquare />
                    {amenity}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className='card mb-4'>
          <div className='card-body p-4'>
            <div className='d-flex justify-content-between align-items-top'>
              <div>
                {/* <h5 className='mb-0'>Location</h5> */}
                <p style={{ fontSize: "14px" }}>{subTitle}</p>
              </div>
            </div>
            <div className='row mb-8'>
              {/* <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                  <div className='mb-4 border-bottom pb-2'>
                    <h4 className='mb-0'>Disposition & Amenities</h4>
                  </div>
                </div> */}

              <div className='col-xl-12 mt-4'>
                <div className='mb-4 border-bottom pb-2'>
                  <h4 className='mb-0'>Amenities</h4>
                </div>
              </div>
              {/* <!-- checkboxs  --> */}
              <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <CheckBox
                  label={"Kitchen"}
                  name={"kitchen"}
                  values={values.kitchen}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"TV"}
                  name={"tv"}
                  values={values.tv}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"shower"}
                  name={"shower"}
                  values={values.shower}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Air conditioning"}
                  name={"airconditioning"}
                  // values={values.airconditioning}
                  // setFieldValue={setFieldValue}
                  // handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Washer"}
                  name={"washer"}
                  // values={values.washer}
                  // setFieldValue={setFieldValue}
                  // handleBlur={handleBlur}
                />
              </div>
              {/* <!-- checkbox  --> */}
              <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <CheckBox
                  label={"Pool"}
                  name={"pool"}
                  values={values.pool}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Wifi"}
                  name={"wifi"}
                  values={values.wifi}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Washing machine"}
                  name={"washingmachine"}
                  // values={values.washingmachine}
                  // setFieldValue={setFieldValue}
                  // handleBlur={handleBlur}
                />
                <CheckBox
                  label={"BBQ grill"}
                  name={"bbqgrill"}
                  values={values.bbqgrill}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Dedicated workspace"}
                  name={"dedicatedworkspace"}
                  values={values.dedicatedworkspace}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
              </div>
              {/* <!-- checkboxes  --> */}
              <div className='col-lg-12 col-md-6 col-sm-12 col-12'>
                <CheckBox
                  label={"Doorman"}
                  name={"doorman"}
                  values={values.doorman}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Free Parking"}
                  name={"freeparking"}
                  values={values.freeparking}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Heating"}
                  name={"heating"}
                  values={values.heating}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Hair dryer"}
                  name={"hairdryer"}
                  values={values.hairdryer}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
                <CheckBox
                  label={"Toiletteries"}
                  name={"toiletteries"}
                  values={values.toiletteries}
                  setFieldValue={setFieldValue}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-top'>
              <div onClick={handleEditToggle}>Cancel</div>
              <div>Save</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmentiesListItems;
