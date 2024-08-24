import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Enes Yağız Yılmaz </span>
            from <span className="purple"> Ankara, Turkey</span>
            <br /><br />
            I am currently employed as a Software Engineer at Türksat Uydu Haberleşme Kablo TV ve İşletme A.Ş.
            <br /><br />
            I have completed Integrated BSc in Computer Engineering at Çankaya University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Golf
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I could either watch it happen or be a part of it."{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
