import React from "react";
import { useInView } from "react-intersection-observer";

const Reveal = ({ as: Tag = "section", children, className = "", delay = 0, variant = "rise", ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0.16,
    triggerOnce: false,
    rootMargin: "-40px 0px",
  });

  return (
    <Tag
      ref={ref}
      className={`${className} revealBlock reveal-${variant} ${inView ? "is-visible" : ""}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
