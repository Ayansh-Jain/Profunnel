import React from "react";
import "./shipping.css";
import Tenth from "./tenth.jsx";

export default function Shipping() {
  return (
    <div>
      <div className="policy-container">
        <h2 className="policy-heading">Shipping Policy</h2>
        <p className="policy-text">
          <b>There is no shipping policy</b> because we provide the educational services online.
        </p>
        <p className="policy-text">
          <b>Issues & Assistance:</b> For lost, damaged, or other shipping issues, contact us promptly at{" "}
          <a href="mailto:support@skillsfavour.com" className="highlight">
            support@skillsfavour.com
          </a>{" "}
          or{" "}
          <a href="tel:+917416765656" className="highlight">
            +91 7416765656
          </a>
          , and we will assist you.
        </p>
      </div>
    <Tenth />
    </div>
  );
}
