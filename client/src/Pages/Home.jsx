import React from "react";
import homeImg from "../assets/mhomeimg.jpg";
import HomeWrapper from "../Components/HomeWrapper";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <section className="home_background p-5">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <h1 style={{ color: "#264653", fontWeight: 700 }}>
                Welcome You to{" "}
                <span style={{ color: "#3E9D7C" }}>MamtaHardware</span>
              </h1>
              <p
                style={{ fontSize: "19px", fontWeight: 400, color: "#264653" }}
              >
                At MamtaHardware, we take pride in offering an extensive range
                of high-quality products to cater to all your home improvement
                needs. Whether you're a DIY enthusiast, a professional
                contractor, or a homeowner embarking on a renovation project, we
                have you covered. Like - High quality plywood, Mica and Doors.
                <p style={{ marginTop: "20px" }}>🪑 Plywood:</p>
                Discover the perfect plywood for your woodworking, construction,
                and furniture needs. We offer various thicknesses and grades to
                ensure durability and performance in every project.
                <p style={{ marginTop: "20px" }}>🚪 Doors:</p>
                Elevate your living spaces with our diverse collection of
                interior and exterior doors. From classic to contemporary, our
                doors are designed to enhance your home's aesthetics and
                security.
                <p style={{ marginTop: "20px" }}>🪚 Mica Sheets:</p>
                Give your interiors a touch of elegance with our premium mica
                sheets. Ideal for kitchen cabinets, wardrobes, and more, they
                come in an array of colors and finishes.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-lg-5">
              <img
                style={{ width: "90%", borderRadius: "10px" }}
                src={homeImg}
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <HomeWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
