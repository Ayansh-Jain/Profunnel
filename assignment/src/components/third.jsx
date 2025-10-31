import React from "react";
import "./third.css";

const Third = () => {
  return (
    <div className="comparison-container">
      <h2 className="comparison-heading">
        ⚠️ Don’t Let This Be Your “I Wish I Started Sooner” Moment!
      </h2>

      <div className="comparison-boxes">
        {/* Left Side - Skip Webinar */}
        <div className="box red-box">
          <h3>❌ What Happens If You Skip This Webinar?</h3>
          <ul>
            <li>❌ Keep guessing what really works while others start earning.</li>
            <li>❌ Keep wasting hours watching random YouTube videos that confuse you more.</li>
            <li>❌ Stay stuck wondering “Is this even for me?” instead of taking your first win.</li>
            <li>❌ Watch others share their results while you’re still planning your “perfect start.”</li>
            <li>
              ❌ And the worst part? For just ₹49, you’ll lose access to the roadmap that could’ve built your freedom.
            </li>
          </ul>
        </div>

        {/* Right Side - Join Webinar */}
        <div className="box green-box">
          <h3>✅ What Happens When You Join This Webinar?</h3>
          <ul>
            <li>✅ Discover a clear, step-by-step roadmap trusted by 7-figure store owners.</li>
            <li>✅ Learn how to find & launch winning products without months of testing.</li>
            <li>
              ✅ See how our past attendees are now earning real profits — because they learned exactly what to do, and what to avoid.
            </li>
            <li>✅ Find out what’s been stopping your dropshipping success.</li>
            <li>✅ Understand the ads that actually convert — not just bring clicks.</li>
          </ul>
        </div>
      </div>

      <p className="comparison-footer">
        ⚡ Spots are filling up fast — This isn’t just another webinar. It’s your chance to finally stop guessing and start building something real.
        <br />
        👉 <span className="highlight-text">Enroll now and make your “someday” happen today.</span>
      </p>

      <button className="cta-button" onClick={() => window.open("https://live.skillsfavour.com/payment-link/68fc8be867ee3b46ba6a357c", "_blank")}>Enroll Now For Just ₹49!</button>
    </div>
  );
};

export default Third;
