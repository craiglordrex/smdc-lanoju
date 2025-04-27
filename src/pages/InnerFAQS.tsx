import React from "react";
import { useLocation } from "react-router-dom";
import Crumbs from "../components/Crumbs";
import Footer from "../components/Footer";
import FAQHeader from "../sections/FAQHeader";
import InnerFAQSBody from "../sections/InnerFAQSBody";

const InnerFAQS: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const question = queryParams.get("question");

  return (
    <div>
      <Crumbs pageName="FAQs" title={title || "Question"} />
      <FAQHeader pageName={title || "Question"} />
      <InnerFAQSBody title={title || "Question"} question={question || ""} />
      <Footer />
    </div>
  );
};

export default InnerFAQS;
