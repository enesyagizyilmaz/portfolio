import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram, AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pphoto from "../../Assets/enes-img1.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I work as a software engineer at Türksat, one of the world's leading
              telecommunications and IT companies.
              <br />
              <br />I am currently interested in
              <i>
                <b className="purple"> Java and Spring Boot (Spring Web/Security/Data/JPA, Hibernate)
                </b>
              </i> technologies
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">scalable backend systems </b> and
                working with{" "}
                <b className="purple">
                  Big Data
                </b>
              </i>
              <br />
              <br />
              Lately, I have been focusing on real-time data processing and event-driven architectures using  <b className="purple">Apache Kafka</b> and
              <i>
                <b className="purple">
                  {" "}
                  related tools in the Big Data ecosystem.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={pphoto} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/enesyagizyilmaz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/enes-ya%C4%9F%C4%B1z-y%C4%B1lmaz-4621711a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                    href="mailto:enesy2lmz@icloud.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
