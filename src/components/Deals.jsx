import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiGift, FiPercent, FiRepeat } from "react-icons/fi";
import { bundles, formatPrice, productList } from "../data/products";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const Deals = () => {
  const dealProducts = productList.filter((item) => item.oldPrice);

  return (
    <main className="dealsPage">
      <section className="pageHero dealsHero">
        <p>Deals</p>
        <h1>Better value without the bargain-bin feeling.</h1>
        <span>
          Time-sensitive offers, smart bundles, trade-in boosts, and open-box
          style savings presented clearly so shoppers know what they are getting.
        </span>
      </section>

      <Reveal className="offerGrid" variant="slide">
        <MotionGlyphs variant="deals" />
        <article>
          <FiPercent />
          <h2>Price protection</h2>
          <p>If a LumaGear price drops within 14 days, the difference becomes store credit.</p>
        </article>
        <article>
          <FiRepeat />
          <h2>Trade-in boost</h2>
          <p>Eligible phones, tablets, and laptops can unlock extra credit during upgrade events.</p>
        </article>
        <article>
          <FiGift />
          <h2>Bundle savings</h2>
          <p>Build a complete setup and save on accessories, care, and setup services.</p>
        </article>
        <article>
          <FiClock />
          <h2>Drop calendar</h2>
          <p>Limited inventory, studio-only pickup, and refurbished arrivals update weekly.</p>
        </article>
      </Reveal>

      <Reveal className="bundleSection" variant="rise">
        <div className="sectionHeader">
          <p className="sectionEyebrow">Popular bundles</p>
          <h2>Complete setups priced like someone did the math.</h2>
        </div>
        <div className="bundleGrid">
          {bundles.map((bundle) => (
            <article key={bundle.title}>
              <p>Save {formatPrice(bundle.savings)}</p>
              <h3>{bundle.title}</h3>
              <strong>{formatPrice(bundle.price)}</strong>
              <ul>
                {bundle.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link to="/collections">View bundle <FiArrowRight /></Link>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="markdownDeals" variant="tilt">
        {dealProducts.map((item) => (
          <article key={item.id}>
            <img src={item.imgSrc} alt={item.name} />
            <div>
              <p>{item.badge}</p>
              <h2>{item.name}</h2>
              <span>{formatPrice(item.oldPrice - item.price)} instant savings</span>
            </div>
            <strong>{formatPrice(item.price)}</strong>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default Deals;
