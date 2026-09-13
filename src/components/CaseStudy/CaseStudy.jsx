import "./CaseStudy.css";

export default function CaseStudy() {
  return (
    <section className="case-study-section" id="case">
      <div className="grid-overlay"></div>

      <div className="section-container1">
        <div className="section-header">
          <span className="badge">Featured Work</span>
          <h1>Case Study</h1>
          <p>An in-depth look at one of my most impactful projects</p>
        </div>

        <div className="case-study-card">
          <div className="content-side">
            <span className="category-badge">Case Study</span>
            <h2>Aleris AI Conversational Health Companion</h2>
            <p>
              Aleris AI is an intelligent health assistant that empowers users
              to manage everyday wellness through natural conversations...
            </p>

            <div className="section-block">
              <h3>The Challenge</h3>
              <p>
                Health-related information can be overwhelming and
                inaccessible to many individuals...
              </p>
            </div>

            <div className="section-block">
              <h3>The Solution</h3>
              <p>
                The frontend was built with React and TailwindCSS for fast,
                responsive UI development...
              </p>
            </div>

            <div className="section-block">
              <h3>The Results</h3>
              <ul>
                <li>42% increase in conversion rate</li>
                <li>65% improvement in page load speed</li>
                <li>3x faster deployment of new features</li>
              </ul>
            </div>
          </div>

          <div className="preview-side">
            <div className="app-mockup">
              <div className="chat-header">How can I help you today?</div>
              <div className="stat-card mood">
                <span>Mood</span>
                <strong>Positive</strong>
              </div>
            </div>

            <div className="info-badges">
              <div className="info-box">
                <label>Technologies</label>
                <div className="pill-row">
                  <span>Next.js</span> <span>React.js</span>{" "}
                  <span>Node.js</span> <span>PostgreSQL</span>
                </div>
              </div>
              <div className="info-box">
                <label>Timeline</label>
                <strong>3 months</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
