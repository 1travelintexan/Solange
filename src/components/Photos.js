import React, { Component } from "react";
import towel from "../Images/towel.jpg";
import massage from "../Images/massage.jpg";
import image1 from "../Images/relax.jpg";
import image2 from "../Images/sports.jpg";
import image3 from "../Images/suction.jpg";
import image4 from "../Images/therapy.jpg";
class Photos extends Component {
  render() {
    return (
      <div className="photos-page">
        <div>
          <h1 className="header">
            "Take care of your body, it's the only place you have to live"
          </h1>
        </div>
        <section>
          <img src={massage} alt="massage" className="photos" />
        </section>
        <section>
          <img src={image1} alt="relax" className="photos" />
        </section>
        <section>
          <img src={towel} alt="towel" className="photos" />
        </section>
        <section>
          <img src={image2} alt="relax" className="photos" />
        </section>
        <section>
          <img src={image3} alt="relax" className="photos" />
        </section>
        <section>
          <img src={image4} alt="relax" className="photos" />
        </section>
      </div>
    );
  }
}
export default Photos;
