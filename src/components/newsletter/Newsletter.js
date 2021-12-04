import React from "react";
import "./Newsletters.style.css";

const Newsletters = (props) => {
  return (
    <section id="newsletter">
      <div className="newsletter container">
        <h3 className="newsletter-heading">Lorem ipsum dolor</h3>
        <p className="newsletter-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <div className="newsletter__sign_up">
          <input
            className="newsletter__sign_up-input"
            type="text"
            placeholder="Enter email address"
          />
          <button className="btn btn-sign-up">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
