import React from "react";
// import Button from "react-bootstrap/Button";

function Footer({ currentPage, handlePageChange }) {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container row m-0 gx-3">
        <div className="col">
          <button
            type="button p-2"
            className="btn btn-outline-success btn-circle btn-md"
          >
            <button
              href="#upload"
              onClick={() => handlePageChange("Upload")}
              className={
                currentPage === "Upload" ? "nav-link active" : "nav-link"
              }
            >
              Upload
            </button>
          </button>
        </div>

        <div className="col">
          <button
            type="button p-2"
            className="btn btn-outline-success btn-circle btn-md"
          >
            <button
              href="#addPeg"
              onClick={() => handlePageChange("AddPeg")}
              className={
                currentPage === "AddPeg" ? "nav-link active" : "nav-link"
              }
            >
              Add Peg
            </button>
          </button>
        </div>

        <div className="col">
          <button
            type="button p-2"
            className="btn btn-outline-success btn-circle btn-md"
          >
            <button
              href="#goLive"
              onClick={() => handlePageChange("GoLive")}
              className={
                currentPage === "GoLive" ? "nav-link active" : "nav-link"
              }
            >
              Go Live
            </button>
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-outline-success btn-circle btn-md"
          >
            <button
              href="#explore"
              onClick={() => handlePageChange("Explore")}
              className={
                currentPage === "Explore" ? "nav-link active" : "nav-link"
              }
            >
              Explore
            </button>
          </button>
        </div>
      </div>
    </footer>
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
