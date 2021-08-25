import React from "react";

function VerifyUser(props) {
  return (
    <div
      className="min-vh-100 py-md-10 py-lg-0"
      style={{
        background:
          "url(../assets/images/post-single-img.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
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
                    <label for="email" className="form-label">
                      Verification Token
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="verificationCode"
                      aria-describedby="email"
                      placeholder="6678888hhhjnbhgbg"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Verify
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyUser;
