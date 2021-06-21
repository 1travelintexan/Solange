import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../Images/logo.jpg";
class NavBar extends Component {
  render() {
    return (
      <header className="bg-green-800 flex">
        <div className="container mx-10 flex justify-between ">
          <nav className="flex">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-600 text-4xl font-bold cursive tracking-widest"
            >
              Home
            </NavLink>
            <NavLink
              to="/photos"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-600 cursive"
            >
              Photos
            </NavLink>
            <NavLink
              to="/about"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-600 cursive"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-600 cursive"
            >
              Contact
            </NavLink>
          </nav>
          <div className="friends py-3 px-3 my-6 rounded text-red-200 cursive">
            <h1 className="text-white-700">Let's be friends!</h1>
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
        <img className="logo" src={logo} alt="logo" />
      </header>
    );
  }
}
export default NavBar;
