import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Bruno.jpeg";

import Type from "./Type";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BRUNO SILVA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} className="py-5 text-center ">
              <img src={myImg} className="img-fluid myAvtar2" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                A BIT <span className="custom_color">ABOUT </span> MYSELF
              </h1>
              <p className="home-about-body">
                I'm really into Frontend development and I enjoy backend aswell. I consider myself as a
                fast learner and a proactive guy! 😉
                <br />
                <br />I work with
                <i>
                  <b className="custom_color"> Javascript, JAVA and Python! </b>
                </i>
                🤓
                <br />
                <br />
                I'm interested in building new &nbsp;
                <i>
                  <b className="custom_color">Web Technologies and Products </b> and
                  also in{" "}
                  <b className="custom_color">
                    Mobile development.
                  </b>
                </i>
                <br />
                <br />
                I like to develop my projects
                with <b className="custom_color">Node.js</b> and
                <i>
                  <b className="custom_color">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="custom_color"> React.js and Vue.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt scale={1.1} tiltReverse={true}>
                <img src={homeLogo} className="img-fluid myAvtar2" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>MY SOCIALS</h1>
              <p>
                Feel free to <span className="custom_color">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/itzhardcore"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/brunomosilva/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/brunomosilva"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
