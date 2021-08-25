import React from "react";

function NotFound(props) {
  return (
    <div
      style={{
        background:
          "url(../ assets / images / error.jpg) no- repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-100 ">
          <div className="offset-lg-2 col-lg-8 col-md-12 col-12">
            <div className="text-center text-white">
              <h1 className="display-1 font-weight-bold text-white mb-5">
                404 Error
              </h1>
              <p className="fs-2 mb-0">It’s look like you are lost!</p>
              <p className="lead">
                We can't seem to find the page you're looking for.
              </p>
              <a href="/" className="btn btn-primary mt-2">
                Back To Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
