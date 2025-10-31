import React from "react";
import "./terms.css";
import Tenth from "./tenth.jsx";

export default function Terms() {
  return (
    <div>
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>

      <h2 className="terms-subtitle">SIR G Group – Terms & Conditions</h2>

      <p><strong>Acceptance:</strong> By accessing and using our website, you agree to comply with these terms and conditions.</p>

      <p><strong>Content Ownership:</strong> All content, materials, and information on this site are owned by Waghshir EduPro and are for personal and educational use only.</p>

      <p><strong>Restrictions:</strong> Users may not copy, reproduce, distribute, or modify any content without prior written consent.</p>

      <p><strong>Accuracy & Liability:</strong> We strive for accuracy, but Waghshir EduPro is not liable for errors, technical issues, or any losses arising from website use.</p>

      <p><strong>Updates:</strong> We reserve the right to update or change terms at any time without prior notice. Continued use of the website implies acceptance of updated terms.</p>

      <p>
        <strong>Contact:</strong> For queries, reach us at{" "}
        <a href="mailto:support@skillsfavour.com">support@skillsfavour.com</a> or{" "}
        <a href="tel:+917416765656">+91 7416765656</a>.
      </p>
      
    </div>
    <Tenth />
    </div>
  );
}
