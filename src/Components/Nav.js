import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Nav(props) {
  return (
    <div className="nav-header nav-header-classic shadow">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <h3>Rezerve Homes</h3>
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto ms-lg-3">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown menu_list">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarExplore"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Explore
                    </a>
                    <div
                      className="dropdown-menu w-100 p-0"
                      aria-labelledby="navbarExplore"
                    >
                      <div className="row g-0">
                        <div
                          className="
                          col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
                          d-xl-block d-lg-block d-md-none d-none
                        "
                        >
                          <div className="dropdown-img">
                            <div className="dropdown-img-caption">
                              <h2 className="text-white mb-1">
                                Want Experience on Rezerve Homes ?
                              </h2>
                              <p className="mb-4">
                                Experience a level of our quality in both design
                                &amp; customization works.
                              </p>
                              <a
                                href="./pages/add-listing.html"
                                className="btn btn-primary"
                              >
                                List Your Space
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                          <div className="row m-3 m-lg-6">
                            <div className="col-md-3">
                              <h5
                                className="
                                mb-2
                                text-uppercase
                                h6
                                text-primary
                                fw-bold
                              "
                              >
                                Listing
                              </h5>
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/listing-list-view.html"
                                  >
                                    Listing View
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/listing-grid-view.html"
                                  >
                                    Grid View
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/app/listings"
                                  >
                                    List With Map
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/grid-with-map.html"
                                  >
                                    Grid With Map
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/listing-category.html"
                                  >
                                    Listing Category
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/list-single.html"
                                  >
                                    Listing Single
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/add-listing.html"
                                  >
                                    Add Listing
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-3">
                              <h5
                                className="
                                mb-2
                                text-uppercase
                                h6
                                text-primary
                                fw-bold
                              "
                              >
                                Other Pages
                              </h5>
                              <ul className="mega-menu-list list-unstyled">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/about.html"
                                  >
                                    About us
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/contact-us.html"
                                  >
                                    Contact
                                  </a>
                                </li>

                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/faq.html"
                                  >
                                    Faq
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/pricing.html"
                                  >
                                    Pricing
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/checkout-page.html"
                                  >
                                    Checkout
                                  </a>
                                </li>

                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/coming-soon.html"
                                  >
                                    Coming Soon
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/404-error.html"
                                  >
                                    404 Error
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <h5
                                className="
                                mb-2
                                text-uppercase
                                h6
                                text-primary
                                fw-bold
                              "
                              >
                                Author
                              </h5>
                              <ul className="list-unstyled">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/author-list.html"
                                  >
                                    List
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/author-reviews.html"
                                  >
                                    Reviews
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./pages/author-favourite.html"
                                  >
                                    Favourite
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3">
                              <h5
                                className="
                                mb-2
                                text-uppercase
                                h6
                                text-primary
                                fw-bold
                              "
                              >
                                Account
                              </h5>
                              <ul className="mega-menu-list list-unstyled">
                                <li>
                                  <a className="dropdown-item" href="/login">
                                    Login
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="./register"
                                  >
                                    Register
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/forgot-password"
                                  >
                                    Forgot Password
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="blogDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="blogDropdown"
                    >
                      <li>
                        <a href="./pages/blog.html" className="dropdown-item">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/blog-author.html"
                          className="dropdown-item"
                        >
                          Author
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/blog-category.html"
                          className="dropdown-item"
                        >
                          Category
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/blog-single.html"
                          className="dropdown-item"
                        >
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./docs/index.html">
                      Docs
                    </a>
                  </li>
                </ul>
                <a
                  href="./pages/add-listing.html"
                  className="btn btn-primary d-none d-lg-block"
                >
                  List Your Space
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
