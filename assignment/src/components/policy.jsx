import React from "react";
import "./policy.css";
import Tenth from "./tenth.jsx";

export default function Policy() {
  return (
    <div>
    <div className="policy-container">
      <h1 className="policy-title">Privacy Policy</h1>
      <p>
        We value your <strong>privacy</strong> and are committed to protecting your personal information.
      </p>

      <p>
        <strong>Data Collection:</strong> We collect basic details like your name, phone number, and email
        to respond to inquiries and improve our services.
      </p>

      <p>
        <strong>Data Security:</strong> Your information is kept secure and is never shared or sold to
        third parties.
      </p>

      <p>
        <strong>Cookies:</strong> Our website may use cookies to enhance your experience. You can manage
        them through your browser settings.
      </p>

      <p>
        <strong>Contact Us:</strong> For any questions regarding privacy practices, reach us at{" "}
        <span className="highlight">support@skillsfavour.com</span> or{" "}
        <span className="highlight">+91 7416765656</span>.
      </p>
    </div>
    <Tenth/>
    </div>
  );
}
