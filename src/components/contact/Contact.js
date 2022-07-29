import React from "react";
import page from "../images/page.jpg";

function Contact() {
  return (
    <div   >
      <address className="container p-5 bg-dark text-dark">
        <div className="card  text-bg-info mb-3" style={{ maxWidth: 18 + "rem" }}>
          <h2 className="card-header">Contact</h2>
          <div className="card-body">
            <p>+254 700 000 000</p>
            <p>+254 700 000 000</p>
          </div>
        </div>
        <div className="card text-bg-info mb-3" style={{ maxWidth: 18 + "rem" }}>
          <h2 className="card-header">Address</h2>
          <div className="card-body">
            <p>Oven Building</p>
            <p>Kagumo</p>
            <p>Kenya</p>
          </div>
        </div>
      </address>
     
      
    </div>
  );
}

export default Contact;

// className="container position-relative  d-flex justify-content-around align-items-center "
