import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/auth";

function RegisterForm({ registerUser }) {
  const submitHandler = () => {
    console.log("submission was successful");
  };
  return (
    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="card border-0 shadow">
        <div className="card-body p-8">
          <h3 className="mb-4">Create Your Account</h3>
          <form>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <label for="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="mb-2">
              <p className="text-sm">
                By signing up you agree to Rental
                <strong className="text-dark">Terms and Conditions</strong>
                and <strong className="text-dark">Privacy Policy.</strong>
              </p>
            </div>

            <button
              className="btn btn-primary btn-block"
              onClick={(event) => submitHandler()}
            >
              Sign Up
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

export default connect(() => ({}), { registerUser })(RegisterForm);
