import React from "react";
import "./policy.css";
import Tenth from "./tenth";

export default function Refund() {
  return (
    <div>
    <div className="policy-container">
      <h1 className="policy-title">Refund and Cancellation Policy</h1>

      <p>
        <strong>Non-Refundable Payments:</strong> All payments for admission, course registration, or
        educational services are non-refundable and non-transferable.
      </p>

      <p>
        <strong>Review Before Payment:</strong> Students are encouraged to review course details carefully
        before making any payment.
      </p>

      <p>
        <strong>Exceptional Cases:</strong> Refunds may be considered in cases of duplicate transactions
        or technical errors, subject to verification and approval by our administration team.
      </p>

      <p>
        <strong>Request Timeline:</strong> Refund or cancellation requests must be made within 7 working
        days of the transaction.
      </p>

      <p>
        <strong>How to Request:</strong> Contact us at{" "}
        <span className="highlight">support@skillsfavour.com</span> or{" "}
        <span className="highlight">+91 7416765656</span>.
      </p>

      <p>
        <strong>Final Decision:</strong> The management of Skills Favour holds the final authority on all
        refund and cancellation decisions.
      </p>
    </div>
    <Tenth />
    </div>
  );
}
