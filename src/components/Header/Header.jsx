import { useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#case", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">Muhammad Talha Sheikh</div>
      <button
        className="menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <i className="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <nav id="nav" className={menuOpen ? "active" : ""}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
