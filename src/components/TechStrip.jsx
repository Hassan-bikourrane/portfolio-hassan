import { techStack } from "../data/portfolio.js";

function TechItems() {
  return techStack.map(tech => (
    <div className="tech-item" key={tech.name}>
      <img
        src={tech.icon}
        alt=""
        width="32"
        height="32"
        className={tech.invertOnDark ? "icon-invert" : undefined}
      />
      <span>{tech.name}</span>
    </div>
  ));
}

// Two identical rows side by side: the track slides by exactly one row, so the loop is seamless.
export default function TechStrip({ t }) {
  return (
    <section className="tech-marquee" aria-label={t.techLabel}>
      <div className="marquee-track">
        <div className="marquee-content">
          <TechItems />
        </div>
        <div className="marquee-content" aria-hidden="true">
          <TechItems />
        </div>
      </div>
    </section>
  );
}
