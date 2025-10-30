import React from "react";
import "./seventh.css";

const Seventh = () => {
  const items = [
    {
      number: "1",
      title: "Beginner with NO Experience",
      text: "If you are complete new beginner then you need a low-risk, step-by-step blueprint to start online.",
    },
    {
      number: "2",
      title: "9–5 Income Seeker",
      text: "You want a profitable side income without quitting your job.",
    },
    {
      number: "3",
      title: "Frustrated Ex-Dropshipper",
      text: "You've tried dropshipping before but were burned by hidden RTO charges, unreliable suppliers, slow shipping times.",
    },
    {
      number: "4",
      title: "Existing E-commerce Seller",
      text: "You already sell online but want to test new product niches rapidly without holding inventory.",
    },
    {
      number: "5",
      title: "Anyone Tired of Manual Overload",
      text: "You're sick of spending hours on tedious tasks like tracking orders, managing customer inquiries related to logistics.",
    },
    {
      number: "6",
      title: "Seeking Financial Freedom",
      text: "You dream of a business that offers location independence, allows you to work on your own terms.",
    },
  ];

  return (
    <section className="who-should-join">
      <h1>Who Should Join</h1>
      <p>Give your local accounting carrer a kick Start.</p>

      <div className="join-grid">
        {items.map((item) => (
          <div className="join-card" key={item.number}>
            <div className="number-circle">{item.number}</div>
            <div className="join-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="join-btn">Yes! I'm in for the Webinar</button>
    </section>
  );
};

export default Seventh;
