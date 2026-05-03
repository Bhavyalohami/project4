import React from "react";

const MotionGlyphs = ({ variant = "default" }) => (
  <div className={`motionGlyphs glyphs-${variant}`} aria-hidden="true">
    <svg className="motionGlyph glyphA" viewBox="0 0 180 180" fill="none">
      <path d="M90 15v150M15 90h150M38 38l104 104M142 38 38 142" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <circle cx="90" cy="90" r="38" stroke="currentColor" strokeWidth="7" opacity=".38" />
    </svg>
    <svg className="motionGlyph glyphB" viewBox="0 0 180 180" fill="none">
      <path d="M90 20l22 45 50 7-36 35 9 50-45-24-45 24 9-50-36-35 50-7 22-45Z" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
      <circle cx="90" cy="90" r="16" fill="currentColor" />
    </svg>
    <svg className="motionGlyph glyphC" viewBox="0 0 220 120" fill="none">
      <path d="M12 60c36-45 66-45 90 0s54 45 106 0" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M12 92c36-45 66-45 90 0s54 45 106 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".45" />
    </svg>
  </div>
);

export default MotionGlyphs;
