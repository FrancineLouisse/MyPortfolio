import { useState } from "react";
import Particles from "../components/Particles";
import Lanyard from "../components/Lanyard";
import logo from "../assets/logo.png";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";


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
           <p className="badge"> <span>&bull; </span> OPEN FOR FREELANCE WORK</p>
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

        </div>
      </section>

      <div className="lanyard-layer">
        <Lanyard position={[0, 0, 15]} gravity={[0, -60, 0]} />
      </div>

    
    </>
  );
};

export default HeroSection;
