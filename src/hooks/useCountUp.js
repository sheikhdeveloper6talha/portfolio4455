import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 -> target once the element enters the viewport.
 * Pure IntersectionObserver + requestAnimationFrame, no library needed,
 * keeping this "dynamic" stat animation lightweight and fast to load.
 *
 * @param {number} target - final numeric value to count up to
 * @param {number} duration - animation duration in ms
 * @returns {[React.RefObject, number]} ref to attach to the element, current value
 */
export default function useCountUp(target, duration = 1500) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let hasRun = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            hasRun = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, value];
}
