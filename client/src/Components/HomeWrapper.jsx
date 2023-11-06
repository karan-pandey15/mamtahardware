import React from "react";
import {
  BsFillPeopleFill,
  BsPersonHeart,
  BsBank2,
  BsFillChatQuoteFill,
} from "react-icons/bs";
import { BiBorderNone, BiCalendarCheck } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const HomeWrapper = () => {
  return (
    <>
      <section className="homeWrapper--section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <BsFillChatQuoteFill />
                </span>
                Quality Products
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <FaRupeeSign />
                </span>
                Competitive Pricing
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <BiBorderNone />
                </span>
                Custom Woodworking
              </h4>
            </div>
            <div className="col-6 col-lg-3 p-3 p-lg-0 ">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <MdOutlineLocationOn />
                </span>
                Aesthetic Excellence
              </h4>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                <MdOutlineLocationOn />
                </span>
                Convenient Location
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <BsFillPeopleFill />
                </span>
                1000+ Happy Customers
              </h4>
            </div>
            <div className="col-6 col-lg-3">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                  <BiCalendarCheck />
                </span>
                2+ Years of Experience
              </h4>
            </div>
            <div className="col-6 col-lg-3 p-3 p-lg-0 ">
              <h4>
                <span
                  style={{
                    fontSize: "26px",
                    paddingRight: "8px",
                    color: "#64B6A5",
                  }}
                >
                <BiBorderNone />
                </span>
                Expert Guidance
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWrapper;
