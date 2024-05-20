import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi again, I am <span className="custom_color">Bruno Silva </span>
            from <span className="custom_color"> Lisbon, Portugal.</span>
            <br />
            I am currently employed as a Quality Assurance Engineer at <span className="custom_color">Premium Minds.</span>
            <br />
            I've done 6 months of <span className="custom_color">fullstack development</span> with PHP.
            <br />
            I have completed a <span className="custom_color">BSc in Computer Science</span> at ISCTE-IUL (Lisbon).
            <br />
            <br />
            Apart from coding, some other activities that I like to do!
          </p>
          <ul>
            <li className="about-activity">
              💪 Gym rat lightweight baby!!!
            </li>
            <li className="about-activity">
              🍻 Beer with friends
            </li>
            <li className="about-activity">
              👨‍💻 New tech and geek things :)
            </li>
            <li className="about-activity">
              🌞 Going to the beach
            </li>
            <li className="about-activity">
              🌎 Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't waste energy on something that isn't worth it!"{" "}
          </p>
          <footer className="blockquote-footer">Bruno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
