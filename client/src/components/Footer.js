import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer({ currentPage, handlePageChange }) {
  return (
    <Navbar fixed="bottom" className="footer mt-auto py-3 bg-light">
      <Container fluid='sm'>
        <Row>
          <Col>
                <Button
                type="button p-2"
                variant="outline-success"
                  href="/upload"
                  onClick={() => handlePageChange("Upload")}
                  className={`btn btn-outline-success btn-circle btn-md ${
                    currentPage === "Upload" ? "nav-link active" : "nav-link"
                  }`}
                >
                  Upload
                </Button>
          </Col>

          <Col>
              <Button
              type="button p-2"
              variant="outline-success"
                href="/addPeg"
                onClick={() => handlePageChange("AddPeg")}
                className={`btn btn-outline-success btn-circle btn-md ${
                  currentPage === "AddPeg" ? "nav-link active" : "nav-link"
                }`}
              >
                Add Peg
              </Button>
          </Col>

          <Col>
              <Button
              type="button p-2"
              variant="outline-success"
                href="/goLive"
                onClick={() => handlePageChange("GoLive")}
                className={`btn btn-outline-success btn-circle btn-md ${
                  currentPage === "GoLive" ? "nav-link active" : "nav-link"
                }`}
              >
                Go Live
              </Button>
          </Col>

          <Col>
                <Button
                type="button p-2"
                variant="outline-success"
                  href="/explore"
                  onClick={() => handlePageChange("Explore")}
                  className={`btn btn-outline-success btn-circle btn-md ${
                    currentPage === "Explore" ? "nav-link active" : "nav-link"
                  }`}
                >
                  Explore
                </Button>
          </Col>
        </Row>

      </Container>
</Navbar>
  );
}

export default Footer;

// {
  /* <footer className="footer mt-auto py-3 bg-light">
  <div className="container row m-0 gx-3">
    <div className="col">
      <button
        type="button p-2"
        className="btn btn-outline-success btn-circle btn-md"
      >
        Upload
      </button>
    </div>
    <div className="col">
      <button
        type="button p-2"
        className="btn btn-outline-success btn-circle btn-md"
      >
        Add Peg
      </button>
    </div>
    <div className="col">
      <button
        type="button p-2"
        className="btn btn-outline-success btn-circle btn-md"
      >
        Go Live
      </button>
    </div>
    <div className="col">
      <button
        type="button"
        className="btn btn-outline-success btn-circle btn-md"
      >
        Explore
      </button>
    </div>
  </div>
</footer>; */
// }
