import React from "react";
import { useNavigate } from "react-router-dom";

const EmpDashborad = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the cookie and redirect to the login page
    fetch("http://localhost:7000/emp_logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Status === "Success") {
          navigate("/signin");
        } else {
          console.error("Logout failed.");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  return (
    <div>
      <button onClick={handleLogout} className="btn btn-primary ">
        Logout
      </button>
    </div>
  );
};

export default EmpDashborad;
