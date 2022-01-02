import React, { useState } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import NumberInput from "../commons/numberInput";
import { selectStyle } from "./styles";

function ListingItem({
  item,
  itemTitle,
  title,
  subTitle,
  type,
  option,
  field,
  fieldName,
}) {
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
      ...field,
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
        <p className='mb-2'>
          {itemTitle && `${itemTitle}: `}
          {item}
        </p>
      ) : (
        <div className='card mb-4'>
          <div className='card-body p-4'>
            <div className='d-flex justify-content-between align-items-top'>
              <div>
                <p style={{ fontSize: "14px" }}>{subTitle}</p>
              </div>
            </div>
            {type === "dropdown" ? (
              <div className='col-12'>
                <div className='mb-3'>
                  <Select
                    placeholder={<div>Property Type</div>}
                    menuColor='#495057'
                    styles={selectStyle}
                    onBlur={() => setFieldTouched(fieldName, true)}
                    onChange={(option, e) => {
                      console.log(option, "opt");
                      setFieldValue(fieldName, option.value);
                    }}
                    options={option}
                  />
                </div>
                {errors[fieldName] && (
                  <small className='errors'>{errors[fieldName]}</small>
                )}
              </div>
            ) : type === "number" ? (
              <NumberInput
                num={values[fieldName]}
                label='noOfguest'
                title={itemTitle}
                updater={setFieldValue}
              />
            ) : (
              <div className='mb-3 col-12'>
                <input
                  type='text'
                  id={fieldName}
                  name={fieldName}
                  className='form-control'
                  aria-describedby='reviewname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[fieldName]}
                />
              </div>
            )}
            <div className='d-flex justify-content-between align-items-top'>
              <div onClick={handleEditToggle}>Cancel</div>
              <div onClick={handleSubmit}>Save</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingItem;
