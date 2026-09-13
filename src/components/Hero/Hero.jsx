import { useRef } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  useScrollReveal(heroRef, "> *", { y: 100 }, { start: "top 80%" });

  const gotoWhatsApp = () => {
    window.open("https://wa.me/923162573865", "_blank");
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="tag">Fullstack Developer</div>
      <h1>Muhammad Talha Sheikh</h1>
      <h2>Building Digital Experiences</h2>
      <p>Crafting exceptional web applications with modern technologies.</p>

      <div className="buttons">
        <button className="btn btn-primary" onClick={gotoWhatsApp}>
          Contact Me →
        </button>
        <button className="btn btn-outline">
          <a href="#projects">View Projects</a>
        </button>
      </div>
    </section>
  );
}
