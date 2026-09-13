import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Project inquiry",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Hook up to an email/API service here if needed.
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h1>Get In Touch</h1>
        <p>Interested in working together? Let's discuss your project</p>
      </div>

      <div className="container1">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <div className="icon-box">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            </div>
            <div>
              <span>Email</span>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="mailto:sheikhdeveloper6@gmail.com"
              >
                sheikhdeveloper6@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </div>
            <div>
              <span>LinkedIn</span>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://www.linkedin.com/in/sheikh-talha-9671193a4"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sheikh-talha-9671193a4
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </div>
            <div>
              <span>GitHub</span>
              <br />
              <a
                style={{ textDecoration: "none", color: "#fff" }}
                href="https://github.com/sheikhdeveloper6talha"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sheikhdeveloper6talha
              </a>
            </div>
          </div>

          <div className="availability-card">
            <h3>Availability</h3>
            <p>
              I'm currently available for freelance work and consulting. My
              typical response time is within 24 hours.
            </p>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>
            <div className="progress-labels">
              <small>Current Availability</small>
              <small>70%</small>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="policy">
            <input
              type="checkbox"
              id="privacy"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
            />
            <label htmlFor="privacy">
              I agree to the <span className="link">Privacy Policy</span>
            </label>
          </div>

          <button type="submit" className="send-btn">
            {submitted ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
