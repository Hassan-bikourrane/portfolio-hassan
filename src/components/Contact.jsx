import { ArrowUpRight, Asterisk, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio.js";
import ContactForm from "./ContactForm.jsx";

export default function Contact({ t }) {
  return (
    <section className="contact-section section-wrap section-pad" id="contact">
      <div className="section-kicker">
        <span>05 / {t.contactK}</span>
        <span>{t.contactSide}</span>
      </div>

      <div className="contact-grid">
        <div className="contact-copy">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>

          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} />
              {profile.email}
              <ArrowUpRight size={14} />
            </a>

            <span>
              <MapPin size={17} />
              {profile.location}
            </span>
          </div>

          <div className="social-links">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a href={profile.links.behance} target="_blank" rel="noreferrer">
              <Asterisk size={17} />
              Behance
              <ArrowUpRight size={14} />
            </a>

            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <ContactForm t={t} />
      </div>
    </section>
  );
}
