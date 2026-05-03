import React from "react";
import { Link } from "react-router-dom";
import { FiCreditCard, FiHeadphones, FiShield, FiTruck } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { label: "Collection", to: "/" },
        { label: "Deals", to: "/deals" },
        { label: "Bundles", to: "/collections" },
        { label: "Compare", to: "/compare" },
        { label: "Trade-In", to: "/trade-in" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Journal", to: "/journal" },
        { label: "Services", to: "/services" },
        { label: "Support", to: "/support" },
      ],
    },
  ];

  return (
    <footer className="siteFooter">
      <section className="footerPromise">
        <article>
          <FiTruck />
          <span>Free shipping over $1,000</span>
        </article>
        <article>
          <FiShield />
          <span>Verified sourcing</span>
        </article>
        <article>
          <FiHeadphones />
          <span>Setup support</span>
        </article>
        <article>
          <FiCreditCard />
          <span>Secure checkout</span>
        </article>
      </section>

      <section className="footerMain">
        <div className="footerBrand">
          <Link to="/" className="brandMark">
            <img src={logo} alt="LumaGear" />
          </Link>
          <p>
            Premium tech, thoughtfully curated for focused work, creative flow,
            travel days, and calm everyday upgrades.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div className="footerColumn" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((item) => (
              <Link key={item.label} to={item.to}>{item.label}</Link>
            ))}
          </div>
        ))}

        <div className="footerColumn">
          <h3>Visit</h3>
          <p>LumaGear Studio</p>
          <p>14 Market Lane, San Francisco</p>
          <p>Mon-Sat, 10 AM-7 PM</p>
        </div>
      </section>

      <section className="footerBottom">
        <p>(c) 2026 LumaGear. Crafted for better buying decisions.</p>
        <div>
          <span>Returns</span>
          <span>Warranty</span>
          <span>Privacy</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
