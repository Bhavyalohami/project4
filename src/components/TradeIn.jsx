import React from "react";
import { FiCheckCircle, FiRefreshCw, FiSend, FiSmartphone } from "react-icons/fi";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const TradeIn = () => {
  const steps = [
    {
      icon: <FiSmartphone />,
      title: "Tell us what you have",
      text: "Share the model, condition, storage, and included accessories.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Get a fair estimate",
      text: "We price around condition, age, demand, and reuse value.",
    },
    {
      icon: <FiSend />,
      title: "Send or bring it in",
      text: "Use a prepaid mailer or visit the studio for same-day inspection.",
    },
    {
      icon: <FiRefreshCw />,
      title: "Apply credit",
      text: "Put credit toward your new setup or keep it for a future order.",
    },
  ];

  return (
    <main className="tradePage">
      <section className="pageHero tradeHero">
        <p>Trade-In</p>
        <h1>Give older gear a useful second life.</h1>
        <span>
          Trade in eligible phones, tablets, watches, laptops, and audio gear to
          lower the cost of your next upgrade.
        </span>
      </section>

      <Reveal className="tradeSteps" variant="rise">
        <MotionGlyphs variant="trade" />
        {steps.map((step) => (
          <article key={step.title}>
            <span>{step.icon}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="tradeBand" variant="tilt">
        <div>
          <p className="sectionEyebrow">Typical credits</p>
          <h2>Recent phones can often cover accessories, audio, or a meaningful chunk of a laptop upgrade.</h2>
        </div>
        <div className="creditList">
          <p><span>Phones</span><strong>up to $650</strong></p>
          <p><span>Tablets</span><strong>up to $420</strong></p>
          <p><span>Laptops</span><strong>up to $900</strong></p>
        </div>
      </Reveal>
    </main>
  );
};

export default TradeIn;
