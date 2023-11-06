import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/hardware1st.avif";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
    <NavbarComp />
    <div style={{ backgroundColor: "#E7E5E5" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 py-5">
            <h2
              style={{ fontWeight: "700", fontSize: "40px", color: "#264653" }}
            >
              About <span style={{ color: "#036E8C" }}>Mamta</span>
              <span style={{ color: "#3E9B74" }}>Hardware</span>
            </h2>
            <p>
            "Welcome to MamtaHardware – Your Premier Destination for Home Improvement! At [MamtaHardware], we're dedicated to being your go-to source for all things home improvement. Our carefully curated selection of top-quality products will transform your projects into stunning reality.

            🪑 Plywood: Discover the perfect plywood for your woodworking, construction, and furniture needs. We offer various thicknesses and grades to ensure durability and performance in every project.
            
            🚪 Doors: Elevate your living spaces with our diverse collection of interior and exterior doors. From classic to contemporary, our doors are designed to enhance your home's aesthetics and security.
            
            🪚 Mica Sheets: Give your interiors a touch of elegance with our premium mica sheets. Ideal for kitchen cabinets, wardrobes, and more, they come in an array of colors and finishes.
            </p>
            <br />
            <p>
            💡 Why Choose MamtaHardware? - Quality Assurance: We source our products from trusted manufacturers. - Expert Advice: Our knowledgeable staff is here to guide you. - Competitive Prices: Enjoy top-notch products without breaking the bank. - Convenient Location: Find us at Balipur Paratapgarh near Durga Mandir  for an effortless shopping experience.
            </p>
            <br />
            <p>
                 
            Visit us today, or reach out at 7275759000 and kanahaiyapandey822@gmail.com for expert assistance. Make MamtaHardware your partner in turning your home improvement dreams into reality.
            
            Thank you for choosing us – we're excited to be part of your home improvement journey! 🏠🔨"
            </p>
            <button
              className="py-2 px-4 button_class"
              style={{
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#036E8C",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="#"
              >
              ReadMore
              </Link>
            </button>
          </div>
          <div className="col-12 col-lg-6 mt-lg-5">
            <img style={{ width: "100%" ,borderRadius:"10px" }} src={aboutImg} alt="..." />
          </div>
        </div>
      </div>
      <section className="aboutVision-Container">
        <div className="container p-5">
          <h3
            style={{
              color: "#3E9B74",
              fontSize: "30px",
              fontWeight: "700",
            }}
            className="text-start pb-2"
          >
            Our Dream is to be HomeDreams Hardware Shop
          </h3>
          <p style={{ color: "#edede9" }}>
          "Welcome to Mamta Hardware Shop, where your home improvement fantasies come to life! We're more than just a hardware store; we're your dream destination for all things related to making your home extraordinary. Visit Ustoday and let us be your partner in turning your dream home into a breathtaking reality. For inquiries and expert assistance, reach us at 7275759000 or kanahaiyapandey822@gmail.com.
          </p>
          <button
            className="py-2 px-4 button_vision-class"
            style={{
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#3e9d7c",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="#"
            >
             ReadMore
            </Link>
          </button>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <h3
            className="text-center"
            style={{ color: "#264653", fontSize: "40px", fontWeight: 700 }}
          >
            Meet Our Team Members
          </h3>
          <p>
          "Meet the dynamic trio behind Mamta Hardware Shop - your trusted partner for turning home improvement dreams into reality! Our team is comprised of the dedicated owner, a skilled worker, and a visionary developer, working together to provide you with the best products and services in the industry.
          </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div class="card my-3" style={{ width: "100%" }}>
                <img class="card-img-top" src={team1} alt="..." />
                <div class="card-body text-dark">
                  <h5 class="card-title ">Kanahaiya Pandey</h5>
                  <p class="card-text ">
                  As the owner of HomeDreams, I'm not just here to run the show; I'm your dedicated guide to crafting the perfect home. With a passion for home improvement and a commitment to quality, I ensure that our shop provides the products and service you deserve.
                  </p>
                  <button
                    className="py-2 px-2 button_class"
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#036E8C",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      Read more
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div class="card my-3" style={{ width: "100%" }}>
                <img class="card-img-top" src={team2} alt="..." />
                <div class="card-body text-dark">
                  <h5 class="card-title text-dark">Karan Pandey</h5>
                  <p class="card-text">
                  
                  Our visionary developer is the creative force behind our shop's success. They have an eye for design and innovation, ensuring that we offer a selection of products that are not only functional but also aesthetically inspiring. Wiht new innovation.
                  </p>
                  <button
                    className="py-2 px-2 button_class"
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#036E8C",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      Read more
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 justify-content-center">
              <div class="card my-3" style={{ width: "100%" }}>
                <img class="card-img-top" src={team3} alt="..." />

                <div class="card-body">
                  <h5 class="card-title">[Member Name]</h5>
                  <p class="card-text">
                  Our skilled worker brings years of experience and craftsmanship to our team. They are the hands-on expert who helps you choose the right products, offers practical advice, and ensures that your projects are executed with precision and care.
                  </p>
                  <button
                    className="py-2 px-2 button_class"
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#036E8C",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      Read more
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default About;
