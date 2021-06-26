import React, { Component } from "react";
import leafImage from "../Images/leaves.jpeg";
import TablePic from "../Images/table.jpg";
class Home extends Component {
  render() {
    return (
      <main>
        <img
          src={leafImage}
          alt="leaves"
          className="absolute object-cover w-full h-full "
        />
        <div className="flex flex-col take-care ">
          <div className="relative">
            <h1 className="take-care text-red-100 mb-5 mt-10 text-4xl font-bold cursive md:text-8xl">
              Solange Marques
            </h1>
            <h3 className="take-care text-lg text-red-200 mb-10 md:text-3xl">
              Everybody deserves a massage!
            </h3>
          </div>
          <div>
            <img
              src={TablePic}
              alt="table"
              className="relative w-40 rounded-xl md:w-full rounded-3xl"
            />
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
