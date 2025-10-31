import React from "react";
import "./tenth.css";
import { Link } from "react-router-dom";

export default function Tenth() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/terms">Terms & Conditions</Link>|{" "}
        <Link to="/privacy">Privacy Policy</Link> |{" "}
        <Link to="/refund">Refund & Cancellation Policy</Link> |{" "}
        <Link to="/shipping">Shipping Policy</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </div>

      <p className="footer-copy">
        Copyright © 2025 <span className="brand">SIR G Group</span> | All Rights
        Reserved
      </p>

      <p className="footer-disclaimer">
        This site is not a part of the Facebook website / Google Ads / Facebook
        Inc / Google Inc. Additionally, This site is NOT endorsed by Facebook /
        Google in any way. FACEBOOK is a trademark of FACEBOOK, Inc. Google Ads
        is a Trademark of Google Inc.
      </p>

      <p className="footer-powered">
        Powered By <span className="brand">MyProFunnels Ventures</span>
      </p>
    </footer>
  );
}
