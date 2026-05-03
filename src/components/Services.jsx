import React from "react";
import { FiCalendar, FiHeadphones, FiHome, FiRefreshCcw, FiShield, FiTool } from "react-icons/fi";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const Services = () => {
  const services = [
    {
      icon: <FiHeadphones />,
      title: "Shop with an expert",
      text: "A 20-minute buying session for choosing specs, accessories, and setup options.",
    },
    {
      icon: <FiTool />,
      title: "Device setup",
      text: "Migration checklist, cloud sync, app install, and first-week configuration.",
    },
    {
      icon: <FiShield />,
      title: "Protection plans",
      text: "Clear care options for accidental damage, support, and priority replacement.",
    },
    {
      icon: <FiHome />,
      title: "Studio pickup",
      text: "Reserve online, inspect in person, and leave with accessories already matched.",
    },
    {
      icon: <FiRefreshCcw />,
      title: "Repair direction",
      text: "Triage, warranty checks, and next-step guidance for owned devices.",
    },
    {
      icon: <FiCalendar />,
      title: "Business buying",
      text: "Device planning for teams, classrooms, studios, and small offices.",
    },
  ];

  return (
    <main className="servicesPage">
      <section className="pageHero servicesHero">
        <p>Services</p>
        <h1>The support layer serious stores make easy to find.</h1>
        <span>
          Buying premium tech is easier when setup, care, pickup, repair, and
          business support are visible before checkout.
        </span>
      </section>

      <Reveal className="servicesGrid" variant="rise">
        <MotionGlyphs variant="services" />
        {services.map((service) => (
          <article key={service.title}>
            <span>{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default Services;
