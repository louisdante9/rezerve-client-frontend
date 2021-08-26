import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../../actions/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterForm({ registerUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      confirmPass: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      setLoading(!loading);
      const { firstname, lastname, email, password } = values;
      dispatch(registerUser({ firstname, lastname, email, password }, navigate));
    },
  });
  console.log(errors);
  return (
    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="card border-0 shadow">
        <div className="card-body p-8">
          <h3 className="mb-4">Create Your Account</h3>
          <form>
            <div className="mb-3">
              <label for="firstname" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="Enter first name"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.firstname && <span>{errors.firstname}</span>}
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Enter last name"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.lastname && <span>{errors.lastname}</span>}
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="mb-3">
              <label for="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPass"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.confirmPass && <span>{errors.confirmPass}</span>}
            </div>

            <div className="mb-2">
              <p className="text-sm">
                By signing up you agree to Rental
                <strong className="text-dark">Terms and Conditions</strong>
                and <strong className="text-dark">Privacy Policy.</strong>
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleSubmit}
            >
              Sign{loading ? "ing" : ""} in
            </button>
          </form>
          <div className="mt-3">
            <p className="mb-0">
              Already have an account?
              <span className="ml-3">
                <a href="/login">Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
