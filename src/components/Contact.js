import React, { Component } from "react";
import wings from "../Images/wings.jpg";
import { SocialIcon } from "react-social-icons";

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
              Instagram:
              <a
                href="https://www.instagram.com/solange_m_massage_therapist/"
                target="_blank"
              >
                Solange_m_massage_therapist
              </a>
            </h2>
          </div>
        </div>
        <div className="friends">
          <section>
            <img src={wings} alt="massage" className="md:w-500 rounded-xl" />
          </section>
        </div>
        <div className=" friends py-3 px-3 my-6 rounded text-red-200 text-m cursive md:text-3xl">
          <div className="flex">
            <h1 className="text-red-400">Let's be friends!</h1>
            <SocialIcon
              url="https://www.instagram.com/solange_m_massage_therapist/"
              className="mr-4 ml-2"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.facebook.com/solange.marques.5667"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
