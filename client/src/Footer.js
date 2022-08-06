import react from 'react';
import boostrap from 'bootstrap';
import reactbootstrap from 'react-bootstrap';
import button from 'react-bootstrap/Button';

function Footer (){
    return (
    
              <footer className="footer mt-auto py-3 bg-light">
        <div className="container row m-0 gx-3">
            <div className="col">
                <button type="button p-2" className="btn btn-outline-success btn-circle btn-md">Explore</button>
            </div>
            <div className="col">
                <button type="button p-2" className="btn btn-outline-success btn-circle btn-md">View</button>     
           </div>
            <div className="col">
                    <button type="button p-2" className="btn btn-outline-success btn-circle btn-md">Upload</button>    
            </div>
            <div className="col">
                <button type="button" className="btn btn-outline-success btn-circle btn-md"></button>
            </div>
        </div>
      </footer>

    )
}

export default Footer;


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
