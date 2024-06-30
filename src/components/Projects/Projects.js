import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import suicide from "../../Assets/Projects/suicide.png";
import jwt from "../../Assets/Projects/jwt.png"
import vr from "../../Assets/Projects/vr.png"
import hoaxify from "../../Assets/Projects/hoaxify.png"
import jsf from "../../Assets/Projects/jsf.png"

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vr}
              isBlog={false}
              title="Edion"
              description="Edion is a complete educational platform where scientific experiments
              are supported by virtual reality technology. In addition to virtual reality experiments,
              students reinforce what they have learned with quizzes and assessment tests in the mobile
              and web applications. I developed the backend of this project and the frontend of the web
              application. I used Java, Spring Boot, React.js and TypeScript technologies. You can access
              more detailed information on the GitHub wiki page, or you can also watch our introductory video."
              ghLink="https://github.com/CankayaUniversity/ceng-407-408-2023-2024-Simulating-Scientific-Experiments-Using-Virtual-Reality"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={jwt}
                isBlog={false}
                title="spring-jwt"
                description="JWT (JSON WEB Token) implementation with Spring Boot 3 and Java 17"
                ghLink="https://github.com/enesyagizyilmaz/spring-jwt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoaxify}
              isBlog={false}
              title="Hoaxify"
              description="Hoaxify is a web-based social media application where users can share urban
              legends. Users can view hoaxes shared by other users. Users who wish can delete the hoaxes
              or accounts they have shared. The frontend part of the project was written with React.js and
              the backend part was written with Java&Spring Boot."
              ghLink="https://github.com/enesyagizyilmaz/Hoaxify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsf}
              isBlog={false}
              title="spring-jsf"
              description="It is a CRUD application that I developed using JSF (PrimeFaces) and Spring Boot."
              ghLink="https://github.com/enesyagizyilmaz/spring-jsf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
