import React, {useState} from "react";

import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

const CustomerLoanApply = () => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    skills: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/submit-carpenter-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
       
        if (data.success) {
          alert('Data submitted successfully');
        } 
        else {
          alert("please fill all the field")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <NavbarComp />
      <section style={{ backgroundColor: "#E7E5E5" }}>
        <div className="container p-5">
          <h2>Basic Details</h2>
          <form>
            <div className="row">
              {
              //   <div className="mb-3 col-12 col-lg-6 col-md-6">
              //   <label htmlFor="appliedLoan" className="form-label">
              //     Your Location 
              //   </label>
              //   <select class="form-select" aria-label="Default select example">
              //     <option selected>Personal Loan-PL</option>
              //     <option value="1">Business Loan-BL</option>
              //     <option value="2">Home Loan-HL</option>
              //     <option value="3">Loan Against Property-LAP</option>
              //     <option value="3">Auto Loan-AL</option>
              //     <option value="3">Over Draft_OD</option>
              //   </select>
              // </div>
              }
            </div>
            <div className="row">
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="customerName" className="form-label">
                 Enter Your Full Name:
                </label>
                <input name="name" type="text" className="form-control" id="customerName"  onChange={handleChange} />
              </div>
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="customerFatherName" className="form-label">
                  Your Full Adress:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerFatherName"
                  name="address"
                  onChange={handleChange}
                />
              </div>
        
            </div>
            <div className="row">
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="customerMobileNo" className="form-label">
                  Mobile No:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="customerMobileNo"
                  name="mobile"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-12 col-lg-6 col-md-6">
                <label htmlFor="customerOfficialMail" className="form-label">
                   Skills:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerOfficialMail"
                  name="skills"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 col-12 col-lg-12 col-md-6">
              <label htmlFor="customerOfficialMail" className="form-label">
                 Tell About Yourself:
              </label>
              <input
                type="text"
                className="form-control"
                id="customerOfficialMail"
                name="description"
                onChange={handleChange}
              />
            </div>
            </div>
          
            <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CustomerLoanApply;