import React from "react";
import RegisterForm from "./RegisterForm";

function Register(props) {
  return (
    <div
      className="min-vh-100 py-md-10 py-lg-0"
      style={{
        background:
          "url(../assets/images/post-single-img.jpg) no-repeat center center fixed",
        "-webkitBackgroundSize": "cover",
        "-mozBackgroundSize": "cover",
        "-oBackgroundSsize": "cover",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center min-vh-100 justify-content-end">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
