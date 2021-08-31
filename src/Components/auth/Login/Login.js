import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signinRequest } from "../../../actions";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors: error } = useSelector((state) => state.setCurrentUser);
  console.log(error)
  const [loading, setLoading] = useState(false);
  const { handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (values) => {
      setLoading(!loading);
      dispatch(signinRequest(values, navigate));
    },
  });
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100 justify-content-end">
        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card shadow border-0">
            <div className="card-body p-8">
              <h3 className="mb-4">Welcome back to Rentkit</h3>
              {error?.error && <span style={{color: 'red', fontSize: '12px', marginBottom: '10px', display: 'block'}}>{error.error}</span>}
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="**********"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.password && <span>{errors.password}</span>}
                </div>
                <div
                  className="
                      d-flex
                      justify-content-between
                      mb-2
                      pb-2
                      mt-3
                      text-sm
                    "
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberme"
                    />
                    <label className="form-check-label" htmlFor="rememberme">
                      Remember Me
                    </label>
                  </div>
                  <div className="fw-bold">
                    <a href="forget-password.html" className="text-inherit">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                >
                  Sign{loading ? "ing" : ""} in
                </button>
              </form>
              <div className="mt-4">
                <p className="mb-0">
                  Don’t Have an Account?<a href="/register"> Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
