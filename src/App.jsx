import { lazy, Suspense } from "react";
import SEO from "./seo/SEO";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";

// Below-the-fold sections are code-split so the initial bundle needed for
// the first paint (Header + Hero + Stats + About) stays as small as possible.
const Services = lazy(() => import("./components/Services/Services"));
const Expertise = lazy(() => import("./components/Expertise/Expertise"));
const CaseStudy = lazy(() => import("./components/CaseStudy/CaseStudy"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />

        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Expertise />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CaseStudy />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}
