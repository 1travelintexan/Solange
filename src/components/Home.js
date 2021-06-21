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
          className="absolute object-cover w-full h-full"
        />
        <div className="flex justify-between ">
          <section className="relative flex flex-col justify-start min-h-screen pt-12 lg:pt-15 px-8">
            <h1 className="solange text-red-200 mb-20 font-bold cursive leading-none lg:leading-snug home-name">
              Solange Marques
            </h1>
            <h3 className=" take-care text-red-200">
              Everybody deserves a massage!
            </h3>
          </section>
          <section>
            <img
              src={TablePic}
              alt="table"
              className=" image relative flex justify-center pt-12 lg:pt-15 px-8"
            />
          </section>
        </div>
      </main>
    );
  }
}
export default Home;
