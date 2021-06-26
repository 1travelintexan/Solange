import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.jpg";
class NavBar extends Component {
  render() {
    return (
      <header className="bg-green-800 py-2 md:py-4">
        <div className="flex">
          <div className="container flex justify-between md:mx-10">
            <nav className="flex">
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="inline-flex items-center px-2 text-red-100 hover:text-green-600 text-lg font-bold cursive md:text-4xl md:px-10 tracking-widest"
              >
                Home
              </NavLink>
              <NavLink
                to="/photos"
                className="inline-flex items-center px-2 rounded text-red-200 hover:text-green-600 text-m cursive md:text-3xl"
              >
                Photos
              </NavLink>
              <NavLink
                to="/about"
                className="inline-flex items-center px-2 rounded text-red-200 hover:text-green-600 text-m cursive md:text-3xl md:px-10"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center px-1 rounded text-red-200 hover:text-green-600 text-m cursive md:text-3xl"
              >
                Contact
              </NavLink>
            </nav>
          </div>
          <img
            className="w-10 mr-2 rounded-full md:w-20"
            src={logo}
            alt="logo"
          />
        </div>
      </header>
    );
  }
}
export default NavBar;
