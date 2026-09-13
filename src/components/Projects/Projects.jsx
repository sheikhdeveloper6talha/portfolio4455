import { projects } from "../../data/projects";
import "./Projects.css";

export default function Projects() {
  const handleOpen = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-section" id="projects">
      <div className="grid-overlay"></div>

      <div className="section-container">
        <div className="section-header">
          <span className="badge">Projects</span>
          <h1>Featured Projects</h1>
          <p>A selection of my recent fullstack development work</p>
        </div>

        <div className="projects-grid">
          {projects.toReversed().map((project) => (
            <div
              className="project-card"
             
            >
              <div className={`project-preview ${project.bgClass}`}>
                <span
                  className="tech-label"
                  id={project.id === "crud" ? "local" : undefined}
                >
                  {project.label}
                </span>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="600"
                  height="250"
                />
                {project.live && (
                  <div className="live-indicator">
                    <span></span> Live Project
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
                        <div className="footerDES">
            <h1>GitHub Links</h1>
<a   key={project.id}
              onClick={() => handleOpen(project.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOpen(project.url);
              }} >Live Link: {project.title}</a>
    <p>You can explore the full source code on my GitHub. I’d love to hear your thoughts and feedback!</p>
          <p>{project.description}</p>
          </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
