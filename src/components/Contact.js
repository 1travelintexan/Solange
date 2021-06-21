import React, { Component } from "react";
import wings from "../Images/wings.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-reserve">
          <h1>Reserve your session!</h1>
        </div>
        <div className="contact-info">
          <div>
            <h1>Solange Marques</h1>
            <h2>Phone: +351 910 163 589</h2>
            <h2>Email: Solmarques21.sm@gmail.com</h2>
            <h2>
              Instagram:{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/solange_m_massage_therapist/"
              >
                Solange_m_massage_therapist
              </a>
            </h2>
          </div>
          <section>
            <img src={wings} alt="massage" className="wings" />
          </section>
        </div>
      </div>
    );
  }
}
export default Contact;
