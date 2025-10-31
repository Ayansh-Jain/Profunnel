import React from "react";
import "./contact.css";
import Tenth from "./tenth.jsx";

export default function Contact() {
  return (
    <div>
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>

        <p className="contact-intro">
          We’re happy to connect with students, parents, and educators. For questions about our CBSE programs,
          admissions, or educational services, our team is here to assist.
        </p>

        <p className="contact-info">
          <b>Address:</b> Civil Lines, Washim, Maharashtra
        </p>
        <p className="contact-info">
          <b>Phone:</b>{" "}
          <a href="tel:+917416765656" className="highlight">
            +91 7416765656
          </a>
        </p>
        <p className="contact-info">
          <b>Email:</b>{" "}
          <a href="mailto:support@skillsfavour.com" className="highlight">
            support@skillsfavour.com
          </a>
        </p>
        <p className="contact-info">
          <b>Office Hours:</b> Monday to Saturday, 9:00 AM – 6:00 PM (Closed on Sundays)
        </p>

        <p className="contact-end">
          We look forward to supporting your educational journey.
        </p>
      </div>
    </div>
      <Tenth />
      </div>
  );
}
