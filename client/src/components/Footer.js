import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Footer({ currentPage, handlePageChange }) {
  let navigate = useNavigate();
  return (
    <Navbar fixed="bottom" className="footer mt-auto py-3 bg-light">
      <Container fluid='sm'>
        <Row>
          <Col>
                <Button
                type="button p-2"
                variant="outline-success"
                  onClick={() => navigate("/upload")}
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
                onClick={() => navigate("/addPeg")}
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
                onClick={() => navigate("/goLive")}
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
                  onClick={() => navigate("/explore")}
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
