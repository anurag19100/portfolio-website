import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../UI/Particle";

import ProjectCardWork from "./ProjectCardWork";

const MainWork = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <ProjectCardWork />
      </Container>
    </Container>
  );
};

export default MainWork;
