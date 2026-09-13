import { useRef } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { expertise } from "../../data/expertise";
import "./Expertise.css";

export default function Expertise() {
  const gridRef = useRef(null);
  useScrollReveal(
    gridRef,
    ".exp-card > *",
    { y: 300 },
    {}
  );

  return (
    <section className="expertise-section" id="expertise">
      <div className="circuit-bg"></div>

      <div className="section-container">
        <div className="section-header">
          <span className="badge">Tech Stack</span>
          <h1>Technical Expertise</h1>
          <p>
            Specialized in cutting-edge technologies for creating exceptional
            digital experiences.
          </p>
        </div>

        <div className="orbit-wrapper">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>

          <div className="central-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              loading="lazy"
              width="40"
              height="40"
            />
            <span>Docker</span>
          </div>
        </div>

        <div className="expertise-grid" ref={gridRef}>
          {expertise.map((item) => (
            <div className="exp-card" key={item.title}>
              <div className="icon-container">
                <div className="icon-inner">
                  <i className="fa-brands fa-uikit" aria-hidden="true"></i>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-container">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
