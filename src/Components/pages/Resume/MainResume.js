import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../../UI/Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ResumeButton from "./ResumeButton";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/super1-1star/anurag-gupta-cv/master/anurag_gupta_cv_.pdf";

const MainResume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      {" "}
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeButton resumeLink={resumeLink} />
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <ResumeButton resumeLink={resumeLink} />
        </Row>
      </Container>
    </>
  );
};

export default MainResume;
