import { useEffect, useState } from "react";
import { copy, LANGUAGES } from "./data/translations.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import TechStrip from "./components/TechStrip.jsx";
import Work from "./components/Work.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// localStorage can throw (private mode, blocked storage), so wrap it.
function readStored(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

export default function App() {
  const [theme, setTheme] = useState(() => readStored("hassan-theme", ["dark", "light"], "dark"));
  const [lang, setLang] = useState(() => readStored("hassan-lang", LANGUAGES, "en"));

  const t = copy[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeStored("hassan-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    writeStored("hassan-lang", lang);
  }, [lang, rtl]);

  const nextLanguage = () =>
    setLang(current => LANGUAGES[(LANGUAGES.indexOf(current) + 1) % LANGUAGES.length]);
  const toggleTheme = () => setTheme(current => (current === "dark" ? "light" : "dark"));

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />

      <Header
        t={t}
        lang={lang}
        theme={theme}
        onLanguage={nextLanguage}
        onTheme={toggleTheme}
      />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Expertise t={t} lang={lang} />
        <TechStrip t={t} />
        <Work t={t} lang={lang} />
        <Journey t={t} lang={lang} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
