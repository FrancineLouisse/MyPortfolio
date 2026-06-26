import { useEffect } from "react";
import { HiOutlineXMark, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import "../styles/ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent page scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className="projectModal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="closeModalBtn" onClick={onClose}>
          <HiOutlineXMark />
        </button>

        <div className="modalPreview">

          {project.previewType === "image" ? (
            <img
              src={project.preview}
              alt={project.name}
            />
          ) : (
            <video
              src={project.preview}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}

        </div>

        <div className="modalContent">

          <h2>{project.name}</h2>

          <p className="modalDescription">
            {project.description}
          </p>

          <div className="modalTech">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="techBadge"
              >
                {tech}
              </span>
            ))}

          </div>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="liveProjectBtn"
            >
              View Live Project
              <HiOutlineArrowTopRightOnSquare />
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;