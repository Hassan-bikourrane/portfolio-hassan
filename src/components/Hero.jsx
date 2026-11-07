import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";

export default function Hero({ t }) {
  const [iconVisible, setIconVisible] = useState(false);

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-meta">
        <span className="status-dot" />
        {t.eyebrow}
        <span className="hero-index">{t.heroIndex}</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="overline">
            <Asterisk size={15} />
            {t.overline}
          </p>

          <h1>
            {t.heroA}
            <br />
            <em>{t.heroB}</em>
            <br />
            {t.heroC}
            <br />
            <em>{t.heroD}</em>
          </h1>

          <p className="hero-intro">{t.intro}</p>

          <div className="hero-buttons">
            <a className="button button-primary" href="#work">
              {t.explore}
              <ArrowDownRight size={17} />
            </a>

            <a className="text-link" href="#contact">
              {t.contact}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Hero portrait with the illustrated icon reveal (hover, focus, or tap on touch screens) */}
        <div className="hero-art">
          <button
            type="button"
            className={`art-frame profile-frame${iconVisible ? " is-active" : ""}`}
            onClick={() => {
              if (window.matchMedia("(hover: none)").matches) {
                setIconVisible(value => !value);
              }
            }}
            aria-label={t.portraitLabel}
            aria-pressed={iconVisible}
          >
            <img src="/images/profile.jpg" alt={t.portraitAlt} className="profile-photo" />
            <span className="profile-shade" aria-hidden="true" />
            <img src="/images/hero-icon.svg" alt="" aria-hidden="true" className="profile-icon" />
          </button>

          <span className="art-caption">{t.caption}</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>{t.index}</span>
        <span>{t.coordinates.replace("  ", "\u00A0 ")}</span>
        <span>{t.scrollHint}</span>
      </div>
    </section>
  );
}
