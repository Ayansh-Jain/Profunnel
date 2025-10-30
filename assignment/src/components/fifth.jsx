/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fifth.css";

export default function Fifth() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      title: "Stage 1: Discover (Find Your Winners)",
      points: [
        "Spot trending products that people actually love.",
        "Use a proven system to find what sells — no guessing.",
        "Start strong with the right foundation for success.",
      ],
    },
    {
      title: "Stage 2: Launch (Build Your Store)",
      points: [
        "Build a stunning, high-converting store in hours.",
        "Set up automation so your store runs smoothly.",
        "Use simple tools that make launching effortless.",
        "We create a Premium Shopify store for you.",
        "No extra costs — everything you need is included.",
      ],
    },
    {
      title: "Stage 3: Profit (Scale Your Store)",
      points: [
        "Run smart ads that bring consistent daily sales.",
        "Turn one-time buyers into repeat loyal customers.",
        "Scale confidently with tested, repeatable strategies.",
        "Earn even while you sleep — your store never stops working.",
      ],
    },
  ];

  // Calculate the progress percentage
  const progressPercent = ((activeStage - 1) / (stages.length - 1)) * 100;

  return (
    <div className="three-stage-section">
      <h2 className="section-title">
        The <span className="highlight">3 Proven</span> Stages to{" "}
        <span className="highlight">Build Store</span> that{" "}
        <span className="highlight">Sells Itself</span>
      </h2>

      <div className="progress-bar">
        <div className="progress-line"></div>
        <div
          className="progress-line-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>

        {[1, 2, 3].map((num) => (
          <div key={num} className="stage-indicator">
            <div
              onClick={() => setActiveStage(num)}
              className={`circle ${
                activeStage === num
                  ? "active"
                  : activeStage > num
                  ? "completed"
                  : "inactive"
              }`}
            >
              {activeStage > num ? "✓" : num}
            </div>
            <p className="stage-label">Stage {num}</p>
          </div>
        ))}
      </div>

      <div className="stage-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="stage-box"
          >
            <h3 className="stage-title">{stages[activeStage - 1].title}</h3>
            <ul className="stage-points">
              {stages[activeStage - 1].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
