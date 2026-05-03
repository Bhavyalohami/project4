import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { formatPrice, productList } from "../data/products";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const Compare = () => {
  const featured = productList.slice(0, 4);

  return (
    <main className="comparePage">
      <section className="pageHero compareHero">
        <p>Compare</p>
        <h1>Make the right choice without opening twelve tabs.</h1>
        <span>
          A practical comparison view for shoppers deciding between device
          types, specs, budgets, and service needs.
        </span>
      </section>

      <Reveal className="compareTableSection" variant="slide">
        <MotionGlyphs variant="compare" />
        <table className="compareTable">
          <thead>
            <tr>
              <th>Product</th>
              <th>Best for</th>
              <th>Key specs</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {featured.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imgSrc} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>{item.category === "Laptop" ? "Work and study" : item.category === "Audio" ? "Focus and travel" : item.category}</td>
                <td>{item.specs.join(" - ")}</td>
                <td>{item.rating} / 5</td>
                <td>{formatPrice(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal className="advisorSection" variant="tilt">
        <div>
          <p className="sectionEyebrow">Advisor notes</p>
          <h2>What matters most by shopper type.</h2>
        </div>
        <div className="advisorGrid">
          {["Battery and weight for travel", "Display and ports for desk work", "Care plan for daily carry", "Trade-in value for upgrades"].map((item) => (
            <article key={item}><FiCheckCircle /><span>{item}</span></article>
          ))}
        </div>
        <Link to="/support">Ask for buying help <FiArrowRight /></Link>
      </Reveal>
    </main>
  );
};

export default Compare;
