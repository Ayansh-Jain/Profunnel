import React, { useState } from "react";
import "./ninth.css";

const Ninth = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What makes a great dropshipper?",
      answer:
        "A great dropshipper understands market demand, builds strong supplier relationships, and leverages automation to scale effortlessly.",
    },
    {
      question: "How is this different from free YouTube videos?",
      answer:
        "Our program provides structured, step-by-step guidance with proven systems, not scattered information like free videos.",
    },
    {
      question: "Do I need prior experience to start dropshipping?",
      answer:
        "No prior experience is needed — our system walks you through everything from setup to scaling.",
    },
    {
      question: "How much investment is required to start?",
      answer:
        "You can start with a minimal budget, focusing on low-risk product testing and gradual scaling.",
    },
    {
      question: "Can I do dropshipping part-time?",
      answer:
        "Yes! You can manage and grow your business alongside your regular job or studies.",
    },
    {
      question: "Will I get any support after the webinar?",
      answer:
        "Yes, we provide dedicated post-webinar support to help you implement what you learn effectively.",
    },
    {
      question: "Will this webinar help me find winning products?",
      answer:
        "Absolutely! You’ll learn proven techniques to identify products that sell consistently.",
    },
    {
      question: "Is this really possible for me?",
      answer:
        "Yes! With the right system and mindset, anyone can build a successful dropshipping business.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1>
        Frequently Asked <span>Questions!</span>
      </h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
                opacity: activeIndex === index ? "1" : "0",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ninth;
