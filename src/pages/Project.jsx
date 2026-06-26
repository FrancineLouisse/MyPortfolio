import { useState } from "react";
import "../styles/ProjectSection.css";
import TiltedCard from "../components/TiltedCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

// Project Preview
import SnakeCover from "../assets/Projects/SnakeNLetters/snake-vid.mp4";
import MedicareCover from "../assets/Projects/Medicare/MedicareCover.png";
import SquarebucksCover from "../assets/Projects/Squarebucks/SquareBucks-vid.mp4";
import FactAttack from "../assets/Projects/video/FactAttack.mp4"
import Canteen from "../assets/Projects/video/CanteenInventory.mp4"
import Wilder from "../assets/Projects/video/WilderStruck.mp4"
import ESSSS from "../assets/Projects/video/ESSSS.mp4"

const ProjectSection = () => {
const projects = [

{
    id:1,
    name:"ESSSS Centralized Document Management System",
    preview: ESSSS,
    previewType:"video",
    shortDescription:
    "ESSS Document Management System is a capstone full-stack web application that streamlines the organization, storage, and secure retrieval of both physical and digital engineering survey documents through QR code integration and an IoT-enabled smart cabinet.",
    description:
    "ESSS Document Management System is a capstone project developed for a surveying company to improve the management of both physical and digital documents. The system organizes records in a centralized platform, enables fast document retrieval through QR code scanning, and integrates with an IoT-enabled smart cabinet that unlocks only during authorized document storage or retrieval. It also features an audit trail that records user activities, providing complete traceability of physical document access. By combining digital record management with secure physical storage, the system helps reduce document loss, strengthen security, and significantly improve document retrieval efficiency.",
    technologies:[
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "C++",
        "MySQL",

    ],
    liveLink: null
},

{
    id:2,
    name:"Canteen Inven Track",
    preview: Canteen,
    previewType:"video",
    shortDescription:
    "Canteen Inventory System is a full-stack web-based inventory and point-of-sale system with cash flow tracking to help canteen operators efficiently manage products, sales, and finances.",
    description:
    "Canteen Inventory System is a web-based solution designed to simplify canteen operations by integrating inventory management, point-of-sale, and cash flow tracking into a single platform. It enables users to manage products, monitor stock levels, process sales, and record cash inflows and outflows. The system also generates reports and supports data export for improved inventory and financial monitoring. A centralized database stores product information, sales records, cash flow transactions, and user accounts, ensuring accurate and organized data management. The application enhances operational efficiency by providing real-time inventory updates and comprehensive financial tracking.",
    technologies:[
        "CSS",
        "HTML",
        "JavaScript",
        "PHP",
        "MySQL",
    ],
    liveLink: null
},

{
    id:3,
    name:"Fact Attack Game",
    preview: FactAttack,
    previewType:"video",
    shortDescription:
    "FactAttack is a web-based interactive quiz application that challenges users with timed multiple-choice questions across different difficulty levels while tracking their scores in real time.",
    description:
    "FactAttack is a web-based quiz platform designed to engage users with timed multiple-choice questions across different difficulty levels. The application includes user authentication, score tracking, result history, and real-time score computation to enhance the overall learning experience. A centralized database manages user accounts, quiz questions, answer choices, scores, and game history. The system provides a seamless and responsive interface for both casual players and learners seeking to test their knowledge.",
    technologies:[
        "Python",
        "Django",
        "CSS",
        "HTML",
        "JavaScript",

    ],
    liveLink: null
},

{
    id:4,
    name:"Wilderstruck",
    preview: Wilder,
    previewType:"video",
    shortDescription:
    "WilderStruck is a 2D platformer game where players navigate challenging levels, avoid obstacles, and reach the finish while managing limited lives.",
    description:
    "WilderStruck is a 2D platformer game that combines exploration, obstacle navigation, and action-based gameplay across multiple levels. Players progress through increasingly challenging stages while avoiding hazards and interacting with various game elements. The game features responsive player controls, collision detection, level progression, and immersive gameplay mechanics to create an engaging experience. Its level-based design encourages strategic movement, timing, and skill development throughout the adventure.",
    technologies:[
        "C#",
    ],
    liveLink: "https://chincore.itch.io/wilderstuck"
}, 

{
    id:5,
    name:"Snake N' Letters Educational Game",
    preview: SnakeCover,
    previewType:"video",
    shortDescription:
    "Snake N' Letters is an educational 2D game that combines classic snake gameplay with letter collection to promote vocabulary and spelling skills.",
    description:
    "Snake N' Letters is an educational game that enhances vocabulary and letter recognition through interactive snake-based gameplay. Players control a snake to collect the correct letters while avoiding obstacles and maintaining their remaining lives. The game features score tracking, time-based challenges, leaderboards, power-ups, and multiple gameplay settings to provide an engaging learning experience. Progressive difficulty and interactive mechanics encourage quick thinking, coordination, and spelling accuracy. The application combines entertainment and education to make language learning more enjoyable for players of all ages.",
    technologies:[
        "Java",
        "MySQL",

    ],
    liveLink:null
},

{
    id:6,
    name:"Medicare Billing System",
    preview: MedicareCover,
    previewType:"image",
    shortDescription:
    "Medicare Billing System is a full-stack web application that streamlines billing, receipt generation, and sales reporting for healthcare service providers.",
    description:
    "Medicare Billing System is a web-based application designed to simplify the billing process for healthcare facilities through a secure user authentication system. The platform enables users to generate billing statements and official receipts while maintaining organized transaction records. It also provides comprehensive sales reports with monthly, quarterly, semi-annual, and annual summaries to support financial monitoring and business analysis. A centralized database ensures accurate storage of billing information, receipts, user accounts, and sales records. The system improves operational efficiency by automating billing workflows and delivering detailed financial reporting.",
    technologies:[
        "Java",
        "MySQL",

    ],
    liveLink:null
},

{
    id:7,
    name:"Squarebucks Ordering System",
    preview: SquarebucksCover,
    previewType:"video",
    shortDescription:
    "SquareBucks Ordering System is a simple console ordering system",
    description:
    "SquareBucks Ordering System is a simple console ordering system. The system allows orders input, customize order quantities, computing total amount and change. The system also allows ten percent discounts using a code that will automatically deduct on their total order amount",
    technologies:[
        "C++",

    ],
    liveLink:"https://yourportfolio/XXXX.com"
}
];

const [selectedProject,setSelectedProject]=useState(null);
  return (
  <div className="container">
    <section id="projects" className="ProjectSection">

      <div className="pinkHeader pt-5">
        PROJECTS
      </div>

      <div className="projectsGrid">

        {projects.map((project) => (

          <div
            key={project.id}
            className="projectCard"
            onClick={() => setSelectedProject(project)}
          >

            <div className="projectPreview">

              {project.previewType === "image" ? (

                <img
                  src={project.preview}
                  alt={project.name}
                />

              ) : (

                <video
                  src={project.preview}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

              )}

              <div className="projectOverlay">

                <span>
                  View Project →
                </span>

              </div>

            </div>

            <div className="projectContent">

              <h3 className="projectTitle">
                {project.name}
              </h3>

              <p className="projectDescription">
                {project.shortDescription}
              </p>

              <div className="projectTech">

                {project.technologies
                  .slice(0, 3)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="techBadge"
                    >
                      {tech}
                    </span>
                  ))}

                {project.technologies.length > 3 && (
                  <span className="techBadge moreBadge">
                    +{project.technologies.length - 3}
                  </span>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      {selectedProject && (

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      )}

    </section>
  </div>
);

};

export default ProjectSection;
