import React from "react";
import RegisterForm from "./RegisterForm";

function Register(props) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center min-vh-100 justify-content-end">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
