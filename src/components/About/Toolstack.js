import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows,
  SiJira,
  SiBitbucket,
  SiFirebase,
  SiNpm,
} from "react-icons/si";

function Toolstack() {
  const tooltip = (id, text) => (
    <Tooltip id={id}>
      <strong>{text}</strong>
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip1", "Windows")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiWindows />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip2", "Visual Studio Code")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip3", "Postman")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip4", "Jira")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiJira />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip5", "Vercel")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip5", "Firebase")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip5", "Bitbucket")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiBitbucket />
        </Col>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={tooltip("tooltip5", "NPM")}
      >
        <Col xs={4} md={2} lg={3} className="tech-icons">
          <SiNpm />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
