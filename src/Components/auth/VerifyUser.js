import React, { useState } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { verifyUserRequest } from "../../actions";


function VerifyUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors: error } = useSelector((state) => state.setCurrentUser);
  const [loading, setLoading] = useState(false);
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      activationCode: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      activationCode: Yup.string().required("activationCode is required"),
    }),

    onSubmit: (values) => {
      setLoading(!loading);
      dispatch(verifyUserRequest(values, navigate))
    },
  });
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100 justify-content-end">
        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card border-0 shadow">
            <div className="card-body p-8">
              <h3 className="mb-1">Verify Account</h3>
              <p>Follow these simple steps to reset your account:</p>
              <ul className="list-unstyled">
                <li>1. Enter the token sent to your email address</li>
                <li>2. Click on verify button to verify account.</li>
              </ul>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Verification Token
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="activationCode"
                    aria-describedby="activationCode"
                    name="activationCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.activationCode}
                    placeholder="0ta4d72e-....-4vc6-....-7b1fec0ad90b"
                    required=""
                  />
                  {errors.activationCode && <span>{errors.activationCode}</span>}
                </div>
                <button 
                type="submit" 
                onClick={handleSubmit}
                className="btn btn-primary btn-block">
                  Verify
                </button>
              </form>
              {error?.error && <span style={{color: 'red', fontSize: '15px', marginBottom: '10px', display: 'block'}}>{error.error}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyUser;
