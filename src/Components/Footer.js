import React from "react";

function Footer(props) {
  return (
    <div className="footer pt-14 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3" style={{ color: "white" }}>
                Rezerve Homes
              </h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="/about-us" className="text-reset lh-lg">
                      About us
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-reset lh-lg">
                      List your property
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Book with Confidence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Trust & Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Vacation rental guides
                    </a>{" "}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3  text-dark">For Owner</h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Join as Owner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Help centre
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Mobile App
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3  text-dark">Company</h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Team
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* <div className="col-xl-2 col-lg-2 col-md-4 col-6">
            <div className="mb-14">
              <h4 className=" mb-3  text-dark">Social</h4>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Google
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-reset lh-lg">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-xl-4 col-lg-4 col-md-8 col-12">
            <div className="mb-14">
              <h4 className=" mb-3" style={{ color: "white" }}>
                Rezerve Homes deals in your inbox ?
              </h4>
              <p className="text-reset  ">
                Get special offers, travel inspiration, and more from rezerve
                homes{" "}
              </p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="subscriber"
                  />
                  <span className="btn btn-primary" id="subscriber">
                    Subscribe
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 col-12">
            <p className="fs-6 text-gray-500">
              © 2021 Rezerve Homes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
