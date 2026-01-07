import { useState } from "react";
import Particles from "./Particles";
import Lanyard from "./Lanyard";
import logo from "../assets/logo.png";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleNavClick = (e, sectionId, showMessage = true) => {
    e.preventDefault();

    // Scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });

    // Show toast only if allowed
    if (showMessage) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      {/* Background Particles */}
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Particles
          particleColors={["#f09080", "#ffffff"]}
          particleCount={700}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={130}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navbar */}
      <nav className="navbar custom-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <img src={logo} width="60" alt="Logo" />
          </div>

          <ul className="nav nav-underline mb-0">
            <li className="nav-item mx-3">
              <a
                className="nav-link fw-semibold"
                href="#about"
                onClick={(e) => handleNavClick(e, "about", true)}
              >
                ABOUT
              </a>
            </li>

            <li className="nav-item mx-3">
              <a
                className="nav-link fw-semibold"
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects", true)}
              >
                PROJECTS
              </a>
            </li>

            <li className="nav-item mx-3">
              <a
                className="nav-link fw-semibold"
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills", true)}
              >
                SKILLS
              </a>
            </li>

            <li className="nav-item mx-3">
              <a
                className="nav-link fw-semibold"
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact", false)}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-content">
        <div className="Header container">
          <h1>
            FRANCINE LOUISSE <span>MIRANDA</span>
          </h1>
          <p className="role">Software Developer</p>
          <p className="tagline">Simple code. Strong impact.</p>

          <button
            className="cta-btn"
            onClick={(e) => handleNavClick(e, "contact", false)}
          >
            Let&apos;s Collaborate
          </button>
        </div>
      </section>

      <div className="lanyard-layer">
        <Lanyard position={[0, 0, 15]} gravity={[0, -60, 0]} />
      </div>

      {/* Toast */}
      <div className={`toast ${showToast ? "show" : ""}`}>
        Currently unavailable — coming soon
      </div>
    </>
  );
};

export default HeroSection;
