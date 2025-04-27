import React from "react";
import "../css/FAQ.css"; // Import styles

const FAQHeader: React.FC<{ pageName: string }> = ({ pageName }) => {
  return (
    <div className="faq-container">
      <div className="faq-text-section">
        <h2>{pageName}</h2>
      </div>
    </div>
  );
};

export default FAQHeader;
