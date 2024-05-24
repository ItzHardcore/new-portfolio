import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/CV_Bruno_Silva.pdf";
import pdfjpeg from "../../Assets/../Assets/pdf.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">

        <div className="py-3">
          <object
            className="resume"
            data={`${pdf}#toolbar=1&navpanes=0`}
            type="application/pdf"
            width="100%"
            height="100%" >
            <div className="d-inline-grid" style={{ justifyItems: "center" }}>

              <a className="mb-3 p-3" href={pdf} download="CV_Bruno_Silva.pdf"><Button
                variant="primary"
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button></a>
              <img src={pdfjpeg} alt="pdf" ></img>
            </div>
          </object>
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>

        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
