import { Palette, Code2, Layers3, Sparkles } from "lucide-react";
import { content } from "../data/portfolio.js";

// One icon per skill card, in the same order as the skills list.
const icons = [Palette, Layers3, Code2, Code2, Sparkles];

export default function Expertise({ t, lang }) {
  const skills = content[lang].skills;

  return (
    <section className="expertise-section section-wrap section-pad" id="expertise">
      <div className="section-kicker">
        <span>02 / {t.expertiseK}</span>
        <span>{t.expertiseSide}</span>
      </div>

      <div className="section-heading">
        <h2>{t.expertiseTitle}</h2>
        <p>{t.expertiseText}</p>
      </div>

      <div className="skill-grid">
        {skills.map((skill, i) => {
          const Icon = icons[i] || Sparkles;

          return (
            <article className="skill-card" key={i}>
              <div className="skill-card-top">
                <span>0{i + 1}</span>
                <Icon size={22} />
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="tag-list">
                {skill.tools.map(tool => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
