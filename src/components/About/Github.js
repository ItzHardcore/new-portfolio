import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="custom_color">Code</strong>
      </h1>
      <div className="px-5" style={{ textAlign: "-webkit-center" }}>
        <GitHubCalendar
          username="itzhardcore"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          colorScheme="light"
          theme={{
            light: [
              "#ffffff",
              "#b31212"
            ]
          }}
        />
      </div>

    </Row>
  );
}

export default Github;
