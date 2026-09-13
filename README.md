# Muhammad Talha Sheikh — Portfolio (React + Vite)

Converted from the original static HTML/CSS/JS site into a componentized React app, same layout and content, same GSAP scroll animations, plus SEO and performance upgrades.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Header/      Sticky nav + mobile menu
    Hero/         Landing intro (GSAP fade/slide-in)
    Stats/        Animated count-up numbers (IntersectionObserver)
    About/        Profile + bio (GSAP fade-in)
    Services/     Data-driven service cards (lazy-loaded chunk)
    Expertise/    Tech stack + orbit rings (lazy-loaded chunk)
    CaseStudy/    Featured case study (lazy-loaded chunk)
    Projects/     Data-driven project cards, click-through to live demos
    Contact/      Controlled contact form
    Footer/       Footer + quick links
  data/           Plain JS arrays powering Services/Expertise/Projects/Stats
  hooks/
    useScrollReveal.js   Lazily imports gsap + ScrollTrigger, replays the
                         original app.js reveal animations per-section
    useCountUp.js        Lightweight count-up animation, no library needed
  seo/SEO.jsx     react-helmet-async wrapper: title, meta description,
                  canonical, Open Graph, Twitter card, Person JSON-LD
public/
  images/         Original project screenshots + profile photo
  robots.txt, sitemap.xml
```

## What changed vs. the original

- **Componentized**: every section is its own `.jsx` + co-located `.css` file instead of one long `index.html`/`style.css`.
- **Data-driven**: services, tech stack, and projects are arrays in `src/data/`, so adding a new project/service/skill is a one-line edit, not new markup.
- **SEO**: per-page `<title>`, meta description, canonical URL, Open Graph/Twitter tags, and a `Person` JSON-LD schema via `react-helmet-async`; `robots.txt` + `sitemap.xml` included.
- **Fast load / lazy loading**:
  - Below-the-fold sections (Services, Expertise, Case Study, Projects, Contact, Footer) are `React.lazy` + `Suspense` chunks — the browser only fetches them as the user scrolls near them.
  - `gsap` + `ScrollTrigger` are dynamically `import()`-ed inside `useScrollReveal`, so the animation library is never in the critical first-paint bundle.
  - All images use `loading="lazy"` with explicit width/height to avoid layout shift.
  - Vite build manually chunks `gsap` and `vendor` (`react`/`react-dom`/`react-helmet-async`) separately from app code for better caching, plus Brotli compression on build.
- **Dynamic animation added**: the stats section now counts up from 0 to its target value when scrolled into view (previously static numbers).
- **Same layout, same GSAP animations** everywhere else — hero, service cards, and expertise cards fade/slide in on scroll exactly as before.

## Notes

- The GitHub/YouTube/CRUD/E-commerce/Calculator/Tic-Tac-Toe/Landing-page project cards link out to the same live demo URLs as the original `app.js`.
- WhatsApp contact button opens `https://wa.me/923162573865` in a new tab, same as before.
- The contact form is client-side only (controlled inputs + "Message Sent" state) — wire it to an email/API service (e.g. Formspree, EmailJS, or your own backend) when ready.
