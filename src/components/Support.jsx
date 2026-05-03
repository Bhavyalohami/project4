import React from "react";
import { FiClock, FiMessageCircle, FiRefreshCcw, FiTool } from "react-icons/fi";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const Support = () => {
  const supportOptions = [
    {
      icon: <FiMessageCircle />,
      title: "Buying guidance",
      text: "Compare devices, pick storage, and choose bundles based on how the gear will actually be used.",
    },
    {
      icon: <FiTool />,
      title: "Setup help",
      text: "Get starter checklists for transfers, accessories, backups, and day-one protection.",
    },
    {
      icon: <FiRefreshCcw />,
      title: "Returns",
      text: "Simple return windows and clear condition checks keep the process predictable.",
    },
    {
      icon: <FiClock />,
      title: "Order updates",
      text: "Track order status and delivery timing without hunting through inboxes.",
    },
  ];

  return (
    <main className="supportPage">
      <section className="pageHero supportHero">
        <p>Support</p>
        <h1>Helpful before the sale, useful after it.</h1>
        <span>
          Support is organized around common shopping moments: choosing,
          receiving, setting up, and protecting new tech.
        </span>
      </section>

      <Reveal className="supportGrid" variant="rise">
        <MotionGlyphs variant="support" />
        {supportOptions.map((item) => (
          <article key={item.title} className="supportCard">
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </Reveal>

      <Reveal className="contactBand" variant="tilt">
        <div>
          <p className="sectionEyebrow">Need a human?</p>
          <h2>Tell us what you are building around your tech.</h2>
        </div>
        <a href="mailto:support@lumagear.example">support@lumagear.example</a>
      </Reveal>
    </main>
  );
};

export default Support;
