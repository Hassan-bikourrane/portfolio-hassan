import { ArrowUpRight } from "lucide-react";
import { projectMeta, profile, content } from "../data/portfolio.js";

export default function Work({ t, lang }) {
  const projects = projectMeta.map(meta => ({ ...meta, ...content[lang].projects[meta.slug] }));

  return (
    <section className="work-section section-wrap section-pad" id="work">
      <div className="section-kicker">
        <span>03 / {t.workK}</span>
        <span>{t.workSide}</span>
      </div>

      <div className="section-heading work-heading">
        <div>
          <h2>{t.workTitle}</h2>
          <p>{t.workText}</p>
        </div>

        <span className="project-count">
          0{projects.length}
          <small>{t.projectsLabel}</small>
        </span>
      </div>

      <div className="project-grid">
        {projects.map((project, i) => (
          <article className={`project-card project-${i + 1}`} key={project.slug}>
            <a
              className="project-image"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.view}: ${project.title}`}
            >
              <img src={project.cover} alt={`${project.title} — ${t.previewAlt}`} loading="lazy" />

              <span className="image-index">
                0{i + 1} / 0{projects.length}
              </span>

              <span className="image-arrow">
                <ArrowUpRight />
              </span>
            </a>

            <div className="project-info">
              <div>
                <span className="project-category">
                  {project.category} · {project.year}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <a
                className="circle-link"
                href={profile.links.behance}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.view}: ${project.title}`}
              >
                <ArrowUpRight size={19} />
              </a>
            </div>

            <div className="tag-list project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
