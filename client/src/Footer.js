// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function NavTabs({ currentPage, handlePageChange }) {
//     return (
//         <Navbar fixed="bottom" className="navFooter">
//             <Container className="navWrapper">
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="m-auto justify-content-center align-items-center">
//                         <Nav.Link
//                             href="#upload"
//                             onClick={() => handlePageChange("Upload")}
//                             className={
//                                 currentPage === "Upload" ? "nav-link active" : "nav-link"
//                             }
//                         >
//                             Upload
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#getlocation"
//                             onClick={() => handlePageChange("Get Location")}
//                             className={
//                                 currentPage === "Get Location" ? "nav-link active" : "nav-link"
//                             }
//                         >
//                             Get Location
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#golive"
//                             onClick={() => handlePageChange("Go live")}
//                             className={
//                                 currentPage === "Go LIve" ? "nav-link active" : "nav-link"
//                             }
//                         >
//                             Go Live
//                         </Nav.Link>
//                         <Nav.Link
//                             href="#explore"
//                             onClick={() => handlePageChange("Explore")}
//                             className={
//                                 currentPage === "Explore" ? "nav-link active" : "nav-link"
//                             }
//                         >
//                             Explore
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavTabs;
