import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section>
        <div class="content">
          <h2>Contact Us</h2>
        </div>
        <div class="contact">
          <div class="containers" style={{ display: "flex", color: "white" }}>
            <div class="contactInfo">
              <div class="box">
                <div class="icon">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>
                    The Dessert Oven and Waken Events , <br />
                    Mutira Building, <br />
                    Ground floor, Kagumo
                    <br />
                    10300
                  </p>
                </div>
              </div>
              <hr />
              <div class="box">
                <div class="icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Phone</h3>
                  <p>+254 709 090 090</p>
                </div>
              </div>
              <hr />
              <div class="box">
                <div class="icon">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div class="text">
                  <h3>Email</h3>
                  <p>dessertoven@gmail.com</p>
                </div>
              </div>
              <div></div>
            </div>
            <iframe
              style={{
                width: "50%",
                height: 500 + "px",
                paddingLeft: 100 + "px",
              }}
              srcid="gmap_canvas"
              src="https://maps.google.com/maps?q=waken%20Events&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
