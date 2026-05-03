import React from "react";
import { FiAward, FiPackage, FiShield, FiTruck } from "react-icons/fi";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const About = () => {
  const principles = [
    {
      icon: <FiAward />,
      title: "Curated, not crowded",
      text: "Only the devices and accessories we would happily recommend to people we care about.",
    },
    {
      icon: <FiShield />,
      title: "Confidence built in",
      text: "Every order includes verified sourcing, easy returns, and clear warranty guidance.",
    },
    {
      icon: <FiTruck />,
      title: "Fast handoff",
      text: "Popular products ship quickly with tidy tracking and practical delivery updates.",
    },
    {
      icon: <FiPackage />,
      title: "Setup-ready",
      text: "Bundles, accessories, and support are shaped around real desk, travel, and creator workflows.",
    },
  ];

  return (
    <main className="aboutPage">
      <section className="pageHero aboutHero">
        <p>About LumaGear</p>
        <h1>Premium tech shopping with the noise turned down.</h1>
        <span>
          LumaGear is designed for people who want excellent devices without
          digging through endless listings, vague specs, or confusing bundles.
        </span>
      </section>

      <Reveal className="storySection" variant="slide">
        <MotionGlyphs variant="about" />
        <div>
          <p className="sectionEyebrow">Our point of view</p>
          <h2>Buy fewer things. Choose better ones.</h2>
        </div>
        <p>
          The store focuses on high-performing phones, laptops, audio,
          wearables, tablets, and displays. Each product page and cart decision
          is meant to feel calm, visual, and practical, so the shopper can move
          from browsing to checkout with real confidence.
        </p>
      </Reveal>

      <Reveal className="principlesGrid" variant="rise">
        {principles.map((item) => (
          <article key={item.title} className="principleCard">
            <span>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default About;
