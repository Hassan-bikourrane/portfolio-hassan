import { content } from "../data/portfolio.js";

export default function Journey({ t, lang }) {
  const journey = content[lang].journey;

  return (
    <section className="journey-section section-wrap section-pad" id="journey">
      <div className="section-kicker">
        <span>04 / {t.journeyK}</span>
        <span>{t.journeySide}</span>
      </div>

      <div className="section-heading">
        <h2>{t.journeyTitle}</h2>
        <p>{t.journeyText}</p>
      </div>

      <div className="timeline">
        {journey.map((item, i) => (
          <article className="timeline-item" key={i}>
            <div className="timeline-period">{item.period}</div>

            <div className="timeline-marker">
              <span />
            </div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.description}</p>
            </div>

            <span className="timeline-number">0{i + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
