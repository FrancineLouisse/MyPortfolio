import { useState } from "react";
import "../styles/ProjectSection.css";
import TiltedCard from "./TiltedCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

// Project Images
import SnakeCover from "../assets/Projects/SnakeNLetters/SnakeCover.png";
import Snake1 from "../assets/Projects/SnakeNLetters/1.png";
import Snake2 from "../assets/Projects/SnakeNLetters/2.png";

import MedicareCover from "../assets/Projects/Medicare/MedicareCover.png";
import Medicare1 from "../assets/Projects/Medicare/1.png";
import Medicare2 from "../assets/Projects/Medicare/2.png";

import SquarebucksCover from "../assets/Projects/Squarebucks/SquarebucksCover.png";
import Square1 from "../assets/Projects/Squarebucks/1.png";
import Square2 from "../assets/Projects/Squarebucks/2.png";

const ProjectSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (title, description, images) => {
    setModalData({ title, description, images });
    setModalOpen(true);
  };

  return (
    <div className="ProjectSection">
      <section id="projects">
      <div className="container py-4">
        <div className="blackHeader mb-4">PROJECTS</div>

        <div className="row g-4 justify-content-center">

          {/* SNAKE GAME PROJECT */}
          <div
            className="col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
            onClick={() =>
              openModal(
                "2D GAME - Snake n' Letters",
                "A 2D Java game with MySQL login/registration. Players control a snake to eat letters while avoiding obstacles across 3 levels and 3 stages per level. Collected letters solve questions, with 3 lives per game. Features include leaderboards and an “intellectual potion” that hints at answer.(2024)",
                [SnakeCover, Snake1, Snake2]
              )
            }
          >
            <TiltedCard
              imageSrc={SnakeCover}
              altText="2D GAME - Snake n' Letters"
              captionText=""
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-pill">2D GAME - Snake n' Letters</p>}
            />
          </div>

          {/* MEDICARE PROJECT */}
          <div
            className="col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
            onClick={() =>
              openModal(
                "Medicare App",
                "A Java and MySQL application for managing patient records, billing services, and generating receipts. It automatically calculates totals and payments and provides sales reports monthly, quarterly, semi-annually, and annually for easy healthcare management.(2023)",
                [MedicareCover, Medicare1, Medicare2]
              )
            }
          >
            <TiltedCard
              imageSrc={MedicareCover}
              altText="Medicare App"
              captionText=""
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-pill">Medicare</p>}
            />
          </div>

          {/* SQUAREBUCKS PROJECT */}
          <div
            className="col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center"
            onClick={() =>
              openModal(
                "Squarebucks",
                "A C++ console application that lets users place multiple shop orders and automatically computes the total. Users can enter the payment amount to get the change, and apply discount codes for a 10% deduction. The system streamlines ordering and billing for easy transactions.(2022)",
                [SquarebucksCover, Square1, Square2]
              )
            }
          >
            <TiltedCard
              imageSrc={SquarebucksCover}
              altText="Squarebucks"
              captionText=""
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-pill">Squarebucks</p>}
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalData.title}
        description={modalData.description}
        images={modalData.images || []}
      />
      </section>
    </div>
  );
};

export default ProjectSection;
