import React from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
           
          {
            //   <img
            // style={{ height: "60px", width: "150px" }}
            // src={logo}
            // alt="..."/>
          }

          <label style={{fontSize:"24px",width:"200px",fontWeight:"bold", color:"green" ,cursor:"pointer" }} > MamtaHardware </label>
           
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  style={{ fontSize: "19px", fontWeight: 500 }}
                  class="nav-link"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  style={{ fontSize: "19px", fontWeight: 500 }}
                  class="nav-link dropdown-toggle"
                  to="/insurance"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  usefulLinks
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      style={{ fontSize: "19px", fontWeight: 500 }}
                      class="dropdown-item"
                      to="#"
                    >
                      dummy-link
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ fontSize: "19px", fontWeight: 500 }}
                      class="dropdown-item"
                      to="#"
                    >
                    dummy-link
                    </Link>
                  </li>

                  <li>
                    <Link
                      style={{ fontSize: "19px", fontWeight: 500 }}
                      class="dropdown-item"
                      to="#"
                    >
                    dummy-link
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize: "19px", fontWeight: 500 }}
                  class="nav-link"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
             
              <li class="nav-item">
                <Link
                  style={{ fontSize: "19px", fontWeight: 500 }}
                  class="nav-link"
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>

              <li class="nav-item">
              <Link
                style={{ fontSize: "19px", fontWeight: 500 }}
                class="nav-link"
                to="/carpenter"
              >
                Carpenter
              </Link>
            </li>
   
            </ul>

            <button
              style={{
                backgroundColor: "#036E8C",
              }}
              class="btn button_class m-2"
              type="submit"
            >
              <Link
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/become-partner"
              >
                Carpenter  Register
              </Link>
            </button>
            <button
              style={{
                backgroundColor: "#036E8C",
              }}
              class="btn button_class"
              type="submit"
            >
              <Link
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/apply-now"
              >
               Login
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
