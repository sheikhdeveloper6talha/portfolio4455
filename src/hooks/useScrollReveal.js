import { useEffect } from "react";

let gsapPromise = null;

/**
 * Loads gsap + ScrollTrigger lazily (only once, cached) so the main bundle
 * stays small and the animation library only downloads when a section
 * that needs it actually mounts.
 */
function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => {
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    });
  }
  return gsapPromise;
}

/**
 * useScrollReveal - runs a gsap.from animation on children of `containerRef`
 * once the container scrolls into view. Mirrors the original app.js
 * ScrollTrigger-driven reveal animations, but works per-component.
 *
 * @param {React.RefObject} containerRef - element used as scroll trigger
 * @param {string} targetSelector - selector (relative to container) for animated children, e.g. "> *"
 * @param {object} fromVars - gsap "from" vars (y, opacity, stagger, ease, duration)
 * @param {object} triggerVars - extra ScrollTrigger vars (start, toggleActions)
 */
export default function useScrollReveal(
  containerRef,
  targetSelector = "> *",
  fromVars = {},
  triggerVars = {}
) {
  useEffect(() => {
    let ctx;
    let cancelled = false;

    loadGsap().then(({ gsap }) => {
      if (cancelled || !containerRef.current) return;

      ctx = gsap.context(() => {
        gsap.from(
          containerRef.current.querySelectorAll(targetSelector),
          {
            y: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            ...fromVars,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              ...triggerVars,
            },
          }
        );
      }, containerRef);
    });

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
