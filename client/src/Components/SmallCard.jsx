import React from "react";
import { Link } from "react-router-dom";

const SmallCard = () => {
  const smallCardData = [
    {
      img: require("../assets/mica1.avif"),
      title: "Mica Veneer",
      description:
        "Mica veneer is a thin layer of mica that is used to cover the surface of furniture, providing a luxurious and decorative finish."
    },
    {
      img: require("../assets/mica2.avif"),
      title: "Mica Hardware and Knobs",
      description:
        "Mica can be used to create decorative hardware and knobs for furniture, such as drawer pulls and cabinet handles. "
    },
    {
      img: require("../assets/mica4.avif"),
      title: "Mica-Infused Resin",
      description:
        " Mica-infused resin is a composite material that combines mica flakes with epoxy or resin."
    },
  ];
  return (
    <div>
      {smallCardData.map((items, index) => {
        return (
          <div
            className="card"
            style={{ width: "18rem", marginBottom: "11px" }}
          >
            <img
              style={{ width: "100%", height: "150px" }}
              src={items.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text" style={{ fontSize: "15px" }}>
                {items.description}
              </p>
              <Link style={{ textDecoration: "none" }} to="#" className="">
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard;