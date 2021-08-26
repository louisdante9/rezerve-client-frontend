import React from "react";

function ForgotPassword(props) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100 justify-content-end">
        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="card border-0 shadow">
            <div className="card-body p-8">
              <h3 className="mb-1">Recover Account</h3>
              <p>Follow these simple steps to reset your account:</p>
              <ul className="list-unstyled">
                <li>1. Enter your email address</li>
                <li>2. Wait htmlFor your recovery details to be sent.</li>
                <li>3. Follow as given instructions in your mail account.</li>
              </ul>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="example@gmail.com"
                    required=""
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
