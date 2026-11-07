import { useState } from "react";
import { Menu, X, Sun, Moon, Globe2 } from "lucide-react";

const SECTION_IDS = ["about", "expertise", "work", "journey", "contact"];

export default function Header({ t, lang, theme, onLanguage, onTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <a className="wordmark wordmark-icon" href="#home" aria-label={t.homeLabel}>
        <img src="/images/hero-icon.svg" alt={t.iconAlt} />
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.navLabel}>
        {t.nav.map((label, i) => (
          <a key={SECTION_IDS[i]} href={`#${SECTION_IDS[i]}`} onClick={closeMenu}>
            {label}
            <span>0{i + 1}</span>
          </a>
        ))}
      </nav>

      <div className="top-actions">
        <button type="button" className="icon-button" onClick={onLanguage} aria-label={t.langLabel}>
          <Globe2 size={16} />
          <small>{lang.toUpperCase()}</small>
        </button>

        <button type="button" className="icon-button" onClick={onTheme} aria-label={t.themeLabel}>
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button
          type="button"
          className="icon-button mobile-menu"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={t.menuLabel}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
