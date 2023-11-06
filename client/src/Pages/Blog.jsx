import React from "react";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";
import blogImg from "../assets/blogImg.png";
import personalLoanBlog1 from "../assets/mica2.avif";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import SmallCard from "../Components/SmallCard";

const Blog = () => {
  return (
    <div>
      <NavbarComp />
      <div>
        <div style={{ backgroundColor: "#E7E5E5" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-4">
                <img style={{ width: "100%",height:"100%" }} src={blogImg} alt="..." />
              </div>
              <div className="col-12 col-lg-8 col-md-8 pt-4">
                <h2 style={{ color: "#264653", fontWeight: 700 }}>
                  <span style={{ color: "#036E8C" }}>Mamta</span>
                  <span style={{ color: "#3E9A73" }}>Hardware</span> Blogs
                </h2>
                <p>
                Your Premier Destination for Home Improvement! At MamtaHardware, we're dedicated to being your go-to source for all things home improvement. Our carefully curated selection of top-quality products will transform your projects into stunning reality.
                </p>
                <div className="input-group pt-5">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-12 col-lg-8 col-md-8">
                <div>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={personalLoanBlog1}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">What things to keep in mind when it cones to furniture ? </h5>
                          <p className="card-text">
                          Home furniture is not merely a collection of functional items; it's a reflection of your personality and lifestyle, transforming a house into a warm and inviting home. When selecting furniture for your living spaces, it's crucial to keep several essential considerations in mind.
                          </p>
                          <p className="card-text">
                            <Link
                              style={{ textDecoration: "none" }}
                              to={"#"}
                              className=""
                            >
                              Read more
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <Card />
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                <SmallCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;