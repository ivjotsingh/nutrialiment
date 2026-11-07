# NutriAliment by Mansi

A pixel-perfect, fully static single-page website for NutriAliment — the practice of
Mansi Chadha, Clinical & Sports Nutritionist. Built with React 19, TypeScript, Vite
and Tailwind CSS. No backend, no database, no paid infrastructure.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3
- framer-motion (scroll reveals, micro-interactions)
- lenis (smooth momentum scrolling)
- lucide-react (icons)

## Develop

```bash
yarn install   # or: npm install
yarn dev       # or: npm run dev
```

## Build for production

```bash
npm run build   # outputs a fully static site to dist/
```

## Deploy on Cloudflare Pages (free tier)

1. Push the repository root to GitHub.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: **npm run build**
   - Build output directory: **dist**
4. Deploy. Then attach `nutrialiment.in` as a custom domain (DNS + SSL are free).

No root-directory setting, backend service, database, environment variable, Worker,
or Pages Function is required. The application is built entirely from the repository
root and the generated `dist/` directory can also be uploaded directly.

The canonical URLs, sitemap.xml and structured data already point to
https://nutrialiment.in/ — update them in `index.html`, `public/robots.txt`
and `public/sitemap.xml` if the final domain differs.

## Static integrations

- Calendly runs as a public client-side embed and stores booking details in Calendly.
- WhatsApp, Instagram, and email actions use normal external links.
- The contact form opens WhatsApp with the visitor's details and stores nothing locally.

## Replacing the portrait

Swap `public/assets/mansi-hero.jpg` with Mansi's original photo (keep the same
file name, ideally a portrait crop around 880×1170 px) and redeploy.
