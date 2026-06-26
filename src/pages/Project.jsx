import { useState } from "react";
import "../styles/ProjectSection.css";
import TiltedCard from "../components/TiltedCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";

// Project Images
import SnakeCover from "../assets/Projects/SnakeNLetters/SnakeCover.png";
import MedicareCover from "../assets/Projects/Medicare/MedicareCover.png";
import SquarebucksCover from "../assets/Projects/Squarebucks/SquarebucksCover.png";

const ProjectSection = () => {
const projects = [
{
    id:1,
    name:"Squarebucks Ordering System",
    preview: SquarebucksCover,
    previewType:"image",
    shortDescription:
    "Modern portfolio website built using React.",
    description:
    "A responsive personal portfolio developed using React, Vite and Bootstrap showcasing projects, certifications, experience and achievements.",
    technologies:[
        "React",
        "Vite",
        "Bootstrap",
        "CSS"
    ],
    liveLink:"https://yourportfolio.com"
},

{
    id:2,
    name:"Medicare Billing System",
    preview: MedicareCover,
    previewType:"image",
    shortDescription:
    "Inventory and sales management system.",
    description:
    "A complete inventory management system capable of managing products, suppliers, sales and reports.",
    technologies:[
        "PHP",
        "MySQL",
        "Bootstrap",
        "JavaScript"
    ],
    liveLink:null
},

{
    id:3,

    name:"Snake and Letters Educational Game",
    preview: SnakeCover,
    previewType:"image",
    shortDescription:
    "Point-of-sale system for coffee shop.",
    description:
    "POS system developed for ordering, cashiering and inventory tracking.",
    technologies:[
        "React",
        "Firebase",
        "CSS"
    ],
    liveLink:null
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

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="techBadge"
                  >
                    {tech}
                  </span>

                ))}

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
