import React from "react";
import "../styles/ProjectModal.css";

const ProjectModal = ({ isOpen, onClose, title, description, images }) => {
  if (!isOpen) return null;

  // Ensure images always exists and has at least 1 item
  const safeImages = images && images.length > 0 ? images : [];

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* IMAGE SECTION */}
        {safeImages.length === 1 ? (
          // ⚠ Only 1 image → Show static single image
          <div className="single-image-wrapper">
            <img src={safeImages[0]} className="modal-image" alt="" />
          </div>
        ) : (
          // 🎠 Multiple images → Show carousel
          <div
            id="projectCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {safeImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img src={img} className="d-block w-100 modal-image" alt="" />
                </div>
              ))}
            </div>

            {/* Carousel Arrows */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        )}

        {/* TITLE */}
        <h2 className="modal-title">{title}</h2>

        {/* DESCRIPTION */}
        <p className="modal-description">{description}</p>

      </div>
    </div>
  );
};

export default ProjectModal;
