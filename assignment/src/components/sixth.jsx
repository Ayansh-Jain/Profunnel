import React from "react";
import "./sixth.css";

export default function Sixth() {
  return (
    <div className="challenge-section">
      <h2 className="challenge-title">
        The Truth About <span className="highlight-red">Dropshipping</span> :
        <br />
        <span className="highlight-red">Challenges</span> Vs.{" "}
        <span className="highlight-green">Our Solutions</span>
      </h2>

      <div className="challenge-content">
        {/* Left Side - Challenges */}
        <div className="challenge-box left-box">
          <h3 className="box-title red-bg">Challenges</h3>
          <ul className="box-list">
            <li>
              <b>RTO Losses:</b> Paying double for failed deliveries eats your
              entire profit margin.
            </li>
            <li>
              <b>Slow Logistics:</b> Long, unreliable shipping times leading to
              unhappy customers.
            </li>
            <li>
              <b>Quality Risk:</b> Inconsistent product quality and frequent
              inventory issues.
            </li>
          </ul>
        </div>

        {/* Center rotating loader */}
        <div className="center-loader">
          <div className="outer-circle red"></div>
          <div className="outer-circle green"></div>
          <div className="arrow-btn">➜</div>
        </div>

        {/* Right Side - Solutions */}
        <div className="challenge-box right-box">
          <h3 className="box-title green-bg">Solutions</h3>
          <ul className="box-list">
            <li>
              <b>ZERO RTO GUARANTEE!</b> No returns expense. Keep 100% of your
              shipping investment for successful sales.
            </li>
            <li>
              <b>Express Delivery:</b> Access fast channels for quick,
              consistent shipping (7–10 days).
            </li>
            <li>
              <b>Full Automation:</b> Automate fulfillment and tracking. Focus
              100% on scaling.
            </li>
          </ul>
        </div>
      </div>

      <button className="cta-btn">Yes! I'm in for the Webinar</button>
    </div>
  );
}
