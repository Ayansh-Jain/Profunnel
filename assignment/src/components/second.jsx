import React from "react";
import "./second.css";
import graph1 from "../public/Graph1.png";
import graph2 from "../public/Graph2.png";
import graph3 from "../public/Graph3.png";
import graph4 from "../public/Graph4.png";
import guaranteeIcon from "../public/second.png";

const Second = () => {
  const cards = [
    {
      img: graph1,
      text: "₹28,000+ in Just 3 Days of Launch",
    },
    {
      img: graph2,
      text: "Crossed ₹86,000+ in the First Week",
    },
    {
      img: graph3,
      text: "Hit ₹1 Lakh+ Milestone Within 15 Days",
    },
    {
      img: graph4,
      text: "Scaled Beyond ₹2 Lakh in Just One Month",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Students <span className="highlight">Success</span> Dashboard
      </h1>
      <p className="dashboard-subtitle">
        From Zero to 7 Figures — Students Dreams to Reality Dashboard
      </p>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={`Graph ${index + 1}`} className="card-image" />
            <button className="card-btn">{card.text}</button>
          </div>
        ))}
      </div>

      <div className="guarantee-section">
        <img
          src={guaranteeIcon}
          alt="Money Back Guarantee"
          className="guarantee-icon"
        />
        <div className="guarantee-text">
          <h2>100% Money-back Guarantee</h2>
          <p>
            Not completely satisfied after Day 1? Get a full refund, no questions asked.
            We're confident you'll see the massive opportunity within the first hour.
          </p>
          <p className="quote">
            "Your success is our reputation. We stand behind every promise made."
          </p>
        </div>
      </div>

      <button className="cta-button">Enroll Now For Just ₹49!</button>
    </div>
  );
};

export default Second;
