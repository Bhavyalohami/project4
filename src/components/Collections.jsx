import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiCamera, FiCoffee, FiMap } from "react-icons/fi";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";
import deskImage from "../assets/collection-desk.svg";
import creatorImage from "../assets/collection-creator.svg";
import travelImage from "../assets/collection-travel.svg";
import everydayImage from "../assets/collection-everyday.svg";

const Collections = () => {
  const collections = [
    {
      icon: <FiBriefcase />,
      title: "Desk Power Kit",
      text: "MacBook Air, Studio Display, and audio for a quiet workstation that feels ready every morning.",
      image: deskImage,
    },
    {
      icon: <FiCamera />,
      title: "Creator Carry",
      text: "A mobile kit for shooting, editing, reviewing, and sharing without dragging a full studio around.",
      image: creatorImage,
    },
    {
      icon: <FiMap />,
      title: "Travel Light",
      text: "Long-battery devices, smart audio, and compact accessories for airport days and hotel desks.",
      image: travelImage,
    },
    {
      icon: <FiCoffee />,
      title: "Everyday Essentials",
      text: "The dependable upgrades people notice daily: phone, watch, earbuds, and protective extras.",
      image: everydayImage,
    },
  ];

  return (
    <main className="collectionsPage">
      <section className="pageHero collectionsHero">
        <p>Collections</p>
        <h1>Bundles shaped around real routines.</h1>
        <span>
          Instead of pushing random add-ons, LumaGear groups devices around the
          way people work, move, create, and unwind.
        </span>
      </section>

      <Reveal className="collectionGrid" variant="rise">
        <MotionGlyphs variant="collections" />
        {collections.map((item) => (
          <article className="collectionCard" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <span>{item.icon}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link to="/">Shop matching gear <FiArrowRight /></Link>
            </div>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default Collections;
