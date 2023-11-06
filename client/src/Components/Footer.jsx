import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#232935" }} className="hidefooter" >
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5
                style={{
                  color: "#3E9D7C",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Useful Links
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#"  className="nav-link p-0 text-white">
                    Dymmy Link
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-white">
                  Dymmy Link
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#"  className="nav-link p-0 text-white">
                  Dymmy Link
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                  to="#" 
                    className="nav-link p-0 text-white"
                  >
                  Dymmy Link
                  </Link>
                </li>
              
                
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5
                style={{
                  color: "#3E9D7C",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                About Shop
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/about-us" className="nav-link p-0 text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact-us" className="nav-link p-0 text-white">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/disclaimer" className="nav-link p-0 text-white">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5
                style={{
                  color: "#3E9D7C",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Other Links
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/blog" className="nav-link p-0 text-white">
                    Blog
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/emi-calc" className="nav-link p-0 text-white">
                    Emi Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <h2 style={{ color: "#3E9D7C" }}>Contact Details</h2>
              <p className="text-white">
                {" "}
                <span style={{ color: "#3E9D7C", fontSize: "26px" }}>
                  <MdOutlineLocationOn />
                </span>
                Balipur (P.B.H) Near Durga Mandir
              </p>
              <p className="text-white">
                <span style={{ color: "#3E9D7C", fontSize: "26px" }}>
                  <AiFillPhone />
                </span>{" "}
                +91 7275759000
              </p>
              <p className="text-white">
                <span style={{ color: "#3E9D7C", fontSize: "26px" }}>
                  <TbDeviceLandlinePhone />
                </span>{" "}
                +91 7054263211
              </p>
              <p className="text-white">
                {" "}
                <span
                  style={{
                    color: "#3E9D7C",
                    fontSize: "26px",
                    paddingRight: "6px",
                  }}
                >
                  <AiOutlineMail />
                </span>
                kanahaiyapandey822@gmail.com
              </p>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p
              className="text-white"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              © 2023{" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                mamtaHardware
              </Link>{" "}
              , Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-white fs-2" href="#">
                  <AiFillTwitterCircle />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-white fs-2 " href="#">
                  <BsInstagram />
                </Link>
              </li>
              <li className="ms-3">
                <Link className="link-white fs-2 " href="#">
                  <AiFillFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;