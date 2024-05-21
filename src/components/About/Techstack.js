import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiMysql,
  SiGooglecloud,
  SiPhp,
  SiExpress,
  SiFirebase,
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSolidity,
  SiVercel,
  SiVuedotjs,
  SiStyledcomponents,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip1">JavaScript</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip2">React</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip3">Node.js</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip4">MongoDB</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiMongodb />
        </Col>
      </OverlayTrigger>


      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip11">Express.js</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiExpress />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip6">Git</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip7">Java</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiJava />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip8">MySQL</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip9">Google Cloud</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiGooglecloud />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip10">PHP</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiPhp />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip5">Python</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip14">Vue.js</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiVuedotjs />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip15">PostgreSQL</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiPostgresql />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip16">Redux</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiRedux />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip17">Styled Components</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiStyledcomponents />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="tooltip17">Bootstrap</Tooltip>}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiBootstrap />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
