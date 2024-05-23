import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import gdrive from "../../Assets/Projects/gdrive.png";
import bitchecker from "../../Assets/Projects/bitchecker.png";
import carvoeiro from "../../Assets/Projects/carvoeiro.png";
import workoutlogger from "../../Assets/Projects/workoutlogger.png";
import girassol from "../../Assets/Projects/girassol.png";
import life from "../../Assets/Projects/life.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="custom_color">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workoutlogger}
              isBlog={false}
              title="Gym Workout Logger"
              description="A gym workout logger web app built with the MERN stack. Both the backend and frontend are deployed on Vercel. Utilizes Bootstrap, Redux, and Styled Components. This project represents my most complex endeavor yet!"
              ghLink="https://github.com/ItzHardcore/workoutlog"
              demoLink="https://workoutlog-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdrive}
              isBlog={false}
              title="Portfolio with Google Drive API"
              description="A personal portfolio built in React.js that leverages Google Drive for video storage, utilizing the Google Drive API. The website is fully responsive and showcases a collection of videos."
              ghLink="https://github.com/ItzHardcore/Video-gallery-gdrive-api/"
              demoLink="https://video-gallery-375311.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitchecker}
              isBlog={false}
              title="Bitcoin Address Balance"
              description="A mobile-responsive website that displays the balance of one or multiple Bitcoin public addresses. Additionally, it provides real-time Bitcoin price data in USD/EUR. Developed using React.js and various APIs."
              ghLink="https://github.com/ItzHardcore/btc-balance-checker"
              demoLink="https://bitchecker-85c30.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={girassol}
              isBlog={false}
              title="Restaurant Website"
              description="A website for a local restaurant, meticulously crafted in React.js to faithfully translate the designer's vision into a functional interface. The site is optimized for mobile devices."
              ghLink="https://github.com/OmegaPrimePlusIT/Girassol"
              demoLink="https://girassolrestaurante.pt/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={life}
              isBlog={false}
              title="Fitness Studio Website"
              description="A mobile-responsive website tailored for a fitness studio business. Developed from provided mockups, the site showcases studio offerings and services. Implemented using Tailwind CSS."
              ghLink="https://github.com/OmegaPrimePlusIT/LifeCenter"
              demoLink="https://life-center.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carvoeiro}
              isBlog={false}
              title="Airbnb Style Website"
              description="A mobile-responsive website showcasing two rental properties, designed in the style of Airbnb. Developed in React.js for a small rental business, emphasizing ease of use and visual appeal."
              ghLink="https://github.com/OmegaPrimePlusIT/CarvoeiroVillage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
