// Static portfolio content (replaces the old Express/MongoDB API).
// Edit this file to update your personal details, links and projects.

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjyydrea";

export const profile = {
  name: "Hassan",
  role: "Graphic Designer & Web Developer",
  location: "Casablanca, Morocco",
  email: "hassanbikourrane.hb@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/hassan-bikourrane/",
    behance: "https://www.behance.net/hassanbikourr",
    github: "https://github.com/Hassan-bikourrane"
  }
};

// Scrolling strip of software and technology icons shown under the skills section.
// Icons live in public/images/tech/. `invertOnDark` flips black logos to white in dark mode.
export const techStack = [
  { name: "Illustrator", icon: "/images/tech/illustrator.png" },
  { name: "Photoshop", icon: "/images/tech/photoshop.png" },
  { name: "InDesign", icon: "/images/tech/indesign.png" },
  { name: "HTML5", icon: "/images/tech/html5.png" },
  { name: "CSS3", icon: "/images/tech/css3.png" },
  { name: "JavaScript", icon: "/images/tech/javascript.png" },
  { name: "React", icon: "/images/tech/react.png" },
  { name: "Node.js", icon: "/images/tech/nodejs.png" },
  { name: "Express.js", icon: "/images/tech/express.png", invertOnDark: true },
  { name: "MongoDB", icon: "/images/tech/mongodb.png" }
];

// Language-independent project data. Titles, descriptions and tags are in `content` below.
export const projectMeta = [
  {
    slug: "peak-wave-adventures",
    year: "2026",
    cover: "/images/logo.jpg",
    link: profile.links.behance
  },
  {
    slug: "poster-print-design",
    year: "2025–2026",
    cover: "/images/kanye.jpg",
    link: profile.links.behance
  },
  {
    slug: "digital-portfolio",
    year: "2026",
    // Original cover from the MERN version (hosted externally).
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    link: profile.links.github
  }
];

// Text content per language. English is the original; French and Arabic are translations of it.
export const content = {
  en: {
    skills: [
      { title: "Graphic Design", description: "Visual identity, posters, layouts and print design.", tools: ["Illustrator", "Photoshop", "InDesign"] },
      { title: "UI / UX Design", description: "User interfaces, wireframes and digital experiences.", tools: ["Figma", "Wireframing", "Prototyping"] },
      { title: "Front-End Development", description: "Building responsive and interactive digital experiences.", tools: ["HTML", "CSS", "JavaScript", "React"] },
      { title: "Back-End Development", description: "Server-side development, APIs and database management.", tools: ["Node.js", "Express", "MongoDB"] },
      { title: "Creative Thinking", description: "Concept development, problem solving and visual research.", tools: ["Research", "Concepts", "Creativity"] }
    ],
    journey: [
      { period: "2024 — 2026", title: "DTS in Infographie", place: "OFPPT — ISAG Derb Sultan", description: "Training in graphic design, visual communication and professional design software." },
      { period: "2025 — 2026", title: "Graphic Design Internships", place: "Graphics & SebraPress", description: "Worked on posters, flyers, business cards, large-format printing and print preparation." },
      { period: "2026 — Present", title: "Full-Stack Web Development", place: "MERN Stack Training", description: "Learning modern web development with React, Node.js, Express and MongoDB." }
    ],
    projects: {
      "peak-wave-adventures": { title: "Peak & Wave Adventures", category: "Branding & Editorial", description: "A visual identity and editorial project inspired by Moroccan nature, exploration and adventure.", tags: ["Brand Identity", "Editorial", "Art Direction"] },
      "poster-print-design": { title: "Poster & Print Design", category: "Graphic Design", description: "A collection of visual compositions, posters and promotional designs exploring typography, image and contrast.", tags: ["Poster", "Typography", "Print"] },
      "digital-portfolio": { title: "Digital Portfolio", category: "Web Design", description: "A responsive personal portfolio bringing together visual design, interaction and front-end development.", tags: ["React", "UI Design", "Development"] }
    }
  },

  fr: {
    skills: [
      { title: "Design graphique", description: "Identité visuelle, affiches, mises en page et design print.", tools: ["Illustrator", "Photoshop", "InDesign"] },
      { title: "Design UI / UX", description: "Interfaces utilisateur, wireframes et expériences numériques.", tools: ["Figma", "Wireframing", "Prototypage"] },
      { title: "Développement front-end", description: "Création d'expériences numériques responsives et interactives.", tools: ["HTML", "CSS", "JavaScript", "React"] },
      { title: "Développement back-end", description: "Développement côté serveur, API et gestion de bases de données.", tools: ["Node.js", "Express", "MongoDB"] },
      { title: "Pensée créative", description: "Développement de concepts, résolution de problèmes et recherche visuelle.", tools: ["Recherche", "Concepts", "Créativité"] }
    ],
    journey: [
      { period: "2024 — 2026", title: "DTS en Infographie", place: "OFPPT — ISAG Derb Sultan", description: "Formation en design graphique, communication visuelle et logiciels de design professionnels." },
      { period: "2025 — 2026", title: "Stages en design graphique", place: "Graphics & SebraPress", description: "Travail sur des affiches, flyers, cartes de visite, impression grand format et préparation à l'impression." },
      { period: "2026 — Présent", title: "Développement web Full-Stack", place: "Formation MERN Stack", description: "Apprentissage du développement web moderne avec React, Node.js, Express et MongoDB." }
    ],
    projects: {
      "peak-wave-adventures": { title: "Peak & Wave Adventures", category: "Branding & Édition", description: "Un projet d'identité visuelle et d'édition inspiré par la nature marocaine, l'exploration et l'aventure.", tags: ["Identité de marque", "Édition", "Direction artistique"] },
      "poster-print-design": { title: "Poster & Print Design", category: "Design graphique", description: "Une collection de compositions visuelles, d'affiches et de designs promotionnels explorant la typographie, l'image et le contraste.", tags: ["Affiche", "Typographie", "Print"] },
      "digital-portfolio": { title: "Portfolio numérique", category: "Web design", description: "Un portfolio personnel responsive qui réunit design visuel, interaction et développement front-end.", tags: ["React", "Design UI", "Développement"] }
    }
  },

  ar: {
    skills: [
      { title: "التصميم الجرافيكي", description: "الهوية البصرية والملصقات والتخطيطات وتصميم المطبوعات.", tools: ["Illustrator", "Photoshop", "InDesign"] },
      { title: "تصميم واجهات وتجربة المستخدم", description: "واجهات المستخدم والمخططات الأولية والتجارب الرقمية.", tools: ["Figma", "المخططات الأولية", "النماذج التفاعلية"] },
      { title: "تطوير الواجهات الأمامية", description: "بناء تجارب رقمية متجاوبة وتفاعلية.", tools: ["HTML", "CSS", "JavaScript", "React"] },
      { title: "تطوير الواجهات الخلفية", description: "التطوير من جهة الخادم وواجهات البرمجة وإدارة قواعد البيانات.", tools: ["Node.js", "Express", "MongoDB"] },
      { title: "التفكير الإبداعي", description: "تطوير الأفكار وحل المشكلات والبحث البصري.", tools: ["البحث", "الأفكار", "الإبداع"] }
    ],
    journey: [
      { period: "2024 — 2026", title: "دبلوم تقني متخصص في الإنفوغرافيا", place: "OFPPT — ISAG Derb Sultan", description: "تكوين في التصميم الجرافيكي والتواصل البصري وبرامج التصميم الاحترافية." },
      { period: "2025 — 2026", title: "تدريبات في التصميم الجرافيكي", place: "Graphics & SebraPress", description: "العمل على الملصقات والمطويات وبطاقات الأعمال والطباعة بالحجم الكبير وتحضير الملفات للطباعة." },
      { period: "2026 — حتى الآن", title: "تطوير الويب المتكامل", place: "تكوين MERN Stack", description: "تعلم تطوير الويب الحديث باستخدام React وNode.js وExpress وMongoDB." }
    ],
    projects: {
      "peak-wave-adventures": { title: "Peak & Wave Adventures", category: "الهوية البصرية والنشر", description: "مشروع هوية بصرية ونشر مستوحى من الطبيعة المغربية والاستكشاف والمغامرة.", tags: ["الهوية البصرية", "النشر", "الإخراج الفني"] },
      "poster-print-design": { title: "Poster & Print Design", category: "التصميم الجرافيكي", description: "مجموعة من التركيبات البصرية والملصقات والتصاميم الترويجية تستكشف الطباعة والصورة والتباين.", tags: ["ملصق", "الطباعة والخطوط", "مطبوعات"] },
      "digital-portfolio": { title: "المعرض الرقمي", category: "تصميم الويب", description: "معرض أعمال شخصي متجاوب يجمع بين التصميم البصري والتفاعل وتطوير الواجهات الأمامية.", tags: ["React", "تصميم الواجهات", "التطوير"] }
    }
  }
};
