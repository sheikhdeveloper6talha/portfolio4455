import "./Footer.css";

const QUICK_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#case", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Muhammad Talha Sheikh</h2>
          <p>
            Building exceptional digital experiences with modern technologies.
            Available for freelance work and consulting.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/sheikhdeveloper6talha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sheikh-talha-9671193a4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="mailto:sheikhdeveloper6@gmail.com" aria-label="Email">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Muhammad Talha Sheikh. All rights reserved.</p>
        <p>
          Designed &amp; Built with <span className="heart">♥</span>
        </p>
      </div>
    </footer>
  );
}
