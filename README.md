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
# 🚀 Personal Portfolio | Muhammad Talha Sheikh

Welcome to my personal developer portfolio built with **React.js** and styled with **Custom CSS**. This repository showcases my journey as a **Full-Stack MERN Developer**, featuring a wide variety of web applications ranging from AI-powered tools and real-time social platforms to full-stack e-commerce solutions.

---

## 🛠️ Tech Stack & Skills

* **Frontend:** React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), TypeScript, Redux Toolkit
* **Backend:** Node.js, Express.js, Supabase, REST APIs, Socket.IO, JWT, Nodemailer, Bcrypt
* **Database & Cloud:** MongoDB, Cloudinary, Multer
* **Currently Learning & Exploring:** Advanced Next.js App Router & AWS Deployment

---

## 📁 Projects Featured

### 🤖 Full-Stack & Advanced Applications
1. **AI Accounting Assistant & Financial Dashboard** *(Next.js, Express, MongoDB, TypeScript)*
   * Smart financial application featuring dual transaction entry (manual & conversational AI chatbot).
   * Generates automated monthly P&L reports and custom date-filtered income/expense insights.

2. **Full-Stack Social Media & Real-Time Chat App** *(MERN Stack, Socket.IO)*
   * Social networking app with JWT authentication, request management (send/accept/cancel), and real-time 1-to-1 messaging.

3. **Full-Stack E-Commerce Marketplace** *(MERN Stack, Nodemailer, Cloudinary)*
   * Feature-rich marketplace with OTP email verification, product CRUD dashboard, Cloudinary media upload, and direct buyer-seller chat.

4. **QR-Based Asset Maintenance & Tracking System** *(JavaScript, Supabase)*
   * Maintenance management tool allowing users to scan device QR codes, report hardware issues, assign technicians, and track real-time repair estimates.

5. **React E-Commerce Web App** *(React.js, Context API, Supabase)*
   * Dynamic online shopping experience with state management via Context API and a Supabase backend.

---

### 🌐 Frontend & API Projects
6. **YouTube Shorts Search App** *(JavaScript, YouTube Data API)*
   * Web utility to search and stream YouTube Shorts via API integration.

7. **GitHub Profile Finder** *(JavaScript, GitHub API)*
   * Interactive profile viewer fetching user stats, repositories, and activity via GitHub REST API.

8. **Local Storage E-Commerce Store** *(Vanilla JS, HTML, CSS)*
   * E-commerce interface utilizing browser LocalStorage for persistent cart items and user selections.

9. **Local Storage CRUD Application** *(Vanilla JS, LocalStorage)*
   * Dynamic data management application demonstrating create, read, update, and delete operations.

10. **E-Commerce Landing Page** *(HTML5, CSS3, JavaScript)*
    * Responsive and modern conversion-focused landing page layout.

11. **Tic-Tac-Toe Game** *(HTML5, CSS3, JavaScript)*
    * Classic web game featuring real-time win/draw detection logic and game reset functionality.

12. **Web Calculator** *(HTML5, CSS3, JavaScript)*
    * Clean, responsive calculator utility for everyday math operations.

---

## 📈 Continuous Learning Journey

I believe in continuous learning and staying updated with industry standards. I am currently focusing on:
* ⚡ **Next.js:** Deep diving into Server Components, Server Actions, and Optimization.
* ☁️ **AWS Cloud:** Learning AWS deployment workflows (EC2, S3, CloudFront) to host scalable applications.

---

## 📬 Connect with Me

* **GitHub:** [sheikhdeveloper6talha](https://github.com/sheikhdeveloper6talha)
* **Location:** Karachi, Pakistan
* **Role:** Full-Stack MERN Developer

---
*Feel free to check out the project codebases, give star ratings, or reach out for feedback and collaboration!*