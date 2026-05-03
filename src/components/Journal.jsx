import React from "react";
import Reveal from "./Reveal";
import MotionGlyphs from "./MotionGlyphs";

const Journal = () => {
  const articles = [
    {
      label: "Buying Guide",
      title: "How to choose storage without overpaying",
      text: "A practical way to think about photos, project files, local apps, and cloud backup before picking a device.",
      date: "May 2026",
    },
    {
      label: "Setup",
      title: "The first hour with a new laptop",
      text: "Backups, passwords, display settings, notifications, and the small tweaks that make a machine feel yours.",
      date: "April 2026",
    },
    {
      label: "Workflow",
      title: "A clean desk kit for hybrid work",
      text: "What matters more than raw specs when your setup needs to handle calls, writing, design, and focus blocks.",
      date: "March 2026",
    },
  ];

  return (
    <main className="journalPage">
      <section className="pageHero journalHero">
        <p>Journal</p>
        <h1>Clear notes for smarter upgrades.</h1>
        <span>
          Guides, setup thinking, and buying advice written like someone
          actually wants you to make a good decision.
        </span>
      </section>

      <Reveal className="journalGrid" variant="slide">
        <MotionGlyphs variant="journal" />
        {articles.map((article) => (
          <article className="journalCard" key={article.title}>
            <p>{article.label}</p>
            <h2>{article.title}</h2>
            <span>{article.text}</span>
            <small>{article.date}</small>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default Journal;
