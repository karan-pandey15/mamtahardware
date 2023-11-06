import React, { useEffect, useState } from "react";

import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const Carpenter = () => {
  // get_carpenter
  const [carpenter,setCarpenter] = useState([]);




   const fetchCarpenter = async () => {
    let data = await fetch("http://localhost:5000/api/get_carpenter", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });

    let result = await data.json();
    setCarpenter(result);
  };

  useEffect(()=>{
    fetchCarpenter();
  },[])

  return (
    <div>

      <NavbarComp />
       <div className="container">
       <div>
       {carpenter.map((item, index) => {
         return (
           <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
             <div
               key={index}
               className="card"
               style={{ width: "20rem", margin: "0 40px 30px 0" ,margin:"50px" }}
             >
               <img
                 style={{  height: "320px" }}
                 src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9045/carpenter-clipart-md.png"
                 className="card-img-top"
                 alt="..."
               />
               <div className="card-body">
                 <h2 className="card-title">{item.name}</h2>
                 <h3 className="card-text" style={{ fontSize: "15px" }}>
                   {item.address}
                 </h3>
                 <h4>{item.mobile}</h4>
                 <p>{item.description	}</p>
              
               </div>
             </div>
           </div>
         );
       })}
     </div>
       </div>
      <Footer />
    </div>
  );
};

export default Carpenter;