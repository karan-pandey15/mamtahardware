import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const cardData = [
    {
      img: require("../assets/plyimg1.jfif"),
      title: " Hardwood Plywood",
      description:
        " Hardwood plywood is made from various hardwood veneers, such as oak, maple, cherry, or birch. It is known for its strength and durability, making it a popular choice for fine furniture."
    },
    {
      img: require("../assets/plyimg2.jfif"),
      title: "Softwood Plywood",
      description:
        " Softwood plywood is manufactured from softwood veneers, such as pine, fir, or cedar. It is less expensive than hardwood plywood but still offers good structural strength"
    },
    {
      img: require("../assets/plyimg3.jfif"),
      title: "MDF (Medium-Density Fiberboard)",
      description:
        "MDF is an engineered wood product made from wood fibers, wax, and resin compressed together. It has a smooth, uniform surface and is highly versatile."
    },
    {
      img: require("../assets/plyimg4.jfif"),
      title: "Plywood with Veneer Finish",
      description:
        "Plywood with a veneer finish is made by applying a thin layer of real wood veneer to the surface of the plywood. This allows for a natural wood"
    },
    {
      img: require("../assets/plyimg3.jfif"),
      title: "Exterior Plywood",
      description:
        " Exterior plywood is suitable for outdoor applications due to its weather-resistant properties. It is typically manufactured with a waterproof adhesive."
    },
    {
      img: require("../assets/plyimg4.jfif"),
      title: "Particleboard",
      description:
        " Particleboard is composed of wood particles and adhesive compressed into sheets. It is a cost-effective option with a smooth, even surface"
    },
  ];
  return (
    <div>
      {cardData.map((item, index) => {
        return (
          <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
            <div
              key={index}
              className="card"
              style={{ width: "20rem", margin: "0 40px 30px 0" }}
            >
              <img
                style={{ width: "100%", height: "200px" }}
                src={item.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {item.description}
                </p>
                <Link style={{ textDecoration: "none" }} to="#" className="">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;