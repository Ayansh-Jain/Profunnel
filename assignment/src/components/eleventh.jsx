import React, { useEffect, useState } from "react";
import "./elevent.css";

export default function Eleventh() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 600) setShowPopup(true);
      else setShowPopup(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`popup-container ${showPopup ? "visible" : ""}`}>
      <div className="popup-inner">
        <p className="popup-title">TURN ₹49 INTO YOUR DROPSHIPPING SUCCESS!</p>
        <button
  className="popup-btn"
  onClick={() => window.open("https://live.skillsfavour.com/payment-link/68fc8be867ee3b46ba6a357c", "_blank")}
>
  Enroll Now For Just ₹49!
</button>
      </div>
    </div>
  );
}
