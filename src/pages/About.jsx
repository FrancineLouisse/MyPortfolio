// import Particles from "../components/Particles";
import "../styles/AboutSection.css";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
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
import picture from "../assets/Picture.jpg"
import jsCert from "../assets/Certs/meta-js.png"
import frontendCert from "../assets/Certs/meta-frontend.png"
import projectInitCert from "../assets/Certs/google-projectInitiation.png"
import projectFoundationsCert from "../assets/Certs/google-projectInitiation.png"
import medalIcon from "../assets/Icons/certificate-icon.png"


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

const certifications = [
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "October 2025",
    image: jsCert,
    link: "https://www.coursera.org/account/accomplishments/verify/UPIKHSX3MFMY",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "September 2025",
    image: frontendCert,
    link: "https://www.coursera.org/account/accomplishments/verify/CDSY0SUGNP7W",
  },
  {
    title: "Project Initiation: Starting a Successful Project",
    issuer: "Google",
    date: "September 2025",
    image: projectInitCert,
    link: "https://www.coursera.org/account/accomplishments/verify/MQ2TRBYNEP45",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "September 2025",
    image: projectFoundationsCert,
    link: "https://www.coursera.org/account/accomplishments/verify/SAVKFF5NCNL0",
  },
];



const awards = [
  {
    title: "Magna Cum Laude - BS in Information Technology",
    organization: "Bulacan State University",
    date: "June 2026",
  },
  {
    title: "Candidate for Best Capstone",
    organization: "Bulacan State University",
    date: "November 2025",
  },
  {
    title: "Dean's Lister (2024–2025)",
    organization: "Bulacan State University",
    date: "May 2025",
  },
  {
    title: "Org Publicity Committee",
    organization:
      "Prestigious Organization of Software and Hardware Elite Developers (POSHED)",
    date: "April 2025",
  },
  {
    title: "Dean's Lister (2023–2024)",
    organization: "Bulacan State University",
    date: "May 2024",
  },
  {
    title: "With High Honors",
    organization: "Immaculate Conception College of Balayan Inc.",
    date: "June 2022",
  },
  {
    title: "Best Research Output",
    organization: "Immaculate Conception College of Balayan Inc.",
    date: "June 2022",
  },
  {
    title: "Award for Work Immersion",
    organization: "Immaculate Conception College of Balayan Inc.",
    date: "June 2022",
  },
  {
    title: "With Honors",
    organization: "San Piro National High School",
    date: "July 2020",
  },
  {
    title: "Outstanding Journalist of the Year",
    organization: "San Piro National High School",
    date: "July 2020",
  },
  {
    title: "Ang Layag Publication Correspondent's Special Award",
    organization: "San Piro National High School",
    date: "July 2020",
  },
  {
    title: "Second Honorable Mention",
    organization: "Jose T. Unson Memorial Elementary School",
    date: "March 2016",
  },
];

const AboutSection = () => {
  const navigate = useNavigate();
  return (
  
    <div>
        {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
        </div> */}
        <div className="container">
          <section id="about">
            <div className="pinkHeader pt-5">ABOUT</div>
            <div className="aboutIntro">
              <div>
                <img src={picture} width="100%" alt="Icon" className="picture"></img>
                <div className="aboutButtons">
                    <a
                        href="/Francine_Louisse_Miranda_CV.pdf"
                        download
                        className="primaryBtn"
                    >
                      Download CV
                    </a>

                    <button
                        className="secondaryBtn"
                        onClick={() => navigate("/contact")}
                    >
                      Let's Connect
                    </button>
                </div>
              </div>
              <div>

                <h1 className="Name">FRANCINE LOUISSE C. MIRANDA</h1>
                <h3 className="Role">Software Developer</h3>
                <div className="location">
                  <HiOutlineMapPin className="locationIcon" />
                  <span>Based in the Philippines</span>
                </div>
                <p className="statusBadge">
                    <span className="statusDot"></span>
                    Available for Full-time & Freelance
                </p>
                <p className="aboutDesc mt-5">
                  Information Technology graduate from Bulacan State University specializing in
                  Web and Mobile Development. Passionate about building responsive, user-focused
                  web applications that combine clean design with practical functionality.
                  Continuously learning new technologies and applying them to create reliable,
                  scalable, and impactful digital solutions.

                </p>
                {/* <div className="introTags">
                    <span>Magna Cum Laude</span>
                    <span>React Developer</span>
                    <span>Web & Mobile</span>
                    <span>Fast Learner</span>
                </div> */}
              </div>
            </div>
            <div>
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
            </div>
            
            {/* EXPERIENCE */}
            <div className="sectionContainer">
              <div className="pinkHeader pt-5">EXPERIENCE</div>

              <div className="infoCard">
                <div className="cardTop">
                  <div>
                    <h3>Associate Software Developer Intern</h3>
                    <h4>TechFactors Inc.</h4>
                    <p>Sikatuna Village, Quezon City</p>
                  </div>

                  <span className="yearBadge">
                    January – March 2026
                  </span>
                </div>

                <ul className="experienceList">
                  <li>
                    &bull; Developed and enhanced UI components using React.js and Bootstrap
                    to improve system usability and responsiveness.
                  </li>

                  <li>
                    &bull; Integrated RESTful APIs and resolved front-end bugs to ensure smooth
                    data flow and functionality.
                  </li>

                  <li>
                    &bull; Contributed 30+ GitHub contributions supporting feature development,
                    bug fixes, and overall project progress.
                  </li>
                </ul>

                <div className="techStack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Bootstrap</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Agile</span>
                  <span>Jira</span>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="sectionContainer">
              <div className="pinkHeader pt-5">EDUCATION</div>

              <div className="educationGrid">

                <div className="educationCard">
                  <div className="educationHeader">
                    <span className="educationYear">2022–2026</span>

                    <div>
                      <h3>Bulacan State University</h3>
                      <p>Bachelor of Science in Information Technology</p>
                      <p>Web and Mobile Development Specialization</p>

                      <div className="award">
                        🏅 Magna Cum Laude
                      </div>
                    </div>
                  </div>
                </div>

                <div className="educationCard">
                  <div className="educationHeader">
                    <span className="educationYear">2020–2022</span>

                    <div>
                      <h3>Immaculate Conception College of Balayan Inc.</h3>
                      <p>Science, Technology, Engineering, and Mathematics</p>

                      <div className="award">
                        🏅 With High Honors
                      </div>
                    </div>
                  </div>
                </div>

                <div className="educationCard">
                  <div className="educationHeader">
                    <span className="educationYear">2016–2020</span>

                    <div>
                      <h3>San Piro National High School</h3>

                      <div className="award">
                        🏅 With Honors
                      </div>
                    </div>
                  </div>
                </div>

                <div className="educationCard">
                  <div className="educationHeader">
                    <span className="educationYear">2010–2016</span>

                    <div>
                      <h3>Jose T. Unson Memorial Elementary School</h3>

                      <div className="award">
                        🏅 Second Honorable Mention
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="sectionContainer">
              <div className="pinkHeader pt-5">CERTIFICATIONS</div>

              <div className="certificationGrid">

                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificateCard"
                  >
                    <img src={cert.image} alt={cert.title} />

                    <div className="certificateOverlay">
                      <h3>{cert.title}</h3>

                      <p>{cert.issuer}</p>

                      <span>{cert.date}</span>
                      <HiOutlineArrowTopRightOnSquare
                        className="certificateLinkIcon"
                        title="View Certificate"
                      />
                    </div>

                  </a>
                ))}

              </div>
            </div>

            <div className="sectionContainer">
              <div className="pinkHeader pt-5">
                AWARDS & RECOGNITIONS
              </div>

              <div className="awardsGrid">

                {awards.map((award, index) => (
                  <div className="awardCard" key={index}>

                    <div className="awardIcon">
                      <img src={medalIcon} width="60" alt="Icon"></img>
                    </div>

                    <div className="awardContent">

                      <h3>{award.title}</h3>

                      <p>{award.organization}</p>

                      <span>{award.date}</span>

                    </div>

                  </div>
                ))}

              </div>
            </div>
          </section>
        </div>
        
    </div>
  )
}

export default AboutSection