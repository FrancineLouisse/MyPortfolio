import Particles from "./Particles";
import "../styles/AboutSection.css";
// If you added the alias "@": 
import LogoLoop from "@/components/LogoLoop";
import htmlLogo from "../assets/Logos/htmlLogo.png";
import cssLogo from "../assets/Logos/cssLogo.png";
import jsLogo from "../assets/Logos/jsLogo.png";
import reactLogo from "../assets/Logos/reactLogo.png";
import cplusLogo from "../assets/Logos/cplusLogo.png";
import csharpLogo from "../assets/Logos/csharpLogo.png";
import pythonLogo from "../assets/Logos/pythonLogo.png";
import phpLogo from "../assets/Logos/phpLogo.png";
import bootstrapLogo from "../assets/Logos/bootstrapLogo.png";
import mysqlLogo from "../assets/Logos/mysqlLogo.png";
import xamppLogo from "../assets/Logos/xamppLogo.png";
import javaLogo from "../assets/Logos/javaLogo.png";

import ss1 from "../assets/SoftSkills/1.png";
import ss2 from "../assets/SoftSkills/2.png";
import ss3 from "../assets/SoftSkills/3.png";
import ss4 from "../assets/SoftSkills/4.png";
import ss5 from "../assets/SoftSkills/5.png";
import ss6 from "../assets/SoftSkills/6.png";
import ss7 from "../assets/SoftSkills/7.png";
import ss8 from "../assets/SoftSkills/8.png";


const logos = [
  { node: <img src={htmlLogo} alt="HTML" /> },
  { node: <img src={cssLogo} alt="CSS" /> },
  { node: <img src={jsLogo} alt="JavaScript" /> },
  { node: <img src={reactLogo} alt="React" /> },
  { node: <img src={cplusLogo} alt="C++" /> },
  { node: <img src={csharpLogo} alt="C#" /> },
  { node: <img src={pythonLogo} alt="Python" /> },
  { node: <img src={phpLogo} alt="PHP" /> },
  { node: <img src={bootstrapLogo} alt="Bootstrap" /> },
  { node: <img src={mysqlLogo} alt="MySQL" /> },
  { node: <img src={xamppLogo} alt="XAMPP" /> },
  { node: <img src={javaLogo} alt="Java" /> },
];
const softSkills = [
  { node: <img src={ss1} alt="softskills" /> },
  { node: <img src={ss2} alt="softskills" /> },
  { node: <img src={ss3} alt="softskills" /> },
  { node: <img src={ss4} alt="softskills" /> },
  { node: <img src={ss5} alt="softskills" /> },
  { node: <img src={ss6} alt="softskills" /> },
  { node: <img src={ss7} alt="softskills" /> },
  { node: <img src={ss8} alt="softskills" /> },
];

const AboutSection = () => {
  return (
  
    <div>
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Particles
            particleColors={['#f09080', '#ffffff']}
            particleCount={700}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={130}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            />
        </div>
        <div className="container">
          <section id="about">
            <div className="pinkHeader pt-5">ABOUT</div>
            <p className="aboutDesc">
                I’m Francine Louisse Miranda, an Information Technology 
                student specializing in Web and Mobile Development from 
                Bulacan State University. I have a strong passion for creating 
                functional and visually appealing digital solutions that make a 
                real impact. Throughout my journey, I’ve gained valuable skills 
                not only from my university courses but also through online 
                learning and hands-on experience while working on different 
                projects. These opportunities helped me grow my technical 
                knowledge, creativity, and problem-solving ability — shaping 
                me into someone who’s always eager to learn and build better software.
            </p>
          </section>
          <section id="skills">
            <div className="pinkHeader pt-5">SKILLS</div>
            <div className="subHeading">Technical Skills</div>
            <div style={{ marginTop: "16px" }}>
                <LogoLoop
                logos={logos}
                logoHeight={96}   // ← make bigger (try 72–120)
                gap={56}          // optional: add more spacing
                speed={80}
                scaleOnHover
                />
            </div>
            <div className="subHeading">Soft Skills</div>
            <div style={{ marginTop: "16px" }}>
            <LogoLoop
                logos={softSkills}
                logoHeight={96}
                gap={56}
                speed={80}
                scaleOnHover
                direction="right"   // ← make this one move to the right
            />
            </div>
          </section>
        </div>
        
    </div>
    
  )
}

export default AboutSection