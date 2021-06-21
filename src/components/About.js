import React, { Component } from "react";
import solange from "../Images/solange.jpg";

class About extends Component {
  render() {
    return (
      <main>
        <div className="about">
          <section>
            <img src={solange} alt="solange" className="about-photo" />
          </section>
          <div className="about-words">
            <section>
              <h1>~Òla, My name is Solange.</h1>
            </section>
          </div>
        </div>
        <div>
          <h3 className="about-para">
            I am from a small town in Portgual, and I have always been
            passionate about helping others. It was my dream to be a masseuse
            and now after many hours of studying and practicing, I am a licensed
            massage therapist located in beautiful Ericeria, Portugal. I
            Specialize in sport therapy but I am qualified to do many different
            styles of massage. Whether you are looking for a calm, relaxing
            afternoon or you want a deep tissue massage after a yoga or surf
            session designed to loosen up the soft tissue. I feel confident that
            I can give you exactly what you are looking for. I am looking
            forward to our next session. Have a great day!
          </h3>
        </div>
      </main>
    );
  }
}
export default About;
