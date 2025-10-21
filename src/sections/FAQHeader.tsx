import React from "react";
import "../css/FAQ.css";

const FAQHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="faq-container">
      {/* Right Section - Text */}
      <div className="faq-text-section">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default FAQHeader;
