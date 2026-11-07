# Hassan — Portfolio (React + Vite)

A front-end-only portfolio. No server, no database, no backend terminal.

## Run it

You need Node.js 18 or newer (https://nodejs.org). Then, in this folder:

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).

On Windows PowerShell, if `npm` is blocked, use `npm.cmd install` and `npm.cmd run dev`.

## Build for publishing

```bash
npm run build
```

The finished site is created in the `dist/` folder. Upload that folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages...).
To test the built site locally: `npm run preview`.

## Where to change things

| What | File |
| --- | --- |
| Name, email, social links, project links, project images | `src/data/portfolio.js` |
| Skills, journey and project text (EN / FR / AR) | `src/data/portfolio.js` |
| Interface text (EN / FR / AR) | `src/data/translations.js` |
| Formspree address | `FORMSPREE_ENDPOINT` in `src/data/portfolio.js` |
| Colors, fonts, layout, animations | `src/styles.css` |
| Images and favicons | `public/` (use paths like `/images/profile.jpg`) |

## Contact form

The form sends to Formspree (https://formspree.io/f/xjyydrea). The first time you receive a submission, Formspree may ask you to confirm your email, and the form must be allowed for your domain in your Formspree settings if you restricted it.

## Folder `extras/`

`hero-icon-cropped-preview.png` was in the original ZIP's root. It is not used by the website; keep or delete it.
