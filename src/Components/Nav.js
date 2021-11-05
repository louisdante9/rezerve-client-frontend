import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { logout } from "../actions";
import { useWindowDimensions } from '../utils'
import logo from '../Assets/images/logo.png'

function Nav(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null)
  const { user } = useSelector((state) => state.setCurrentUser)
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (user) {
      setProfile(user)
    }
  }, [user])

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-header nav-header-classic shadow">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg" style={{ height: "60px" }}>
              {/* <Link className="navbar-brand" to="/">
                <h3>Rezerve Homes</h3>
              </Link> */}
              <Link className="navbar-brand" to="/">
                <img src="/Assets/images/logo.png" alt="logo" height="50"/>
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
                  {profile?.firstname && width < 991 && (<><li className="nav-item">
                    <Link className="nav-link" to="/app/profile">
                      profile
                    </Link>
                  </li><li className="nav-item">
                      <div className="nav-link"
                        style={{ cursor: 'pointer' }}
                        onClick={handleLogout}
                      >
                        logout
                      </div>
                    </li></>)}
                  {/* <li className="nav-item dropdown">
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
                  </li> */}
                </ul>
                {profile?.firstname && width > 991 ? (
                  <>
                    {/* <Link className="nav-link" to="/#">
                      Become a host
                    </Link> */}
                    {/* <Link className="nav-link" to="/#">
                      Switch to hosting
                    </Link> */}
                    {/* <Link className="nav-link" to="/#">
                      Switch to hosting
                    </Link> */}
                    <Link
                      to="/app/profile"
                      className="btn btn-primary d-none d-lg-block"
                      style={{
                        borderRadius: '21px',
                        background: 'transparent',
                        color: '#222222',
                        cursor: 'pointer',
                        marginRight: '5px'
                      }}
                    >
                      <AiOutlineUser /> {" "}Hi {profile?.firstname}
                    </Link>
                    <button
                      className="btn btn-primary d-none d-lg-block"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                )
                  : (<Link
                    to="/login"
                    className="btn btn-primary d-none d-lg-block"
                  >
                    Login / Sign up
                  </Link>
                  )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
