import { useRef } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import { services } from "../../data/services";
import "./Services.css";

export default function Services() {
  const gridRef = useRef(null);
  useScrollReveal(gridRef, ".card > *", {}, {});

  return (
    <section className="services-section" id="services">
      <div className="grid-overlay"></div>

      <div className="section-container">
        <div className="section-header">
          <span className="badge">Services</span>
          <h1>Specialized Development Services</h1>
          <p>Expert solutions tailored to your technical challenges</p>
        </div>

        <div className="services-grid" ref={gridRef}>
          {services.map((service) => (
            <div className="card" key={service.title}>
              <div className="icon-box">
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
