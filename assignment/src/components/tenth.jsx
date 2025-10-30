import React from "react";
import "./tenth.css";

export default function Tenth() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Terms & Conditions</a> |{" "}
        <a href="#">Privacy Policy</a> |{" "}
        <a href="#">Refund & Cancellation Policy</a> |{" "}
        <a href="#">Shipping Policy</a> |{" "}
        <a href="#">Contact Us</a>
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
