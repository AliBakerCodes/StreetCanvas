import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
<Navbar className="navbar navbar-dark bg-primary w-100">
<div className="container-fluid">
    <span className="navbar-brand mb-0 h1"> Street Canvas</span>

    <Button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#toggleMobileMenu" 
        aria-controls="toggleMobileMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </Button>

</div>
</Navbar>
    )
}

export default Header;