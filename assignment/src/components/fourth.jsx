import React from "react";
import "./fourth.css";

const Fourth = () => {
  return (
    <section className="learn-section">
      <div className="learn-container">
        <h2 className="learn-heading">
          What You’ll Learn Inside This{" "}
          <span className="highlight">Dropshipping Webinar</span>
        </h2>
        <p className="learn-subheading">
          Discover proven systems that turn beginners into profitable store owners — fast.
        </p>

        <div className="learn-grid">
          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>The “Winning Product” Secret</h3>
            <ul>
              <li>Discover untapped 6-figure niches fast.</li>
              <li>Use my 3-step formula to pick daily winners.</li>
            </ul>
          </div>

          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>Build a Store That Prints Sales</h3>
            <ul>
              <li>Copy my proven Shopify setup that converts.</li>
              <li>Learn design tricks that make people click Buy Now.</li>
            </ul>
          </div>

          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>Master Ads That Bring Real Cash</h3>
            <ul>
              <li>Unlock ad formulas for Facebook and others.</li>
              <li>Write ad copies that make people pull out their cards.</li>
            </ul>
          </div>

          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>Automate & Scale — Earn While You Sleep</h3>
            <ul>
              <li>Use top automation tools.</li>
              <li>Delegate repetitive work affordably.</li>
            </ul>
          </div>

          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>Avoid the 5 Costly Mistakes Most Beginners Make</h3>
            <ul>
              <li>Budget your first price wisely.</li>
              <li>Use my cheat codes to grow without wasting cash.</li>
            </ul>
          </div>

          <div className="learn-card">
            <div className="icon-circle">✅</div>
            <h3>Launch Your Store in 7 Days</h3>
            <ul>
              <li>Clear 7-day action plan.</li>
              <li>Connect everything — checklist + templates ready to go live.</li>
            </ul>
          </div>
        </div>

        <button className="learn-btn">Yes! I'm in for the Webinar</button>
      </div>
    </section>
  );
};

export default Fourth;
