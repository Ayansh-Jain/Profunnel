import React from "react";
import "./eighth.css";


export default function Eighth() {
  return (
    <section className="mentor-section">
      <div className="mentor-container">
        <div className="mentor-image">
          <img src="/public/first.png" alt="Mentor" />
        </div>

        <div className="mentor-content">
          <h2 className="mentor-heading">Meet Your Dropshipping Mentor</h2>

          <h3 className="mentor-name">M R Choudhary</h3>
          <p className="mentor-role">The E-commerce Growth Expert</p>
          <div className="underline"></div>

          <p className="mentor-description">
            Hi, I’m a <span className="highlight">7-figure E-Commerce entrepreneur</span> dropshipping coach. Over the past 5 years, I’ve helped more than
            <span className="highlight"> 10,000+ </span>
            students launch profitable online stores using my proven systems. I’ll teach you how to find winning products, build converting stores, and scale effortlessly with automation — even if you’re starting from <span className="highlight">zero</span>.
          </p>

          <button className="mentor-button">Yes! I'm in for the Webinar</button>
        </div>
      </div>
    </section>
  );
}
