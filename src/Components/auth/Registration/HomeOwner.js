/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,  } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUser } from "../../../actions";
import { getProfile}from "../../../actions/user"



function UpdateHomeOwner() {
  const dispatch = useDispatch();
  const { errors: error , user:{id}} = useSelector((state) => state.setCurrentUser);
  const { profile, error: profileError} = useSelector((state) => state.user);
  //const userUpdate = useSelector((state) => state.userUpdate);
  const navigate = useNavigate();
  

  const [loading, setLoading] = useState(false);
 

  
  useEffect(() => {
    const fetchUserProfile = () => {
      dispatch(getProfile(id));
    };
    fetchUserProfile();
  }, [dispatch, id]);

console.log('profile', profile)

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      phone: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postCode: "",
      placeOfBirth: "",
      nin: "",
      tin: "",
      bank: "",
      accountName: "",
      accountNumber: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone is Required"),
      address: Yup.string().required("Address is required"),
      dob: Yup.string().required("Date of birth is required"),
      city: Yup.string().required("State is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      postCode: Yup.number().required("Postal Code is required"),
      placeOfBirth: Yup.string().required("Place of Birth is required"),
      nin: Yup.number().required('NIN is a required field'),
      tin: Yup.string().optional("State is required"),
      bank: Yup.string().required("Bank Name is required"),
      accountNumber: Yup.number().required("Account Number is required"),
      accountName: Yup.string().required("Account Name is required"),

    }),
    onSubmit: (values) => {
      setLoading(!loading);
      const { phone, city, state, country, placeOfBirth, postCode, dob, bank, address, nin, tin, accountNumber, accountName } = values;
      dispatch(updateUser(id, { phone, city, state, country, placeOfBirth, postCode, dob, bank, address, nin, tin, accountNumber, accountName }, navigate))
    },
  });

  return (
    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="card border-0 shadow">
      {profile?(
        <div className="card-body p-8">
          <h3 className="mb-4">Update {profile.firstname}</h3>
          <form>
     
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Addresss
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.address && <span>{errors.address}</span>}
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
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="Enter City"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.city && <span>{errors.city}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                name="state"
                className="form-control"
                placeholder="Enter State"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.state && <span>{errors.state}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="postCode" className="form-label">
                Postal Code
              </label>
              <input
                type="text"
                name="postCode"
                className="form-control"
                placeholder="Enter your Postal Code"
                value={values.postCode}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                inputMode="numeric"
                
              />
              {errors.postCode && <span>{errors.postCode}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Enter your Country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.country && <span>{errors.country}</span>}
            </div>
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

            {error?.error && <span style={{ color: 'red', fontSize: '12px', marginBottom: '10px', display: 'block' }}>{error.error}</span>}


            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
            >
              Updat{ loading? "ing" : "e"}
            </button>
          </form>

        </div>) :(<div>*rft{profileError}</div>)}
      </div>
    </div>
  );
}

export default UpdateHomeOwner;
