export default function Footer({ t }) {
  return (
    <footer className="footer section-wrap">
      <a className="wordmark" href="#home" aria-label="Hassan">
        H<span>.</span>
      </a>

      <span>{t.footer}</span>
      <span>© {new Date().getFullYear()} HASSAN</span>

      <a href="#home" className="back-top">
        {t.backTop}
      </a>
    </footer>
  );
}
