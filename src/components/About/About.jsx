import { useRef } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./About.css";

export default function About() {
  const containerRef = useRef(null);
  useScrollReveal(containerRef, ".about-image, .about-content > *", {}, {});

  return (
    <section className="about" id="about">
      <div className="about-container" ref={containerRef}>
        <div className="about-image">
          <img
            src="/images/talhaSheikhfix.png"
            alt="Muhammad Talha Sheikh - Fullstack Developer"
            loading="lazy"
            width="250"
            height="250"
          />
        </div>
        <div className="about-content">
          <div className="tag">Fullstack Developer</div>
          <h2>Muhammad Talha Sheikh</h2>
          <h2>Crafting Digital</h2>
          <h2>Experience</h2>
          <p>
            I build exceptional digital experiences with modern technologies,
            specializing in both frontend and backend development to create
            scalable and user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
}
