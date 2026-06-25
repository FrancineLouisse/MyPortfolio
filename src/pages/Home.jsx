import { useState } from "react";
import Particles from "../components/Particles";
import Lanyard from "../components/Lanyard";
import logo from "../assets/logo.png";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";
import stackIcon from "../assets/Icons/techstack-icon.png"
import projectIcon from "../assets/Icons/project-icon.png"
import expIcon from "../assets/Icons/codingexp-icon.png"
import certIcon from "../assets/Icons/certificate-icon.png"
import CountUp from "../components/CountUp"

const HeroSection = () => {
  const navigate = useNavigate();

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

    

      {/* Hero Section */}
      <section className="hero-content">
        <div className="Header container">
           <p className="badge">
              <span>&bull;</span>
              <span className="typing-text">
                  OPEN FOR FREELANCE WORK
              </span>
          </p>
           <p className="exposition">Hi, I'm</p>
          <h1>
            FRANCINE LOUISSE <span>MIRANDA</span>
          </h1>
          <p className="role">Software Developer</p>
          <p className="tagline">I build softwares that solves real-world problems</p>
          <p className="tagline">through innovative and impactful software solutions.</p>
          <div className="cta-btn">
            <button
              className="collab"
              onClick={() => navigate("/contact")}
            >
              Let&apos;s Collaborate
            </button>
            <button
              className="work"
              onClick={() => navigate("/projects")}
            >
              View My Work &rarr;
            </button>
          </div>

          <div className="card-container mt-5">
            <div className="stat-card">
              <div className="stat-icon">
                <img src={projectIcon} width="60" alt="Icon"></img>
              </div>
              <div className="stat-content">
              <h3>
                  <CountUp end={10} suffix="+" />
              </h3>
                <p>Total Projects</p>
                <span>Completed</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img src={certIcon} width="60" alt="Icon"></img>
              </div>
              <div className="stat-content">
              <h3>
                  <CountUp end={6} suffix="+" />
              </h3>
                <p>Certifications</p>
                <span>Earned</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img src={expIcon} width="60" alt="Icon"></img>
              </div>
              <div className="stat-content">
              <h3>
                  <CountUp end={4} suffix="+" />
              </h3>
                <p>Years Experience</p>
                <span>Building Solutions</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img src={stackIcon} width="60" alt="Icon"></img>
              </div>
              <div className="stat-content">
              <h3>
                  <CountUp end={24} suffix="+" />
              </h3>
                <p>Technology</p>
                <span>Used</span>
              </div>
            </div>
          </div>

          <p className="hero-quote">
            <span>"</span> Building software that solves problems and creates value.
            <span>"</span>
          </p>

        </div>
      </section>

      <div className="lanyard-layer">
        <Lanyard position={[0, 0, 15]} gravity={[0, -60, 0]} />
      </div>

    
    </>
  );
};

export default HeroSection;
