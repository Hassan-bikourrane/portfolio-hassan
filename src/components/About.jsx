import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function About({ t }) {
  return (
    <section className="about-section section-wrap section-pad" id="about">
      <div className="section-kicker">
        <span>01 / {t.aboutK}</span>
        <span>{t.aboutSide}</span>
      </div>

      <div className="about-grid">
        <h2>{t.aboutTitle}</h2>

        <div className="about-body">
          <p>{t.aboutText}</p>

          <a href={profile.links.behance} target="_blank" rel="noreferrer" className="under-link">
            {t.closerLook}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="quote-strip">
        <span>“</span>
        <p>{t.quote}</p>
        <span>{t.quoteNote}</span>
      </div>
    </section>
  );
}
