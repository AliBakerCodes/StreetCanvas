import React from "react";
// import Button from 'react-bootstrap/Button';

function Header(){
    return(
<nav className="navbar navbar-dark bg-primary w-100">
<div className="container-fluid">
    <span className="navbar-brand mb-0 h1"> Street Canvas</span>

    <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#toggleMobileMenu" 
        aria-controls="toggleMobileMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

</div>
</nav>
    )
}

export default Header;