import React from "react";

function Login(props) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100 justify-content-end">
        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card shadow border-0">
            <div className="card-body p-8">
              <h3 className="mb-4">Welcome back to Rentkit</h3>
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
                    placeholder="**********"
                    required
                  />
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
                    <label className="form-check-label" for="rememberme">
                      Remember Me
                    </label>
                  </div>
                  <div className="fw-bold">
                    <a href="forget-password.html" className="text-inherit">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
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
