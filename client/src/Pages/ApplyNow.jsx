import React from "react";
// import SignIn from "../Components/SignIn";
import { Link } from "react-router-dom";
import portalImg from "../assets/portalimg.jpg";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const ApplyNow = () => {
  return (
    <div>
      <NavbarComp />
      <div style={{ backgroundColor: "#E7E5E5" }}>
        <div className="container p-5">
          <div className="row ">
            <div className="col-12 col-lg-6 ">
              <h2 style={{ color: "#264653", fontWeight: 600 }}>
                Welcome to the MamtaHardware Login Portal!
              </h2>
              <p>
                🏠 Homeowners with a Vision: If you're a homeowner with a
                vision, this login page is where your journey to creating the
                perfect living space commences. We understand that your home is
                a canvas waiting to be transformed, and this login is your
                starting point. It provides access to inventory management,
                project tracking, and the collaborative environment that makes
                HomeDreams Hardware Shop a trusted name in the industry.
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="pb-3"
              >
                <button
                  style={{ backgroundColor: "#036E8C" }}
                  className="btn m-2"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/signin"}
                  >
                    Customer
                  </Link>
                </button>
                <button
                  style={{ backgroundColor: "#036E8C" }}
                  className="btn m-2"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/signin"}
                  >
                    Admin
                  </Link>
                </button>
                <button style={{ backgroundColor: "#036E8C" }} className="btn ">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/signin"}
                  >
                    Carpenter
                  </Link>
                </button>
              </div>
              <p>Login to Mamata Hardware Shop</p>
              <p>
                Welcome to the HomeDreams Hardware Shop login page, your gateway
                to a world of home improvement possibilities. Whether you're a
                homeowner with a vision, a dedicated contractor, or part of our
                team, this is where your journey begins.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img
                style={{ width: "100%", borderRadius: "15px" }}
                src={portalImg}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyNow;
